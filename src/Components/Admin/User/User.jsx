import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'



export default function User() {
    let [data,setData] = useState([])
   async function deleteItem(id){
        if(window.confirm('Are you sure!! You Want to Delete this item!please confirm: ')){
            let response = await fetch("/user/"+id,{
                method:"delete",
                headers:{
                    "content-type":"application/json"
                }
            })
            response = await response.json()
        getAPIData()
    }
        }
    async function getAPIData(){
       var response = await fetch("/user",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
       })
       response = await response.json()
       setData(response.slice(1).reverse())
    }
    useEffect(()=>{
        getAPIData()
    },[])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>User List</h5>
                        <div className="table-responsive">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Role</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item,index)=>{
                                        return <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.role}</td>
                                            <td><Link to={`/admin/brand/update/${item.id}`}><i className='fa fa-edit text-success'></i></Link></td>
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
