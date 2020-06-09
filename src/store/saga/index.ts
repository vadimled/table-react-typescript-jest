import { takeEvery } from "redux-saga/effects";
import types from "../actionsTypes";
import { fetchAllExperimentsSaga, updateExperimentNameSaga } from "./sagas";

export function* watchSaga() {
  yield takeEvery(types.FETCH_EXPERIMENTS, fetchAllExperimentsSaga);
  yield takeEvery(types.SAVE_NEW_EXPERIMENT_NAME, updateExperimentNameSaga);
}
