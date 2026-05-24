import classNames from "classnames";
import Button from "../Button";
import style from "./styles.module.scss";

interface Props {
  title: string;
  className?: string;
}

const Partner: React.FC<Props> = ({ title, className }) => {
  return (
    <div
      className={classNames(style.partner, {
        [style[className || ""]]: className,
      })}
    >
      <div className={style.partner__content}>
        <h3 className={style.partner__title}>{title}</h3>
        <p className={style.partner__text}>
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <Button ancora="#" className="botao--partner">
          Confira
        </Button>
      </div>
    </div>
  );
};

export default Partner;
