import React from "react";
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";

const Comentarios = () => {

    
    return(
        <S.Home>
            <aside>
                {dados && dados.map((item) => <CardComponent dados={item} />)}
            </aside>
        </S.Home>
    );
};

export default Comentarios;