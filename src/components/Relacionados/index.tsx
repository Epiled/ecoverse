import { Link } from "react-router-dom";
import Partner from "../Partner";
import Title from "../Title";
import style from "./Relacionados.module.scss";

const Relacionados: React.FC = () => {
  return (
    <section className={style.relacionados}>
      <Title>Produtos relacionados</Title>

      <Link className={style.relacionados__link} to={"/"}>
        Ver todos
      </Link>

      <div className={style.relacionados__parceiros}>
        <Partner title={"Produtos"} className={"parceiro--alt"} />
        <Partner title={"Produtos"} className={"parceiro--alt"} />
      </div>
    </section>
  );
};

export default Relacionados;
