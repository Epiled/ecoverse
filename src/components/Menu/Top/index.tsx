import shield from "../../../assets/svg/shield-check.svg";
import truck from "../../../assets/svg/truck.svg";
import creditCard from "../../../assets/svg/credit-card.svg";

import style from "./styles.module.scss";

interface ITopo {
  imagem: string;
  texto: string;
  destaque: string;
  padrao?: boolean;
}

const Topo: ITopo[] = [
  {
    imagem: shield,
    texto: "Compra",
    destaque: " 100% segura",
    padrao: false,
  },
  {
    imagem: truck,
    texto: "acima de R$ 200",
    destaque: "Frete grátis ",
    padrao: true,
  },
  {
    imagem: creditCard,
    texto: "suas compras",
    destaque: "Parcele  ",
    padrao: true,
  },
];

const Top: React.FC = () => {
  return (
    <div className={style.top}>
      {Topo.map((item, index) => {
        return (
          <span key={index} className={style.top__container}>
            <img
              className={style.top__image}
              src={item.imagem}
              width="20px"
              height="20px"
              alt="#"
            />

            {item.padrao ? (
              <span className={style.top__text}>
                <span className={style.top__highlight}>{item.destaque}</span>
                {item.texto}
              </span>
            ) : (
              <span className={style.top__text}>
                {item.texto}
                <span className={style.top__highlight}>{item.destaque}</span>
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Top;
