import React, { useEffect,useState } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate, useParams } from 'react-router-dom'

import { updateSubcategory, getSubcategory } from "../../../store/ActionCreators/SubcategoryActionCreators"
import { useDispatch, useSelector } from 'react-redux'
export default function UpdateSubcategory() {
    let [name,setName] = useState("")
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let { id } = useParams()
    let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
    function getInputData(e) {
        setName(e.target.value)


    }
    async function postData(e) {
        e.preventDefault()
        let item = SubcategoryStateData.length && SubcategoryStateData.slice(1).find((x) => x.name === name)
        if (item)
            alert("bhai ye phale se hai database me dusra kuch bhar")
        else {
            dispatch(updateSubcategory({id:id, name: name }))
            navigate("/admin/subcategory")

        }
    }
    function getAPIData() {
        dispatch(getSubcategory())
        if(SubcategoryStateData.length){
            let item = SubcategoryStateData.slice(1).find((x)=>x.id===Number(id))
            if(item)
            setName(item.name)
        }
    }
    useEffect(() => {
        getAPIData()
    }, [SubcategoryStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Subcategory</h5>
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type='text' name='name' value={name} required minLength={3} maxLength={50} className='form-control' onChange={getInputData} placeholder='Name' ></input>
                            </div>
                            <div className="mb-3">
                                <button type="button" className='btn btn-success w-50' onClick={() => window.history.back()} >Back</button>
                                <button type='submit' className='btn btn-primary w-50' >Update</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}
