import { useEffect, useState } from "react";
import axios from "axios";

import { Category } from "../interfaces/Category";
import { categoriesService } from "@/service/categories.service";

export const useCategories = () => {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await categoriesService.getAll();

      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message ?? error.message);
      } else {
        setError("Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { data, loading, error, reload: fetchCategories };
};
