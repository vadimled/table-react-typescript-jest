import * as actions from "../store/actions/experimentsActions";

export type MediaType = {
  type: string;
  description: string;
  minutes: string;
};

export type ServicesType = {
  type: string;
  value: string;
};

export type RecordMainType = {
  id: string | undefined;
  name: string | undefined;
};

export type RecordType = {
  id: string;
  media: Array<MediaType>;
  services: Array<ServicesType>;
  mode: string;
  status: string;
  name: string;
  total: string;
  userId: string;
  type: string;
};

export interface ServerExperimentsType {
  data: Array<RecordType>;
  status: number;
}

export interface ServerSingeExperimentType {
  data: RecordType;
  status: number;
}

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsType = ReturnType<PropertiesTypes<typeof actions>>;

export interface SystemsPropsType {
  location: {
    state: RecordType;
  };
}
export interface IActionWithoutPayload {
  readonly type: string;
}
