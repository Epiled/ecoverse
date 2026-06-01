import { forwardRef } from "react";
import { Link } from "react-router-dom";

import vtex from "@/assets/img/logo.png";

import style from "./styles.module.scss";

const Brand = forwardRef<HTMLAnchorElement>((_, ref) => {
  return (
    <Link ref={ref} className={style.brand} to={"/"} data-visible="true">
      <img
        className={style.brand__image}
        src={vtex}
        width={171}
        height={171}
        alt="#"
      />
    </Link>
  );
});

export default Brand;
