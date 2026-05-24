import { forwardRef } from "react";
import style from "./styles.module.scss";
import vtex from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Brand = forwardRef<HTMLAnchorElement>((_, ref) => {
  return (
    <Link ref={ref} className={style.brand} to={"/"}>
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
