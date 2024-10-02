import {takeEvery,put} from "redux-saga/effects"
import { ADD_MAINCATEGORY, ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../constants"
import { addRecord, deleteRecord, getRecord, updateRecord } from "./Services/MainCategoryServices"
function* add(action){
    let response = yield addRecord(action.payload)
    yield put({type:ADD_MAINCATEGORY_RED,payload:response})

}
function* get(){
    let response = yield getRecord()
    yield put({type:GET_MAINCATEGORY_RED,payload:response})

}
function* update(action){
    yield updateRecord(action.payload)
    yield put({type:UPDATE_MAINCATEGORY_RED,payload:action.payload})

}
function* deleteItem(action){
    yield deleteRecord(action.payload)
    yield put({type:DELETE_MAINCATEGORY_RED,payload:action.payload})

}
export default function* MaincategorySagas(){
    yield takeEvery(ADD_MAINCATEGORY,add)
    yield takeEvery(GET_MAINCATEGORY,get)
    yield takeEvery(UPDATE_MAINCATEGORY,update) 
    yield takeEvery(DELETE_MAINCATEGORY,deleteItem)   
}