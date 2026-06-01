import React, { useRef, useState, useEffect } from "react";

import Title from "../Title";
import Brand from "./Brand";

import { CarouselItemPosition, useCarousel } from "@/hooks/useCarousel";

import style from "./styles.module.scss";

const Brands: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<Array<React.RefObject<HTMLAnchorElement>>>([]);

  if (productsRef.current.length === 0) {
    productsRef.current = Array.from({ length: 8 }, () =>
      React.createRef<HTMLAnchorElement>(),
    );
  }

  const { moveItems, isItemVisible, initCarousel } = useCarousel({
    containerRef,
    listRef: productsRef,
    partial: false,
  });

  const [showBackButton, setShowBackButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const [positions, setPositions] = useState<CarouselItemPosition[]>([]);

  useEffect(() => {
    initCarousel;
  }, [initCarousel]);

  useEffect(() => {
    if (!positions.length) return;

    const firstVisible = isItemVisible(0, positions);
    const lastVisible = isItemVisible(
      productsRef.current.length - 1,
      positions,
    );

    setShowBackButton(!firstVisible);
    setShowNextButton(!lastVisible);
  }, [positions, isItemVisible]);

  return (
    <section className={style.brands}>
      <Title alt>Navegue por marcas</Title>

      <div className={style.brands__carrousel} ref={containerRef}>
        {productsRef.current.map((ref, index) => (
          <Brand key={index} ref={ref} />
        ))}

        {showBackButton && (
          <button
            className={`${style.brands__next} ${style["brands__next--left"]}`}
            data-direction="left"
            onClick={(e) => {
              const result = moveItems(e);
              setPositions(result);
            }}
          />
        )}

        {showNextButton && (
          <button
            className={style.brands__next}
            data-direction="right"
            onClick={(e) => {
              const result = moveItems(e);
              setPositions(result);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Brands;
