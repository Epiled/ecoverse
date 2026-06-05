import React from "react";

import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Related from "../components/Related";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <Banner />
      <Categories />
      <Products />
      <Related />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
