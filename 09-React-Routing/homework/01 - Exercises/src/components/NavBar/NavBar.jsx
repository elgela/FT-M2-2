import React from "react";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <NavLink to={"/"}><img src={logoHenry} alt="logo-henry" /></NavLink>
          <NavLink to={"/shipping"}><span>Navieras</span></NavLink>
          <NavLink to={"/discounts"} className={({ isActive }) =>
            isActive ? styleNav.active : styleNav.disable}>
            <span>Promociones</span></NavLink>
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <span>Navieras</span>
          </li>
          <li>
            <span>Promociones</span>
          </li>
        </div>
      </ul>
    </div>
  );
}
