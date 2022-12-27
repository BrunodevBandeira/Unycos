import React from 'react';
import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo}  className={styles.logo} />
        <ul className={styles.navlist}>
          <li> 
            <a> Cursos </a>
          </li>

          <li> 
            <a> Cadastre </a>
          </li>

          <li> 
            <a> Log in </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;