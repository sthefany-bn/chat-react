import React from "react";
import * as S from "./styles";

const Comentarios = () => {

    
    return(
        <S.Home>
            <aside>
                {dados && dados.map((item) => < dados={item} />)}
            </aside>
        </S.Home>
    );
};

export default Comentarios;