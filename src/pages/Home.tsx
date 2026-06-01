import React, { useState, useEffect } from "react";

import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Related from "../components/Related";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

import { IProduct } from "../interfaces/IProduct";

import { useProducts } from "../service/useProducts";

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [modal, setModal] = useState(false);

  const { data } = useProducts();

  useEffect(() => {
    data && setProducts(data);
  }, [data]);

  function selectProduct(selected: IProduct) {
    setSelectedProduct(selected);

    setProducts((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === selected.id,
      })),
    );
  }

  function onModal() {
    setModal(true);
  }

  function offModal() {
    setModal(false);
  }

  return (
    <>
      <Menu />
      <Banner />
      <Categories />
      <Products
        products={products}
        selectProduct={selectProduct}
        onModal={onModal}
      />
      <Related />
      <Brands />
      {modal && <Modal product={selectedProduct} offModal={offModal} />}
      <Footer />
    </>
  );
};

export default Home;
