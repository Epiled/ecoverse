import { useRef, useState } from "react";

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  return {
    isOpen,
    menuRef,
    toggleMenu,
  };
};
