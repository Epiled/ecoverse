import { IProduct } from "../interfaces/IProduct";
import useFetch from "./useFetch";

// const apiURLs = {
//   development: "http://localhost:3000/products", // JSON Server
//   production: "https://api-ecoverse.vercel.app/api/produtos" // API de produção
// };

const useDadosProdutos = () => {
  return useFetch<IProduct[]>({ url: 'products' }); // Use a URL do endpoint

};

export { useDadosProdutos };
