import React, { useRef, useState } from "react";

import Title from "../Title";
import Brand from "./Brand";

import style from "./styles.module.scss";

const Brands: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<Array<React.RefObject<HTMLAnchorElement>>>([]);

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
          const outsideContainer = firstProductRefPosition - containerX;

          if (outsideContainer >= 0) return;

          newPosition = currentValue + displacementBase;
          moveElements(product, newPosition, displacementBase);
        } else {
          if (lastProductPositionRef <= containerXEnd - productWidth) return;
          
          newPosition = currentValue - displacementBase;
          moveElements(product, newPosition, displacementBase);
        }
      }
    });

    // Interval to press button again
    setTimeout(() => {
      setAnimate(false);
    }, 500); // Adjust time according to necessary to change animation duration
  }

  function moveElements(
    product: HTMLAnchorElement,
    newPosition: number,
    displacementBase: number,
  ) {
    product.style.transform = `translateX(${newPosition}px)`;
    const positionChanged =
      product.getBoundingClientRect().x + displacementBase;
    checkInArea(product, positionChanged);
  }

  function checkInArea(product: HTMLAnchorElement, currentPosition: number) {
    if (currentPosition >= containerX && currentPosition < containerXEnd) {
      product.dataset.visible = "true";
    } else {
      product.dataset.visible = "false";
    }
  }

  // Handler function to carousel get necessary values
  function handlePosition(
    styles: CSSStyleDeclaration,
    product: HTMLAnchorElement,
  ) {
    const currentTranslateX = styles?.transform.replace(/[^0-9,-]/g, "");
    const currentValue = currentTranslateX
      ? parseFloat(currentTranslateX.split(",")[4].trim())
      : 0;
    const productWidth = product.getBoundingClientRect().width;

    return { currentValue, productWidth };
  }

  return (
    <section className={style.brands}>
      <Title alt={true}>Navegue por marcas</Title>

      <div className={style.brands__carrousel} ref={ref}>
        {Array.from({ length: 8 }, (_, index) => {
          const ref = React.createRef<HTMLAnchorElement>();
          productsRef.current[index] = ref;

          return <Brand key={index} ref={ref} />;
        })}

        <button
          className={style.brands__next}
          aria-label="Botão de avançar marcas"
          onClick={(e) => {
            moveItems(e);
          }}
          data-direction="right"
        />
      </div>
    </section>
  );
};

export default Brands;
