import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware  from "redux-saga"

import RootSagas from "./Sagas/RootSagas"
import  RootReducer from "./Reducers/RootReducers"


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:RootReducer,
    middleware : ()=>[sagaMiddleware]
})
export default store

sagaMiddleware.run(RootSagas)