import { useEffect, useState } from "react";
import axios from "axios";

const http = import.meta.env.VITE_API_URL;

interface ApiResponse<T> {
  success: boolean;
  total: number;
  data: T;
}

const useFetch = <T>({ url }: { url: string; }) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      axios.get<ApiResponse<T>>(`${http}${url}`)
      .then(res => {
        const { data: json } = res.data;
        setData(json);
      })
      .catch(error => {
        setError(error);
      })
    }
    fetchData();
  }, [url]);


  return { data, error }
}

export default useFetch;
