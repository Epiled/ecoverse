import { useCallback, useState } from "react";

interface CarouselProps<T extends HTMLElement, J extends HTMLElement> {
  containerRef: React.RefObject<T | null>;
  listRef: React.RefObject<Array<React.RefObject<J>>>;
  partial?: boolean;
}

export interface CarouselItemPosition {
  index: number;
  x: number;
  left: number;
  right: number;
  width: number;
}

type Direction = "left" | "right";

export function useCarousel<T extends HTMLElement, J extends HTMLElement>({
  containerRef,
  listRef,
  partial = true,
}: CarouselProps<T, J>) {
  const [animate, setAnimate] = useState(false);

  function moveItems(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const list = listRef.current;

    if (!list || list.length === 0) return getItemsPosition();
    if (animate) return getItemsPosition();

    const direction = e.currentTarget.dataset.direction as Direction;
    const firstItem = list[0].current;
    const lastItem = list[list.length - 1].current;

    if (!firstItem || !lastItem) return getItemsPosition();

    const { containerX, containerXEnd, containerGap } = getContainerMetrics();
    const itemWidth = firstItem.getBoundingClientRect().width;
    const displacement = itemWidth + containerGap;

    const firstRect = firstItem.getBoundingClientRect();
    const lastRect = lastItem.getBoundingClientRect();

    const canMoveLeft = firstRect.left < containerX;
    const canMoveRight = lastRect.right > containerXEnd;

    if (direction === "left" && !canMoveLeft) return getItemsPosition();
    if (direction === "right" && !canMoveRight) return getItemsPosition();

    const moveOffset = direction === "right" ? -displacement : displacement;

    const futurePositions = list.map((itemRef, index) => {
      const item = itemRef.current;
      const rect = item
        ? item.getBoundingClientRect()
        : { x: 0, left: 0, right: 0, width: 0 };

      return {
        index,
        x: rect.x + moveOffset,
        left: rect.left + moveOffset,
        right: rect.right + moveOffset,
        width: rect.width,
      };
    });

    setAnimate(true);

    list.forEach((itemRef, index) => {
      const item = itemRef.current;
      if (!item) return;

      const style = getComputedStyle(item);
      const matrix = new DOMMatrixReadOnly(style.transform);
      const currentX = matrix.m41;

      const nextX = currentX + moveOffset;
      item.style.transform = `translateX(${nextX}px)`;
      item.dataset.visible = String(isItemVisible(index, futurePositions));
    });

    const handleTransitionEnd = () => {
      setAnimate(false);
      firstItem.removeEventListener("transitionend", handleTransitionEnd);
    };

    firstItem.addEventListener("transitionend", handleTransitionEnd);
    return futurePositions;
  }

  const getItemsPosition = useCallback(() => {
    const list = listRef.current;

    if (!list) return [];

    return list.map((itemRef, index) => {
      const item = itemRef.current;

      if (!item) {
        return {
          index,
          x: 0,
          left: 0,
          right: 0,
          width: 0,
        };
      }

      const rect = item.getBoundingClientRect();

      return {
        index,
        x: rect.x,
        left: rect.left,
        right: rect.right,
        width: rect.width,
      };
    });
  }, [listRef]);

  const isItemVisible = useCallback(
    (index: number, positions: ReturnType<typeof getItemsPosition>) => {
      const container = containerRef.current;

      if (!container) return false;

      const containerRect = container.getBoundingClientRect();
      const item = positions.find((p) => p.index === index);

      if (!item) return false;

      const itemPart =
        item.right > containerRect.left && item.left < containerRect.right;
      const itemFull =
        item.left >= containerRect.left && item.right <= containerRect.right;

      return partial ? itemPart : itemFull;
    },
    [containerRef, partial],
  );

  function getContainerMetrics() {
    const container = containerRef.current;

    if (!container) {
      return {
        containerX: 0,
        containerXEnd: 0,
        containerGap: 0,
      };
    }

    const rect = container.getBoundingClientRect();
    const styles = getComputedStyle(container);

    return {
      containerX: rect.x,
      containerXEnd: rect.x + rect.width,
      containerGap: parseFloat(styles.gap) || 0,
    };
  }

  const initCarousel = () => {
    const list = listRef.current;
    if (!list || list.length === 0) return;

    requestAnimationFrame(() => {
      const initialPositions = getItemsPosition();
      list.forEach((itemRef, index) => {
        if (itemRef.current) {
          itemRef.current.dataset.visible = String(
            isItemVisible(index, initialPositions),
          );
        }
      });
    });
  };

  return {
    moveItems,
    getItemsPosition,
    isItemVisible,
    initCarousel,
  };
}
