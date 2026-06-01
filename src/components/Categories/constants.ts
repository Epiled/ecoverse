import { CategoryProps } from "./types";

import devices from "@/assets/svg/icons-ui/devices.svg";
import supermarket from "@/assets/svg/icons-ui/supermarket.svg";
import whiskey from "@/assets/svg/icons-ui/whiskey.svg";
import tools from "@/assets/svg/icons-ui/tools.svg";
import healthCare from "@/assets/svg/icons-ui/health-care.svg";
import runningTreadmill from "@/assets/svg/icons-ui/running-treadmill.svg";
import fashion from "@/assets/svg/icons-ui/fashion.svg";

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
