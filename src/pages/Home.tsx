import React, { useState } from "react";

import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Related from "../components/Related";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

import { IProduct } from "../interfaces/IProduct";

import { useFiltersContext } from "@/contexts/FiltersContext";
import { useModalContext } from "@/contexts/ModalContext";
import { useProducts } from "../hooks/useProducts";

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  const { isOpen } = useModalContext();
  const { filters } = useFiltersContext();

  const { data } = useProducts(filters);

  function selectProduct(selected: IProduct) {
    setSelectedProduct(selected);
  }

  return (
    <>
      <Menu />
      <Banner />
      <Categories />
      <Products products={data} selectProduct={selectProduct} />
      <Related />
      <Brands />
      {isOpen && <Modal product={selectedProduct} />}
      <Footer />
    </>
  );
};

export default Home;
