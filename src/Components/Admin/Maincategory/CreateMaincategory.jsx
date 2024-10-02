import React, { useEffect, useRef } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate } from 'react-router-dom'

import { addMaincategory, getMaincategory } from "../../../store/ActionCreators/MainCategoryActionCreators"
import { useDispatch, useSelector } from 'react-redux'
export default function CreateMaincategory() {
    let name = useRef("")
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
    function getInputData(e) {
        name.current = e.target.value


    }
    async function postData(e) {
        e.preventDefault()
        let item = MaincategoryStateData.length && MaincategoryStateData.slice(1).find((x) => x.name === name.current)
        if (item)
            alert("bhai ye phale se hai database me dusra kuch bhar")
        else {
            dispatch(addMaincategory({ name: name.current }))
            navigate("/admin/maincategory")

        }
    }
    function getAPIData() {
        dispatch(getMaincategory())
    }
    useEffect(() => {
        getAPIData()
    }, [MaincategoryStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Maincategory</h5>
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type='text' name='name' required minLength={3} maxLength={50} className='form-control' onChange={getInputData} placeholder='Name' ></input>
                            </div>
                            <div className="mb-3">
                                <button type="button" className='btn btn-success w-50' onClick={() => window.history.back()} >Back</button>
                                <button type='submit' className='btn btn-primary w-50' >Create</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}
