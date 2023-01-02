import React from "react";
import style from  "./SplitPage.module.css";
import { Link } from "react-router-dom";
// import Head from "../../components/Head";

const SplitPage = () => {
    return(
        <div className={style.container} >
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