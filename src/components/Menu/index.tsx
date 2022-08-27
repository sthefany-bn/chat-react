import React from "react";
import { FcKey } from "react-icons/fc";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <S.Cabecalho>
            <picture>
                <Link to="/">
                    <FcKey />
                    Secret chat
                </Link>
            </picture>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/cadastrar">Cadastre-se</Link>
                    </li>
                </ul>
            </nav>
        </S.Cabecalho>
    );
};

export default Menu;