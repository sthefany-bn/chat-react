import React from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";

import * as S from "./styles";
import { ButtonComponent } from "components";

const Cadastrar = () => {
    return (
        <S.Section>
            <form action="cadastrar.html" method="post">
                <IoPersonCircleSharp/>
                <label htmlFor="nome">Nome</label>
                <div>
                    <input type="text" name="nome" id="id" />
                </div>
                <label htmlFor="email">Email</label>
                <div>
                    <input type="email" name="email" id="id" />
                </div>
                <label htmlFor="senha">Senha</label>
                <div>
                    <input type="password" name="email" id="senha" />
                </div>
                <p>
                    Já possui conta? <Link to="/login">Faça o login </Link>
                    <ButtonComponent>Salvar</ButtonComponent>
                </p>
            </form>
        </S.Section>
    );
};

export default Cadastrar;