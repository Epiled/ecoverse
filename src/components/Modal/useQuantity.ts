import { useState } from "react";

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => Math.max(1, prev - 1));
    }
  };

  const update = (value: string) => {
    if (value === "") {
      setQuantity(1);
      return;
    }

    const parsed = Number(value);

    if (!Number.isNaN(parsed)) {
      setQuantity(Math.max(1, parsed));
    }
  };

  return { quantity, decrement, increment, update };
};
