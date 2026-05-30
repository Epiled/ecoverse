import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { ProductsProps } from "./type";

import Partner from "../Partner";
import Title from "../Title";
import Product from "./Product";
import Feedback from "../Feedback";

import style from "./styles.module.scss";

const Products: React.FC<ProductsProps> = ({
  products,
  selectProduct,
  onModal,
}) => {
  const ref = useRef<HTMLUListElement | null>(null);
  const productsRef = useRef<Array<React.RefObject<HTMLLIElement>>>([]);

  const [animate, setAnimate] = useState(false);
  const containerWidth = ref.current?.getBoundingClientRect().width || 0;
  const containerX = ref.current?.getBoundingClientRect().x || 0;
  const containerXEnd = containerX + containerWidth;
  const containerStyles = ref?.current
    ? window.getComputedStyle(ref.current)
    : 0;
  const containerGap = containerStyles ? parseFloat(containerStyles.gap) : 0;

  // Carousel function and rules
  function moveItems(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (animate) return; // Prevent clicks duration animation
    setAnimate(true);
    const direction = e.currentTarget.dataset.direction;
    let currentStyles;
    let currentValue = 0;
    let productWidth = 0;

    const firstProductRef = productsRef.current[0].current;
    const firstProductRefPosition =
      firstProductRef?.getBoundingClientRect().x || 0;

    const lastProductRef = productsRef.current.at(-1)?.current;
    const lastProductPositionRef =
      lastProductRef?.getBoundingClientRect().x || 0;

    if (firstProductRef) {
      currentStyles = getComputedStyle(firstProductRef);
      ({ currentValue, productWidth } = handlePosition(
        currentStyles,
        firstProductRef,
      ));
    }

    productsRef.current.forEach((productRef) => {
      const product = productRef.current;
      if (product) {
        currentStyles = getComputedStyle(product);

        let newPosition = 0;
        const displacementBase = productWidth + containerGap;

        if (direction === "left") {
          const foraDoContainer = firstProductRefPosition - containerX;

          if (foraDoContainer >= 0) return;

          newPosition = currentValue + displacementBase;
          product.style.transform = `translateX(${newPosition}px)`;
          const positionChanged =
            product.getBoundingClientRect().x + displacementBase;
          checkInArea(product, positionChanged);
        } else {
          if (lastProductPositionRef <= containerXEnd - productWidth) return;

          newPosition = currentValue - displacementBase;
          product.style.transform = `translateX(${newPosition}px)`;
          const positionChanged =
            product.getBoundingClientRect().x - displacementBase;
          checkInArea(product, positionChanged);
        }
      }
    });

    // Interval to press button again
    setTimeout(() => {
      setAnimate(false);
    }, 500); // Adjust time according to necessary to change animation duration
  }

  function checkInArea(product: HTMLLIElement, currentPosition: number) {
    if (currentPosition >= containerX && currentPosition < containerXEnd) {
      product.dataset.visible = "true";
    } else {
      product.dataset.visible = "false";
    }
  }

  // Handler function to carousel get necessary values
  function handlePosition(styles: CSSStyleDeclaration, product: HTMLLIElement) {
    const currentTranslateX = styles?.transform.replace(/[^0-9,-]/g, "");
    const currentValue = currentTranslateX
      ? parseFloat(currentTranslateX.split(",")[4].trim())
      : 0;
    const productWidth = product.getBoundingClientRect().width;

    return { currentValue, productWidth };
  }

  const [hasProduct, setHasProduct] = useState(false);

  useEffect(() => {
    productsRef.current.forEach((productRef) => {
      const product = productRef.current;
      if (product) {
        const currentPosition = product.getBoundingClientRect().x;
        checkInArea(product, currentPosition);
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
            products.map((product, index) => {
              productsRef.current[index] = React.createRef();

              return (
                <Product
                  index={index}
                  key={index}
                  ref={productsRef.current[index]}
                  selectProduct={selectProduct}
                  onModal={onModal}
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
          ></button>
          <button
            onClick={(e) => {
              moveItems(e);
            }}
            data-direction="right"
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
