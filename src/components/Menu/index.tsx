import React from "react";

import Top from "./Top";
import Mid from "./Mid";
import Navigation from "./Navigation";

import { useMobileMenu } from "./useMobileMenu";

import style from "./styles.module.scss";

const Menu: React.FC = () => {
  const { isOpen, menuRef, toggleMenu } = useMobileMenu();

  console.log(isOpen);

  return (
    <header>
      <nav className={style.menu}>
        <Top />
        <Mid isOpen={isOpen} toggleMenu={toggleMenu} />
        <Navigation menuRef={menuRef} isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Menu;
