import axios from "axios";
import { useEffect, useState } from "react";

const http = import.meta.env.VITE_API_URL;

interface ApiResponse<T> {
  success: boolean;
  total: number;
  data: T;
}

const useFetch = <T>({ url }: { url: string; }) => {
  const [dados, setDados] = useState<T | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      axios.get<ApiResponse<T>>(`${http}${url}`)
      .then(resposta => {
        const { data: json } = resposta.data;
        setDados(json);
      })
      .catch(erro => {
        setErro(erro);
      })
    }
    fetchData();
  }, [url]);


  return { dados, erro }
}

export default useFetch;
