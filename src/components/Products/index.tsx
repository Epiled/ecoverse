import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Partner from "../Partner";
import Title from "../Title";
import Product from "./Product";
import Feedback from "../Feedback";

import { IProduto } from "../../interfaces/IProduto";

import style from "./styles.module.scss";

interface Props {
  products: IProduto[];
  selecionaProduto: (produtoSelecionado: IProduto) => void;
  onModal: (onModal: boolean) => void;
}

const Products: React.FC<Props> = ({ products, selecionaProduto, onModal }) => {
  const ref = useRef<HTMLUListElement | null>(null);
  const productsRef = useRef<Array<React.RefObject<HTMLLIElement>>>([]);

  const [animando, setAnimando] = useState(false);
  const containerTamanho = ref.current?.getBoundingClientRect().width || 0;
  const containerX = ref.current?.getBoundingClientRect().x || 0;
  const containerXEnd = containerX + containerTamanho;
  const containerEstilos = ref?.current
    ? window.getComputedStyle(ref.current)
    : 0;
  const containerGap = containerEstilos ? parseFloat(containerEstilos.gap) : 0;

  // Carroussel função e regras
  function moverItens(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (animando) return; // Evita cliques durante a animação
    setAnimando(true);
    const sentido = e.currentTarget.dataset.sentido;
    let estiloAtual;
    let valorAtual = 0;
    let larguraProduto = 0;

    const produtoRefPrimeiro = productsRef.current[0].current;
    const produtoRefPrimeiroPosition =
      produtoRefPrimeiro?.getBoundingClientRect().x || 0;

    const produtoRefUltimo = productsRef.current.at(-1)?.current;
    const produtoRefUltimoPosition =
      produtoRefUltimo?.getBoundingClientRect().x || 0;

    if (produtoRefPrimeiro) {
      estiloAtual = getComputedStyle(produtoRefPrimeiro);
      ({ valorAtual, larguraProduto } = handlePosition(
        estiloAtual,
        produtoRefPrimeiro,
      ));
    }

    productsRef.current.forEach((produtoRef) => {
      const produto = produtoRef.current;
      if (produto) {
        estiloAtual = getComputedStyle(produto);

        let novaPosicao = 0;
        const deslocamentoBase = larguraProduto + containerGap;

        if (sentido === "left") {
          const foraDoContainer = produtoRefPrimeiroPosition - containerX;

          if (foraDoContainer >= 0) return;

          novaPosicao = valorAtual + deslocamentoBase;
          produto.style.transform = `translateX(${novaPosicao}px)`;
          const posicaoAlterada =
            produto.getBoundingClientRect().x + deslocamentoBase;
          checkInArea(produto, posicaoAlterada);
        } else {
          if (produtoRefUltimoPosition <= containerXEnd - larguraProduto)
            return;

          novaPosicao = valorAtual - deslocamentoBase;
          produto.style.transform = `translateX(${novaPosicao}px)`;
          const posicaoAlterada =
            produto.getBoundingClientRect().x - deslocamentoBase;
          checkInArea(produto, posicaoAlterada);
        }
      }
    });

    // Intervalo para pressionar o botão novamente
    setTimeout(() => {
      setAnimando(false);
    }, 500); // Ajuste o tempo conforme necessário para a duração da animação
  }

  function checkInArea(produto: HTMLLIElement, posicaoAtual: number) {
    if (posicaoAtual >= containerX && posicaoAtual < containerXEnd) {
      produto.dataset.visible = "true";
    } else {
      produto.dataset.visible = "false";
    }
  }

  // Função Auxiliar do carroussel para coletar alguns valores
  function handlePosition(
    estilos: CSSStyleDeclaration,
    produto: HTMLLIElement,
  ) {
    const translateXAtual = estilos?.transform.replace(/[^0-9,-]/g, "");
    const valorAtual = translateXAtual
      ? parseFloat(translateXAtual.split(",")[4].trim())
      : 0;
    const larguraProduto = produto.getBoundingClientRect().width;

    return { valorAtual, larguraProduto };
  }

  const [hasProduct, setHasProduct] = useState(false);

  useEffect(() => {
    productsRef.current.forEach((produtoRef) => {
      const produto = produtoRef.current;
      if (produto) {
        const posicaoAtual = produto.getBoundingClientRect().x;
        checkInArea(produto, posicaoAtual);
        setHasProduct(true);
      }
    });
  }, [products]);

  useEffect(() => {
    if (products.length > 0) {
      setHasProduct(true); // Se houver products, atualiza hasProduct para true
    } else {
      setHasProduct(false); // Se não houver products, define hasProduct como false
    }
  }, [products]);

  return (
    <section className={style.products}>
      <Title>Produtos relacionados</Title>

      <nav className={style.products__categories}>
        <Link
          to={"/"}
          className={`${style.products__category} ${style["products__category--active"]}`}
        >
          Celular
        </Link>
        <Link to={"/"} className={style.products__category}>
          Acessórios
        </Link>
        <Link to={"/"} className={style.products__category}>
          Tablets
        </Link>
        <Link to={"/"} className={style.products__category}>
          Notebooks
        </Link>
        <Link to={"/"} className={style.products__category}>
          TVs
        </Link>
        <Link to={"/"} className={style.products__category}>
          Ver todos
        </Link>
      </nav>

      <div className={style.products__vitrine}>
        <ul className={style.products__wrap} ref={ref}>
          {products.length > 0 &&
            products.map((produto, index) => {
              productsRef.current[index] = React.createRef();

              return (
                <Product
                  index={index}
                  key={index}
                  ref={productsRef.current[index]}
                  selecionaProduto={selecionaProduto}
                  onModal={onModal}
                  {...produto}
                />
              );
            })}
        </ul>
        <div className={style.products__arrows}>
          <button
            onClick={(e) => {
              moverItens(e);
            }}
            data-sentido="left"
            className={`${style.products__arrow} ${style["products__arrow--left"]}`}
            aria-label="Retroceder lista de products"
          ></button>
          <button
            onClick={(e) => {
              moverItens(e);
            }}
            data-sentido="right"
            className={`${style.products__arrow} ${style["products__arrow--right"]}`}
            aria-label="Avançar lista de products"
          ></button>
        </div>

        {!hasProduct && <Feedback />}
      </div>

      <div className={style.products__partners}>
        <Partner title={"Parceiros"} />
        <Partner title={"Parceiros"} />
      </div>
    </section>
  );
};

export default Products;
