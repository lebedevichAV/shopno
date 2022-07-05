import React from "react";
import Icon from "./Icon";
import { RiCloseFill } from "react-icons/ri";

function Nav({ menu, onClick }) {
  return (
    <aside className="nav">
      <Icon icon={<RiCloseFill />} className="icon_nav" onClick={onClick} />
      <ul className="nav__list">
        {menu.map((item, index) => (
          <li className="nav__item" key={index}>
            <a className="nav__link" href={item.href} onClick={onClick}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Nav;
