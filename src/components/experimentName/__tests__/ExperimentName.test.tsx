import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExperimentName from "../ExperimentName";

describe("ExperimentName", (): void => {
  const defaultProps = {
    id: "1",
    name: "name",
    isSaveNameLoading: false,
    onChangeEditName: jest.fn(),
    onClearUndo: jest.fn(),
    onClickSave: jest.fn(),
    onStartEditName: jest.fn(),
  };

  afterEach(cleanup);
  it("matches default ExperimentName snapshot", (): void => {
    const { asFragment } = render(
      <ExperimentName
        insertedText={{ id: "1", name: "name" }}
        {...defaultProps}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render EditIcon", (): void => {
    const { getByTestId } = render(
      <ExperimentName insertedText={null} {...defaultProps} />
    );
    const editIcon = getByTestId("edit-name-component");
    expect(editIcon).toBeInTheDocument();
  });
  it("should render EditIcon with grey mode", (): void => {
    const { getByTestId } = render(
      <ExperimentName
        insertedText={{ id: "2", name: "name" }}
        {...defaultProps}
      />
    );
    const editIcon = getByTestId("target-icon");
    expect(editIcon).toHaveClass("current-icon disabled");
  });
  it("should render SaveIcon and input", (): void => {
    const { getByTestId } = render(
      <ExperimentName
        insertedText={{ id: "1", name: "name" }}
        {...defaultProps}
      />
    );

    const input = getByTestId("input-name-component");
    expect(input).toBeInTheDocument();
  });
  it("after click on SaveIcon shouldn't render input", (): void => {
    const { getByTestId } = render(
      <ExperimentName
        insertedText={{ id: "1", name: "name" }}
        {...defaultProps}
      />
    );
    const input = getByTestId("input-name-component");
    const customIconWrapper = getByTestId("custom-icon");
    fireEvent.click(customIconWrapper);
    expect(input).not.toBeInTheDocument();
  });
});
