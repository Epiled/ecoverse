import { CategoryProps } from "./types";

import devices from "@/assets/svg/devices.svg";
import supermarket from "@/assets/svg/supermarket.svg";
import whiskey from "@/assets/svg/whiskey.svg";
import tools from "@/assets/svg/tools.svg";
import healthCare from "@/assets/svg/health-care.svg";
import runningTreadmill from "@/assets/svg/running-treadmill.svg";
import fashion from "@/assets/svg/fashion.svg";

export const CATEGORY_LIST: CategoryProps[] = [
  {
    image: devices,
    text: "Tecnologia",
    default: false,
  },
  {
    image: supermarket,
    text: "Supermercado",
    default: true,
  },
  {
    image: whiskey,
    text: "Bebidas",
    default: true,
  },
  {
    image: tools,
    text: "Ferramentas",
    default: true,
  },
  {
    image: healthCare,
    text: "Saúde",
    default: true,
  },
  {
    image: runningTreadmill,
    text: "Esportes e Fitness",
    default: true,
  },
  {
    image: fashion,
    text: "Moda",
    default: true,
  },
];
