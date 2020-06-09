import { call, put } from "redux-saga/effects";
import * as actions from "../actions/experimentsActions";
import { fetchAllExperimentsApi, updateExperimentsNameApi } from "../../api";
import { ServerSingeExperimentType, ServerExperimentsType } from "../../types";

export function* fetchAllExperimentsSaga() {
  try {
    yield put(actions.setTableLoading(true));
    const result: ServerExperimentsType = yield call(fetchAllExperimentsApi);
    if (result?.status === 200) {
      yield put(actions.setExperimentsToStore(result.data));
    }
    yield put(actions.setTableLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* updateExperimentNameSaga(action: any) {
  try {
    yield put(actions.setSaveNameLoading(true));
    const result: ServerSingeExperimentType = yield call(
      updateExperimentsNameApi,
      action.payload
    );
    if (result?.status === 200) {
      yield put(actions.setUpdatedExperimentToStore(result.data));
    }
    yield put(actions.setSaveNameLoading(false));
  } catch (error) {
    console.log(error);
  }
}
