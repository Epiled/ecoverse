import classNames from "classnames";

import { TitleProps } from "./types";

import style from "./styles.module.scss";

const Title: React.FC<TitleProps> = ({ children, alt }) => {
  return (
    <h2 className={classNames(style.title, { [style["title--alt"]]: alt })}>
      {children}
    </h2>
  );
};

export default Title;
