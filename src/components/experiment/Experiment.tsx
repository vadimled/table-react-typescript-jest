import React, { FC } from "react";
import style from "./Experiment.module.scss";
import { RecordMainType } from "../../types";

const Experiment: FC<RecordMainType> = ({ id, name }) => {
  return (
    <div className={style["experiment-wrapper"]}>
      <div className="experiments-id">
        <span>{id}</span>
      </div>
      <div className="name">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Experiment;
