
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";


const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Apresentaçao", href: "/apresentacao" },
   { text: "Certificados", href: "/certificates" },
    { text: "Skills", href: "/skills" },
     { text: "Contactos", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav>
       <Logo />
        <div
          onClick={() => setNavActive(!navActive)}
          className="nav__menu_bar"
        >
          <div></div>
          <div></div>
          <div></div>
         
         
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu_list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;