import {all} from "redux-saga/effects";
import MaincategorySagas from "./MianCategorySagas";
import BrandSagas from "./BrandSagas";
import ProductSagas from "./ProductSagas";
import SubcategorySagas from "./SubcategorySagas";

export default function* RootSagas(){
    yield all([
        MaincategorySagas(),
        SubcategorySagas(),
        BrandSagas(),
        ProductSagas(),
    ])
}