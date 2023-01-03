import React from 'react';
import style from "./Main.module.css";
import foto from "../../assets/Hero.svg";
import foto2 from "../../assets/mobile/HeroMobile.svg";


const Main = () => {

  const [ argura, setLargura ] = React.useState(0);
  var largura = window.innerWidth
  let x = document.documentElement.clientWidth
  let y = document.body.clientWidth;
  console.log("largura => " + largura);
  console.log("X => " + x);
  console.log("Y => " + y);

 
    
    let opa = document.documentElement.clientWidth < 800 ? foto2 : foto;


  return (
      <section className={style.Main}>
          <div className={style.contentMain}>
              <img src={opa} alt="Foto" />
                <div className={style.contentMainTitle}> 
                  <h1> Mireia Belmonste </h1>
                  <h3> <span> Ensina </span> Natação </h3>
                </div>
          </div>
      </section>
  )
}

export default Main;