import React, { useEffect, useRef, useState } from "react";

import Top from "./Top";
import Mid from "./Mid";
import Navigation from "./Navigation";

import style from "./styles.module.scss";

const Menu: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const handlerMobileMenu = () => {
    const valorMenu = Number(menuRef.current?.clientWidth);
    setMenuHeight(menu ? 0 : valorMenu * 1);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      handlerMobileMenu();
    }
  });

  return (
    <header>
      <nav className={style.menu}>
        <Top />
        <Mid
          setMenu={setMenu}
          menuOpen={menu}
          handlerMobileMenu={handlerMobileMenu}
        />
        <Navigation menuHeight={menuHeight} menuRef={menuRef} />
      </nav>
    </header>
  );
};

export default Menu;
