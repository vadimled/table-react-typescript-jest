import { createSelector } from "reselect";
import { StoreType } from "src";

export const getExperimentName = (state: StoreType) =>
  state.experimentsReducer?.experimentName;
export const getIsTableLoading = (state: StoreType) =>
  state.experimentsReducer?.isTableLoading;
export const getIsSaveNameLoading = (state: StoreType) =>
  state.experimentsReducer?.isSaveNameLoading;
export const getExperiments = (state: StoreType) =>
  state.experimentsReducer?.experiments;
export const getSearchQuery = (state: StoreType) =>
  state.experimentsReducer?.searchQuery;
export const getCurrentExperiment = (state: StoreType) =>
  state.experimentsReducer?.currentExperiment;

export const getFilteredExperiments = createSelector(
  getExperiments,
  getSearchQuery,
  (experiments, searchQuery) => {
    return Array.isArray(experiments)
      ? experiments?.filter(
          (experiment) =>
            experiment.id.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
            -1
        )
      : undefined;
  }
);
