import { TopProps } from "./types";

import shield from "@/assets/svg/icons-ui/shield-check.svg";
import truck from "@/assets/svg/icons-ui/truck.svg";
import creditCard from "@/assets/svg/icons-ui/credit-card.svg";

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
