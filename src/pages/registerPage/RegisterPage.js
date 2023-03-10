import React from "react";
import style from "./RegisterPage.module.css";
import { AuthContext  } from "../../contexts/Auth";
import Head from "../../components/Head/Head";

const Cadastro = () => {

    const { authenticated, verifyPassword } = React.useContext(AuthContext);
    const [ email, setEmail ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    const [ confirm, setConfirm ] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(" ===> Submit <=== ", { email, password, confirm});

        console.log(password === confirm ? " ===> tá igual <=== " : " NOT ");
        verifyPassword(email, password, confirm);
    };

    return(
        <div className={style.Register}>
        <Head title="Cadastre-se" description="Cadastro"/>

            <h1 className={style.title}> Cadastre-se </h1>
            <form className={style.form} onSubmit={handleSubmit}>

                <div className={style.field}>
                    <label htmlFor="email"> Email </label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Coloque o Email aqui"
                        value={email} onChange={(e) => { setEmail(e.target.value)}}
                    />
                </div>

                <div className={style.field}>
                    <label htmlFor="password"> Senha </label>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Coloque a senha aqui"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className={style.field}>
                    <label htmlFor="password"> Confirmar Senha </label>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Confirmar senha"
                        value={confirm} onChange={(e) => setConfirm(e.target.value)}
                    />
                </div>

                <div className={style.actions}>
                    <button type="submit"  className={style.actionsBtn}> Cadastrar </button>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;