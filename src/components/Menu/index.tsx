import React, { useEffect, useRef, useState } from "react";
import style from "./styles.module.scss";

import Top from "./Top";
import Mid from "./Mid";
import Navigation from "./Navigation";

const Menu: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [tamanhoMenu, setTamanhoMenu] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const calculaMenu = () => {
    const valorMenu = Number(menuRef.current?.clientWidth);
    setTamanhoMenu(menu ? 0 : valorMenu * 1);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      calculaMenu();
    }
  });

  return (
    <header>
      <nav className={style.menu}>
        <Top />
        <Mid setMenu={setMenu} menuOpen={menu} calculaMenu={calculaMenu} />
        <Navigation tamanhoMenu={tamanhoMenu} menuRef={menuRef} />
      </nav>
    </header>
  );
};

export default Menu;
