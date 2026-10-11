import { put, takeEvery } from "redux-saga/effects"
import { CREATE_SEO_DATA, CREATE_SEO_DATA_RED, DELETE_SEO_DATA, DELETE_SEO_DATA_RED, GET_SEO_DATA, GET_SEO_DATA_RED, UPDATE_SEO_DATA, UPDATE_SEO_DATA_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./APICallingService/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./APICallingService/index"

function* createSaga(action) {                                                          //Worker Saga
    let response = yield createRecord("seoData", action.payload)
    // let response = yield createMultipartRecordcreateRecord("seoData", action.payload)
    yield put({ type: CREATE_SEO_DATA_RED, payload: response })
}

function* getSaga(action) {                                                            //Worker Saga
    let response = yield getRecord("seoData")
    yield put({ type: GET_SEO_DATA_RED, payload: response })
}

function* updateSaga(action) {                                                          //Worker Saga
    yield updateRecord("seoData", action.payload)
    yield put({ type: UPDATE_SEO_DATA_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("seoData", action.payload)
    // yield put({ type: UPDATE_SEO_DATA_RED, payload: response })
}

function* deleteSaga(action) {                                                          //Worker Saga
    yield deleteRecord("seoData", action.payload)
    yield put({ type: DELETE_SEO_DATA_RED, payload: action.payload })
}

export default function* SeoDataSagas() {                                           //Watcher Saga
    yield takeEvery(CREATE_SEO_DATA, createSaga)                                     //Watcher Saga
    yield takeEvery(GET_SEO_DATA, getSaga)                                          //Watcher Saga
    yield takeEvery(UPDATE_SEO_DATA, updateSaga)                                    //Watcher Saga
    yield takeEvery(DELETE_SEO_DATA, deleteSaga)                                    //Watcher Saga
}