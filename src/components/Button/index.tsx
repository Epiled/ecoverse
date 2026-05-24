import React from "react";
import style from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  children?: React.ReactNode;
  ancora: string;
  className?: string;
}

const Button: React.FC<Props> = ({ children, ancora, className }) => {
  return (
    <a
      className={classNames(style.button, {
        [style[className || ""]]: className,
      })}
      href={ancora}
    >
      {children}
    </a>
  );
};

export default Button;
