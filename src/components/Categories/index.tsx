import monitorarTabletSmartphone from "../../assets/svg/monitorar-tablet-e-smartohone-1.svg";
import supermercados from "../../assets/svg/supermercados-1.svg";
import whiskey from "../../assets/svg/whiskey.svg";
import ferramentas from "../../assets/svg/ferramentas-1.svg";
import cuidadosDeSaude from "../../assets/svg/cuidados-de-saude-1.svg";
import corrida from "../../assets/svg/corrida-1.svg";
import moda from "../../assets/svg/moda-1.svg";
import style from "./styles.module.scss";
import classNames from "classnames";

interface ICategory {
  image: string;
  text: string;
  default: boolean;
}

const ListCategories: ICategory[] = [
  {
    image: monitorarTabletSmartphone,
    text: "Tecnologia",
    default: false,
  },
  {
    image: supermercados,
    text: "Supermercado",
    default: true,
  },
  {
    image: whiskey,
    text: "Bebidas",
    default: true,
  },
  {
    image: ferramentas,
    text: "Ferramentas",
    default: true,
  },
  {
    image: cuidadosDeSaude,
    text: "Saúde",
    default: true,
  },
  {
    image: corrida,
    text: "Esportes e Fitness",
    default: true,
  },
  {
    image: moda,
    text: "Moda",
    default: true,
  },
];

const Categories: React.FC = () => {
  return (
    <div className={style.categories}>
      {ListCategories.map((item, index) => {
        return (
          <button
            key={index}
            className={classNames(style.category, {
              [style["category--active"]]: !item.default,
            })}
          >
            <div
              className={classNames(style.category__box, {
                [style["category__box--active"]]: !item.default,
              })}
            >
              <img className={style.category__image} src={item.image} alt="#" />
            </div>
            {item.text}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
