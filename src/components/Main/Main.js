import React from 'react';
import styles from "./Main.module.css";
import foto from "../../assets/Hero.svg";


const Main = () => {
  // const [ dados, setDados ] = React.useState([]);

  return (
      <section className={styles.Main}>
          <div className={styles.contentMain}>
              <img src={foto} alt="Foto" />
                <div className={styles.contentMainTitle}> 
                  <h1> Mireia Belmonste </h1>
                  <h3> <span> Ensina </span> Natação </h3>
                </div>
          </div>
      </section>
  )
}

export default Main;