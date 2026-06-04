import { AxiosRequestConfig } from "axios";

import { http } from "../api/http";
import { ApiResponse } from "@/api/types";
import { IProduct } from "@/interfaces/IProduct";
import { ProductFilters } from "@/interfaces/ProductFilters";

export const productsService = {
  async getAll(filters?: ProductFilters, config?: AxiosRequestConfig) {
    const response = await http.get<ApiResponse<IProduct[]>>("/products", {
      ...config,
      params: filters,
    });

    return response.data;
  },

  async getById(id: string) {
    const response = await http.get<ApiResponse<IProduct>>(`/products/${id}`);

    return response.data;
  },
};
