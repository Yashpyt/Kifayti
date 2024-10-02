import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct } from '../../../store/ActionCreators/ProductActionCreators'

export default function Product() {
    let [data,setData] = useState([])
    let dispatch = useDispatch()
    let ProductStateData = useSelector((state)=>state.ProductStateData)
    function deleteItem(id){
        if(window.confirm('Are you sure!! You Want to Delete this item!please confirm: '))
        dispatch(deleteProduct({id:id}))
        getAPIData()
    }
    function getAPIData(){
        dispatch(getProduct())
        if(ProductStateData.length){
            setData(ProductStateData.slice(1).reverse())
        }
    }
    useEffect(()=>{
        getAPIData()
    },[ProductStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Product<Link to="/admin/product/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        <div className="table-responsive">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Color/Sizee</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Pic1</th>
                                    <th>Pic2</th>
                                    <th>Pic3</th>
                                    <th>Pic4</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item,index)=>{
                                        return <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.maincategory}/{item.subcategory}/{item.brand}</td>
                                            <td>{item.color}/{item.size}</td>
                                            <td><del className='text-danger'>&#8377;{item.baseprice}</del> &#8377;{item.finalprice} <sup>{item.discount}%off</sup></td>
                                            <td>{item.stock}</td>
                                            <td><a href={`/products/${item.pic1}`}target="blank" rel='noreferrer'><img src={`/products/${item.pic1}`} height="80px" width="80px"></img></a></td>
                                            <td><a href={`/products/${item.pic2}`}target="blank" rel='noreferrer'><img src={`/products/${item.pic2}`} height="80px" width="80px"></img></a></td>
                                            <td><a href={`/products/${item.pic3}`}target="blank" rel='noreferrer'><img src={`/products/${item.pic3}`} height="80px" width="80px"></img></a></td>
                                            <td><a href={`/products/${item.pic4}`}target="blank" rel='noreferrer'><img src={`/products/${item.pic4}`} height="80px" width="80px"></img ></a></td>
                                            <td><Link to={`/admin/Product/update/${item.id}`}><i className='fa fa-edit text-success'></i></Link></td>
                                            <td><button className='btn' onClick={()=>deleteItem(item.id)}><i className='fa fa-trash text-danger'></i></button></td>

                                        </tr>
                                    })
                                    
                                        
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
