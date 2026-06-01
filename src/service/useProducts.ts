import { IProduct } from "../interfaces/IProduct";

import useFetch from "./useFetch";

const useProducts = () => {
  return useFetch<IProduct[]>({ url: 'products' }); // Use a URL do endpoint

};

export { useProducts };
