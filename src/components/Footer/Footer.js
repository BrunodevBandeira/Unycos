import React from 'react';
import styles from "./Footer.module.css";
import imagemFooter from "../../assets/imagemFooter.svg"
import iconFace from "../../assets/icons/iconFace.svg"
import iconInstan from "../../assets/icons/iconInstan.svg"
import iconTwiter from "../../assets/icons/iconTwi.svg"

const Footer = () => {
  return (
    <section className={styles.Footer}>
      <div className={styles.footerContainer}>

        <div className={styles.footerContainerImg}>
          <img src={imagemFooter} />
        </div>

        <div className={styles.footerContainerText}>

            <div className={styles.footerContainerTitle}>
              <h1> APRENDE CON LOS MEJORES </h1>
              <div>
                <p> Detrás de cada éxito, hay una história. conoce en nuestro blog. </p>
              </div>
            </div>
            <button className={styles.footerContainerButton}> leer más en nuestro blog </button>
        </div>

        <div className={styles.footerContainerIcons}>

          <ul>
            <li> 
              <img src={iconFace} /> 
            </li>
            
            <li> 
              <img src={iconInstan} /> 
            </li>

            <li> 
              <img src={iconTwiter} /> 
            </li>

            <li> 
              <img src={iconTwiter} /> 
            </li>
          </ul>

          <div className={styles.footerContainerLine}></div>

          <ul>
            <li>
              <p> Terminos y condiciones </p> 
            </li>
            
            <li>
              <p> Política de privacidad </p> 
            </li>

            <li>
              <p> Aviso legal </p> 
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Footer;
