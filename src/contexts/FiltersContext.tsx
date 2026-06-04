import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ProductFilters } from "@/interfaces/ProductFilters";

interface FiltersContextProps {
  filters: ProductFilters;
  setFilters: Dispatch<SetStateAction<ProductFilters>>;
}

export const FiltersContext = createContext<FiltersContextProps | null>(null);

export const FiltersContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [filters, setFilters] = useState<ProductFilters>({});

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error(
      "useFiltersContext must be used within a FiltersContextProvider",
    );
  }

  return context;
};
