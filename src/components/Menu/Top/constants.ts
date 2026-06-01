import { TopProps } from "./types";

import shield from "@/assets/svg/shield-check.svg";
import truck from "@/assets/svg/truck.svg";
import creditCard from "@/assets/svg/credit-card.svg";

export const ADVANTAGES_LIST: TopProps[] = [
  {
    image: shield,
    text: "Compra",
    highlight: " 100% segura",
    default: false,
  },
  {
    image: truck,
    text: "acima de R$ 200",
    highlight: "Frete grátis ",
    default: true,
  },
  {
    image: creditCard,
    text: "suas compras",
    highlight: "Parcele ",
    default: true,
  },
];
