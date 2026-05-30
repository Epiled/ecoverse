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

import { useDadosProdutos } from "../service/useProdutos";

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [modal, setModal] = useState(false);

  const { dados } = useDadosProdutos();

  useEffect(() => {
    dados && setProducts(dados);
  }, [dados]);

  function selectProduct(product: IProduct) {
    setSelectedProduct(product);
    setProducts((prev) =>
      prev.map((product, index) => ({
        ...product,
        id: String(index),
        selected: product.id === product.id ? true : false,
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
