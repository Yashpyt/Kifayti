import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSubcategory, getSubcategory } from '../../../store/ActionCreators/SubcategoryActionCreators'

export default function Subcategory() {
    let [data,setData] = useState([])
    let dispatch = useDispatch()
    let SubcategoryStateData = useSelector((state)=>state.SubcategoryStateData)
    function deleteItem(id){
        if(window.confirm('Are you sure!! You Want to Delete this item!please confirm: '))
        dispatch(deleteSubcategory({id:id}))
        getAPIData()
    }
    function getAPIData(){
        dispatch(getSubcategory())
        if(SubcategoryStateData.length){
            setData(SubcategoryStateData.slice(1).reverse())
        }
    }
    useEffect(()=>{
        getAPIData()
    },[SubcategoryStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Subcategory<Link to="/admin/subcategory/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        <div className="table-responsive">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item,index)=>{
                                        return <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td><Link to={`/admin/subcategory/update/${item.id}`}><i className='fa fa-edit text-success'></i></Link></td>
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
