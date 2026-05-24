import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Related from "../components/Related";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { IProduto } from "../interfaces/IProduto";
import { useDadosProdutos } from "../service/useProdutos";

const Home: React.FC = () => {
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<IProduto>();
  const [modalAberta, setModal] = useState(false);

  const { dados } = useDadosProdutos();

  useEffect(() => {
    dados && setProdutos(dados);
  }, [dados]);

  function selecionaProduto(produtoSelecionado: IProduto) {
    setProdutoSelecionado(produtoSelecionado);
    setProdutos((produtosAnteriores) =>
      produtosAnteriores.map((produto, index) => ({
        ...produto,
        id: String(index),
        selecionado: produto.id === produtoSelecionado.id ? true : false,
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
        products={produtos}
        selecionaProduto={selecionaProduto}
        onModal={onModal}
      />
      <Related />
      <Brands />
      {modalAberta && (
        <Modal produtoSelecionado={produtoSelecionado} offModal={offModal} />
      )}
      <Footer />
    </>
  );
};

export default Home;
