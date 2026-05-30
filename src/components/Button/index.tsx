import React from "react";
import classNames from "classnames";

import style from "./styles.module.scss";

interface Props {
  children?: React.ReactNode;
  link: string;
  className?: string;
}

const Button: React.FC<Props> = ({ children, link, className }) => {
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
