import React from "react";
import style from"./LoginPage.module.css";
import { AuthContext  } from "../../contexts/Auth";
import Head from "../../components/Head/Head";

const LoginPage = () => {

    const { authenticated, login } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMIT...", { email, password});
        login(email, password); //integração com o contexto e com a api
    }

    return( 
            <div className={style.login}>
                <Head title="Entre" description="Logar"/>
                <h1 className={style.title}> Login do sistema... </h1>
                <form className={style.form} onSubmit={handleSubmit}>

                    <div className={style.field}>
                        <label htmlFor="email"> Email </label>
                        <input 
                        type="email" 
                        name="email" 
                        // id="email"  
                        placeholder="Coloque o Email aqui"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        />  
                    </div>

                    <div className={style.field}>
                        <label htmlFor="password"> Senha </label>
                        <input 
                        type="password" 
                        name="password" 
                        // id="password" 
                        placeholder="Coloque a senha aqui"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        />  
                    </div>

                    <div className={style.actions}>
                        <button type="submit" className={style.actionsBtn}> Entrar... </button>
                    </div>

                </form>
            </div>
    );
};

export default LoginPage;