import React, { useEffect, useRef } from "react";
import classNames from "classnames";

import Partner from "../Partner";
import Title from "../Title";
import Product from "./Product";
import Feedback from "../Feedback";

import { useFiltersContext } from "@/contexts/FiltersContext";
import { useCarousel } from "@/hooks/useCarousel";
import { useProducts } from "@/hooks/useProducts";

import { TECHNOLOGIES_LIST } from "./constant";

import style from "./styles.module.scss";

const Products: React.FC = () => {
  const { setFilters } = useFiltersContext();

  const { filters } = useFiltersContext();

  const { data: products } = useProducts(filters);

  const containerRef = useRef<HTMLUListElement | null>(null);
  const productsRef = useRef<Array<React.RefObject<HTMLLIElement>>>([]);

  const hasProduct = products.length > 0;

  if (productsRef.current.length !== products.length) {
    productsRef.current = Array(products.length)
      .fill(null)
      .map((_, i) => productsRef.current[i] || React.createRef());
  }

  const { moveItems, initCarousel } = useCarousel({
    containerRef: containerRef,
    listRef: productsRef,
  });

  useEffect(() => {
    initCarousel();
  }, [products]);

  return (
    <section className={style.products}>
      <Title>Produtos relacionados</Title>

      <nav className={style.products__categories}>
        {TECHNOLOGIES_LIST.map((item, index) => {
          return (
            <button
              key={`${item}-${index}`}
              className={classNames(style.products__category, {
                [style["products__category--active"]]: index === 0,
              })}
              onClick={() =>
                setFilters((prev) => {
                  return {
                    ...prev,
                    subcategory: item.link,
                  };
                })
              }
            >
              {item.text}
            </button>
          );
        })}
      </nav>

      <div className={style.products__vitrine}>
        {hasProduct && (
          <>
            <ul className={style.products__wrap} ref={containerRef}>
              {products.map((product, index) => {
                return (
                  <Product
                    key={product.id}
                    ref={productsRef.current[index]}
                    {...product}
                  />
                );
              })}
            </ul>
            <div className={style.products__arrows}>
              <button
                onClick={(e) => {
                  moveItems(e);
                }}
                data-direction="left"
                className={`${style.products__arrow} ${style["products__arrow--left"]}`}
                aria-label="Retroceder lista de products"
              />
              <button
                onClick={(e) => {
                  moveItems(e);
                }}
                data-direction="right"
                className={`${style.products__arrow} ${style["products__arrow--right"]}`}
                aria-label="Avançar lista de products"
              />
            </div>
          </>
        )}

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
