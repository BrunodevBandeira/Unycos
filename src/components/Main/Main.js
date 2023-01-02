import React from 'react';
import style from "./Main.module.css";
import foto from "../../assets/Hero.svg";


const Main = () => {

  return (
      <section className={style.Main}>
          <div className={style.contentMain}>
              <img src={foto} alt="Foto" />
                <div className={style.contentMainTitle}> 
                  <h1> Mireia Belmonste </h1>
                  <h3> <span> Ensina </span> Natação </h3>
                </div>
          </div>
      </section>
  )
}

export default Main;