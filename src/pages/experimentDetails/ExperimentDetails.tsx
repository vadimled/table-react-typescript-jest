import React, { FC } from "react";
import style from "./ExperimentDetails.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentExperiment } from "../../store/selectors";
import * as actions from "../../store/actions/experimentsActions";
import DetailItem from "../../components/detailItem";
import Experiment from "../../components/experiment";
import { RecordType, SystemsPropsType } from "../../types";
import { StoreType } from "src";

const ExperimentDetails: FC<SystemsPropsType> = ({ location }) => {
  const currentExperiment: RecordType | null = useSelector((state: StoreType) =>
    getCurrentExperiment(state)
  );
  const dispatch = useDispatch();
  const { state: query } = location;
  const {
    id,
    media,
    services,
    mode,
    status,
    name,
    total,
    userId,
    type,
  }: RecordType = currentExperiment || query || {};

  if (!currentExperiment) {
    dispatch(actions.setCurrentExperiment(query));
  }

  return (
    <div className={style["experiment-details-wrapper"]}>
      <div className="inner-wrapper">
        <Experiment id={id} name={name} />
        <div className="detail-item-wrapper">
          <DetailItem title="Type" text={type} />
          <DetailItem title="Total" text={total} />
          <DetailItem title="Status" text={status} />
          <DetailItem title="Mode" text={mode} />
          <DetailItem title="UserId" text={userId} />
        </div>
      </div>
      <div className="inner-wrapper">
        <div className="detail-item-wrapper">
          <h3>Media:</h3>
          {media.map(({ description, minutes, type: typeMedia }, i: number) => (
            <div className="detail-item" key={i}>
              <div>Type: {typeMedia}</div>
              <div>Description: {description}</div>
              <div>Minutes: {minutes}</div>
            </div>
          ))}
        </div>
        <div className="detail-item-wrapper">
          <h3>Services:</h3>
          {services.map(({ type: typeServices, value }, i: number) => (
            <div className="detail-item" key={i}>
              <div>Type: {typeServices}</div>
              {value && <div>Value: {value}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperimentDetails;
