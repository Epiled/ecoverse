import { Category } from "@/interfaces/Category";

import { http } from "@/api/http";
import { ApiResponse } from "@/api/types";

export const categoriesService = {
  async getAll() {
    const response = await http.get<ApiResponse<Category[]>>("/categories");

    return response.data;
  },
};
