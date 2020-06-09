import React from "react";
import CustomIcon from "../CustomIcon";
import { ReactComponent as SaveIcon } from "../../../assets/save.svg";
import { fireEvent, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("CustomIcon", (): void => {
  afterEach(cleanup);
  it("snapshot of component view if 'disabled===false && loading===false' ", (): void => {
    const { asFragment } = render(
      <CustomIcon Icon={SaveIcon} onClick={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("should have been called ones after click", (): void => {
    const onIconClick = jest.fn();
    const { getByTestId } = render(
      <CustomIcon Icon={SaveIcon} onClick={onIconClick} />
    );
    const customIconWrapper = getByTestId("custom-icon");
    fireEvent.click(customIconWrapper);
    expect(onIconClick).toHaveBeenCalledTimes(1);
  });
  it("element should has class 'disabled' if 'disabled===true' ", (): void => {
    const { getByTestId } = render(
      <CustomIcon Icon={SaveIcon} onClick={jest.fn()} disabled />
    );
    const targetIcon = getByTestId("target-icon");
    expect(targetIcon).toHaveClass("disabled");
  });
  it("The 'antd-spinner' should not exists if component property 'disabled' is true", (): void => {
    const { queryByTestId } = render(
      <CustomIcon Icon={SaveIcon} onClick={jest.fn()} disabled />
    );
    expect(queryByTestId("antd-spinner")).toBeNull();
  });
});
