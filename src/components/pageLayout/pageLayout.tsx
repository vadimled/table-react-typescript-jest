import React, { FC } from "react";
import style from "./pageLayout.module.scss";

interface TypeProps {
  children: JSX.Element | JSX.Element[];
}

const PageLayout: FC<TypeProps> = ({ children }) => {
  return <div className={`${style["page-wrapper"]}`}>{children}</div>;
};

export default PageLayout;
