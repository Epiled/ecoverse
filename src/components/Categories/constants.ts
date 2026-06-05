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
    link: "technology",
    default: false,
  },
  {
    image: supermarket,
    text: "Supermercado",
    link: "supermarket",
    default: true,
  },
  {
    image: whiskey,
    text: "Bebidas",
    link: "drinks",
    default: true,
  },
  {
    image: tools,
    text: "Ferramentas",
    link: "tools",
    default: true,
  },
  {
    image: healthCare,
    text: "Saúde",
    link: "health",
    default: true,
  },
  {
    image: runningTreadmill,
    text: "Esportes e Fitness",
    link: "sports",
    default: true,
  },
  {
    image: fashion,
    text: "Moda",
    link: "clothes",
    default: true,
  },
];
