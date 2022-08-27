import React from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";

import * as S from "./styles";
import { ButtonComponent } from "components";

const Login = () =>{
    return(
        <S.Section>
            <form action="cadastrar.html" method="post">
                <IoPersonCircleSharp/>
                <label htmlFor="email">E-mail</label>
                <div>
                    <input type="email" name="email" id="email" />
                </div>
                <label htmlFor="senha">Senha</label>
                <div>
                    <input type="password" name="senha" id="senha" />
                </div>
                <p>
                    Não possui conta? <Link to="/cadastrar">Cadastre-se </Link>
                    <ButtonComponent>Entrar</ButtonComponent>
                </p>
            </form>
        </S.Section>
    );
};

export default Login;