import {
  RecordMainType,
  ServerSingeExperimentType,
  ServerExperimentsType,
} from "../types";
import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_DEV
      : process.env.REACT_APP_PROD,
});

export function fetchAllExperimentsApi() {
  return instance.get<ServerExperimentsType>("/");
}

export function updateExperimentsNameApi(payload: RecordMainType) {
  const { id, name } = payload;
  return instance.patch<ServerSingeExperimentType>(`/${id}`, { name });
}
