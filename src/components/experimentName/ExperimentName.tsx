import React, { FC, useState } from "react";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as ClearUndoIcon } from "../../assets/close.svg";
import { ReactComponent as SaveIcon } from "../../assets/save.svg";
import * as styles from "./ExperimentName.module.scss";
import { Input } from "antd";
import CustomIcon from "../customIcon";
import {
  ActionsType,
  RecordMainType,
  IActionWithoutPayload,
} from "../../types";

type PropsType = {
  id: string;
  name: string;
  isSaveNameLoading: boolean;
  insertedText: RecordMainType | null;
  onChangeEditName: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void | undefined;
  onClearUndo: () => IActionWithoutPayload | void;
  onClickSave: (data: RecordMainType | null) => ActionsType | void;
  onStartEditName: (data: RecordMainType) => ActionsType | void;
};

const ExperimentName: FC<PropsType> = ({
  id,
  name,
  isSaveNameLoading,
  onChangeEditName,
  onClearUndo,
  onClickSave,
  onStartEditName,
  insertedText,
}) => {
  const [isEdit, setMode] = useState(insertedText?.id === id);

  const onClickEditIcon = () => {
    setMode(true);
    onStartEditName({ id, name });
  };
  const onClickCleanIcon = () => {
    setMode(false);
    onClearUndo();
  };
  const onClickSaveIcon = () => {
    if (insertedText?.name !== name) {
      setMode(false);
      onClickSave(insertedText);
    }
  };

  const renderNameComponent = (): JSX.Element => {
    if (isEdit && insertedText) {
      return (
        <>
          <Input
            data-testid="input-name-component"
            placeholder="Edit name"
            onChange={onChangeEditName}
            value={insertedText?.name || ""}
            suffix={
              <ClearUndoIcon
                className="delete-icon"
                onClick={onClickCleanIcon}
              />
            }
          />
          <CustomIcon Icon={SaveIcon} onClick={onClickSaveIcon} />
        </>
      );
    } else {
      return (
        <>
          <div data-testid="edit-name-component" className="show-name-field">
            {name}
          </div>
          <CustomIcon
            Icon={EditIcon}
            loading={isSaveNameLoading}
            onClick={onClickEditIcon}
            disabled={!!insertedText && insertedText?.id !== id}
          />
        </>
      );
    }
  };

  return (
    <div className={styles["experiment-name-wrapper"]}>
      {renderNameComponent()}
    </div>
  );
};

export default ExperimentName;
