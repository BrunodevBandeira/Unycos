import React from "react";
import style from  "./SplitPage.module.css";
import { Link } from "react-router-dom";
// import Head from "../../components/Head";

const SplitPage = () => {

    function handleEffect() {
        const left = document.querySelector(".left");
        const right = document.querySelector(".right");
        const container = document.querySelector(".container");
        
        left.addEventListener('mouseenter', () => {
            container.classList.add('hover-left')
        });
        
        left.addEventListener('mouseleave', () =>{ 
            container.classList.remove('hover-left')
        });
        
        right.addEventListener('mouseenter', () => {
            container.classList.add('hover-right')
        });
        
        right.addEventListener('mouseleave', () => {
            container.classList.remove('hover-right')
        });
    };


    return(
        <div className={style.container} onMouseMove={handleEffect}>
            {/* <Head title="Bem vindo" description="Aprecie a arte"/> */}
            <div className={`${style.split} ${style.left}`}>
                <h1> Logar... </h1>
                <Link to="/login" href="#" className={style.btn}> Entre </Link>
            </div>

            <div  className={`${style.split} ${style.right}`}>
                <h1> Cadastrar... </h1>
                <Link to="/register" href="#" className={style.btn}> Cadastrar-se</Link>
            </div>

      </div>
    );
};

export default SplitPage;