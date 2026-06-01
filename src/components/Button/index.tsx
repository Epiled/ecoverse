import React from "react";
import classNames from "classnames";

import { ButtonProps } from "./types";

import style from "./styles.module.scss";

const Button: React.FC<ButtonProps> = ({ children, link, className }) => {
  return (
    <a
      className={classNames(style.button, {
        [style[className || ""]]: className,
      })}
      href={link}
    >
      {children}
    </a>
  );
};

export default Button;
