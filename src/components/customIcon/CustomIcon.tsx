/**
 The CustomIcon component renders the any Icon transmitted through props as a ReactComponent.
 If the property "disabled" is false then either the Icon or the Spinner is drawn
 If the property "disabled" is true then then the Icon will drawn with gray color
 */
import React, { FC, SVGProps } from "react";
import { Spin } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import * as styles from "./CustomIcon.module.scss";
import cn from "classnames";

interface CustomIconType {
  disabled?: boolean;
  Icon: FC<SVGProps<SVGSVGElement>>;
  loading?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const CustomIcon: FC<CustomIconType> = ({
  disabled,
  loading,
  Icon,
  onClick,
}) => {
  return (
    <div
      className={styles["custom-icon-wrapper"]}
      onClick={onClick}
      data-testid="custom-icon"
    >
      {loading && !disabled ? (
        <Spin
          data-testid="antd-spinner"
          indicator={
            <SyncOutlined data-testid="icon-spin" className="spinner" spin />
          }
        />
      ) : (
        <div
          data-testid="target-icon"
          className={cn("current-icon", { disabled: disabled })}
        >
          <Icon />
        </div>
      )}
    </div>
  );
};

export default CustomIcon;
