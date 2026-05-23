import classNames from "classnames";
import Button from "../Button";
import style from "./Parceiro.module.scss"

interface Props {
  titulo: string,
  className?: string,
}

const Parceiro: React.FC<Props> = ({ titulo, className }) => {
  return (
    <div className={classNames(
      style.parceiro, 
      { [style[className || '']]: className }
      )}>
      <div className={style.parceiro__conteudo}>
        <h3 className={style.parceiro__titulo}>
          {titulo}
        </h3>
        <p className={style.parceiro__txt}>
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <Button ancora="#" className="botao--parceiro">
          Confira
        </Button>
      </div>
    </div>
  )
}

export default Parceiro;