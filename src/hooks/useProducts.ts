import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { IProduct } from "../interfaces/IProduct";
import { ProductFilters } from "@/interfaces/ProductFilters";
import { productsService } from "@/service/products.service";

export const useProducts = (filters?: ProductFilters) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(
    async (signal?: AbortSignal) => {
      try {
        setLoading(true);
        setError(null);

        const response = await productsService.getAll(filters, { signal });

        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) return;

        setData([]);

        if (axios.isAxiosError(error)) {
          setError(error.response?.data.message ?? error.message);
        } else {
          setError("Unexpected error");
        }
      } finally {
        setLoading(false);
      }
    },
    [filters],
  );

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts(controller.signal);

    return () => controller.abort();
  }, [fetchProducts]);

  return { data, loading, error, reload: fetchProducts };
};
