import React, { ChangeEvent, Dispatch, FC, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/experimentsActions";
import {
  getExperimentName,
  getFilteredExperiments,
  getIsSaveNameLoading,
  getIsTableLoading,
  getSearchQuery,
} from "../../store/selectors";
import Spinner from "../../components/Spinner";
import style from "./Experiments.module.scss";
import { Table } from "antd";
import ExperimentName from "../../components/experimentName";
import { Link, RouteComponentProps } from "react-router-dom";
import { ITableType, TABLE_COLUMNS } from "./tableConfig";
import {
  ActionsType,
  RecordMainType,
  RecordType,
  IActionWithoutPayload,
} from "../../types";
import { PaginationConfig } from "antd/lib/pagination";
import { ColumnProps } from "antd/lib/table";
import { StoreType } from "../../index";

interface IProps extends RouteComponentProps<{}> {
  itemsPerPage: number;
}
interface IExperimentsProps {
  isTableLoading: boolean;
  isSaveNameLoading: boolean;
  experiments: Array<RecordType> | undefined;
  experimentName: RecordMainType | null;
  searchQuery: string;
}

interface IExperimentsActionProps {
  clearUndoEditName: () => IActionWithoutPayload | void;
  startEditName: (data: RecordMainType) => ActionsType | void;
  setEditExperimentName: (a: string) => ActionsType | void;
  saveNewExperienceName: (data: RecordMainType | null) => ActionsType | void;
}

type TableType = ColumnProps<RecordType>[] & ITableType[];

const Experiments: FC<IProps & IExperimentsProps & IExperimentsActionProps> = ({
  experiments,
  isTableLoading,
  isSaveNameLoading,
  setEditExperimentName,
  searchQuery,
  itemsPerPage,
  startEditName,
  experimentName,
  clearUndoEditName,
  saveNewExperienceName,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleOnPageChange = (pagination: PaginationConfig) => {
    setCurrentPage(pagination?.current as number);
  };

  const handleEditName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setEditExperimentName(value);
  };

  const columnsConverter = (columns: TableType) => {
    return columns.map((column) => {
      if (column.dataIndex === "name") {
        column.render = (text, record) => {
          return (
            <ExperimentName
              name={text}
              id={record.id}
              insertedText={experimentName}
              onStartEditName={startEditName}
              onChangeEditName={handleEditName}
              onClearUndo={clearUndoEditName}
              onClickSave={saveNewExperienceName}
              isSaveNameLoading={isSaveNameLoading}
            />
          );
        };
      } else if (column.dataIndex === "details") {
        column.render = (_text, record) => {
          return (
            <Link
              to={{
                pathname: `/${record?.id}}`,
                state: record,
              }}
              className="details-btn"
            >
              Details
            </Link>
          );
        };
      } else {
        column.render = (text) => {
          return <div className="n-table-cell">{text}</div>;
        };
      }
      return column;
    });
  };

  const columns = columnsConverter(TABLE_COLUMNS as TableType);
  return (
    <div className={`${style["experiments-page-content"]}`}>
      {isTableLoading ? (
        <Spinner />
      ) : (
        <>
          {searchQuery && !experiments?.length ? (
            <div>No items.</div>
          ) : (
            <Table
              className={style["new-table"]}
              pagination={{ pageSize: itemsPerPage, current: currentPage || 1 }}
              columns={columns}
              dataSource={experiments}
              onChange={handleOnPageChange}
              rowKey="name"
            />
          )}
        </>
      )}
    </div>
  );
};

function mapStateToProps(state: StoreType) {
  return {
    isTableLoading: getIsTableLoading(state),
    isSaveNameLoading: getIsSaveNameLoading(state),
    experiments: getFilteredExperiments(state),
    experimentName: getExperimentName(state),
    searchQuery: getSearchQuery(state),
  };
}

function mapDispatchToProps(
  dispatch: Dispatch<ActionsType | IActionWithoutPayload>
): IExperimentsActionProps {
  return {
    clearUndoEditName: () => dispatch(actions.clearUndoEditName()),
    startEditName: (data: RecordMainType) =>
      dispatch(actions.startEditName(data)),
    setEditExperimentName: (text: string) =>
      dispatch(actions.setEditExperimentName(text)),
    saveNewExperienceName: (data: RecordMainType | null) =>
      dispatch(actions.saveNewExperienceName(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Experiments);
