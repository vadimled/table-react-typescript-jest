import React, { FC } from "react";
import style from "./DetailItem.module.scss";

interface DetailItemType {
  title: string;
  text: string;
}
const DetailItem: FC<DetailItemType> = ({ title, text }) => {
  return (
    <div className={style["detail-item-wrapper"]}>
      {title}: {text}
    </div>
  );
};

export default DetailItem;
