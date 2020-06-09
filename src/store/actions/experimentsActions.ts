import types from "../actionsTypes";
import { RecordType, RecordMainType } from "src/types";

export const updateSearch = (data: string) =>
    ({
      type: types.UPDATE_SEARCH,
      payload: data,
    } as const),
  setCurrentExperiment = (data: RecordType) => {
    return {
      type: types.SET_CURRENT_EXPERIMENT,
      payload: data,
    } as const;
  },
  setTableLoading = (data: boolean) =>
    ({
      type: types.SET_TABLE_LOADING,
      payload: data,
    } as const),
  setSaveNameLoading = (data: boolean) => {
    return {
      type: types.SET_SAVE_NAME_LOADING,
      payload: data,
    } as const;
  },
  setExperimentsToStore = (data: Array<RecordType>) => {
    return {
      type: types.SET_EXPERIMENTS_TO_STORE,
      payload: data,
    } as const;
  },
  startEditName = (data: RecordMainType) => {
    return {
      type: types.START_EDIT_NAME,
      payload: data,
    } as const;
  },
  setEditExperimentName = (text: string) => {
    return {
      type: types.SET_EXPERIMENT_NAME,
      payload: text,
    } as const;
  },
  setUpdatedExperimentToStore = (data: RecordType) => {
    return {
      type: types.SET_UPDATED_EXPERIMENT_TO_STORE,
      payload: data,
    } as const;
  },
  saveNewExperienceName = (data: RecordMainType | null) => {
    return {
      type: types.SAVE_NEW_EXPERIMENT_NAME,
      payload: data,
    } as const;
  },
  clearUndoEditName = () =>
    ({ type: types.CLEAR_UNDO_CHANGE_EXPERIMENT_NAME, payload: null } as const),
  clearCurrentExperiment = () =>
    ({ type: types.CLEAR_CURRENT_EXPERIMENT, payload: null } as const),
  fetchAllExperiments = () =>
    ({ type: types.FETCH_EXPERIMENTS, payload: null } as const);
