import actionsTypes from "../actionsTypes";
// import createReducer from "./createReducer";
import { RecordType, ActionsType, RecordMainType } from "../../types";
import createReducer from "./createReducer";

const initialState = {
  experiments: [] as Array<RecordType>,
  isTableLoading: false,
  isSaveNameLoading: false,
  searchQuery: "",
  currentExperiment: null as RecordType | null,
  experimentName: null as RecordMainType | null,
};

export type InitialStateType = typeof initialState;

interface NewExperimentsType {
  type: string;
  payload: RecordType;
}

function getNewExperiments(
  experiments: Array<RecordType>,
  action: NewExperimentsType
) {
  let newExperiments: Array<RecordType> = experiments.map((experiment) => {
    if (experiment.id === action.payload.id) {
      return {
        ...experiment,
        name: action.payload.name,
      };
    }
    return experiment;
  });
  return newExperiments;
}

const experimentsReducer = createReducer(initialState, {
  [actionsTypes.UPDATE_SEARCH]: (
    state: InitialStateType,
    action: ActionsType
  ) => {
    return {
      ...state,
      searchQuery: action.payload,
    };
  },
  [actionsTypes.SET_CURRENT_EXPERIMENT]: (
    state: InitialStateType,
    action: ActionsType
  ) => {
    return {
      ...state,
      currentExperiment: action.payload,
    };
  },
  [actionsTypes.CLEAR_CURRENT_EXPERIMENT]: (state: InitialStateType) => {
    return {
      ...state,
      currentExperiment: null,
    };
  },
  [actionsTypes.SET_TABLE_LOADING]: (
    state: InitialStateType,
    action: ActionsType
  ) => {
    return {
      ...state,
      isTableLoading: action.payload,
    };
  },
  [actionsTypes.CLEAR_UNDO_CHANGE_EXPERIMENT_NAME]: (
    state: InitialStateType
  ) => {
    return {
      ...state,
      experimentName: null,
    };
  },
  [actionsTypes.CLEAR_CURRENT_EXPERIMENT]: (state: InitialStateType) => {
    return {
      ...state,
      currentExperiment: null,
    };
  },
  [actionsTypes.SET_SAVE_NAME_LOADING]: (
    state: InitialStateType,
    action: ActionsType
  ) => {
    return {
      ...state,
      isSaveNameLoading: action.payload,
    };
  },
  [actionsTypes.SET_EXPERIMENTS_TO_STORE]: (
    state: InitialStateType,
    action: ActionsType
  ) => {
    return {
      ...state,
      experiments: action.payload,
    };
  },
  [actionsTypes.START_EDIT_NAME]: (
    state: InitialStateType,
    action: ActionsType
  ) => {
    return {
      ...state,
      experimentName: action.payload,
    };
  },
  [actionsTypes.SET_EXPERIMENT_NAME]: (
    state: InitialStateType,
    action: ActionsType
  ) => {
    return {
      ...state,
      experimentName: {
        ...state.experimentName,
        name: action.payload,
      } as RecordMainType | null,
    };
  },
  [actionsTypes.SET_UPDATED_EXPERIMENT_TO_STORE]: (
    state: InitialStateType,
    action: NewExperimentsType
  ) => {
    let { experiments } = state;
    let newExperiments = getNewExperiments(experiments, action);

    return {
      ...state,
      experiments: newExperiments,
      experimentName: null,
    };
  },
});

export default experimentsReducer;
