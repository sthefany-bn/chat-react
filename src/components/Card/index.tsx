import React from "react";
import { ICard } from "interfaces/card.interface";

import * as S from "./styles";

const Card = ({ dados }: ICard) => {
    return(
        <S.Card>
            {dados && (
                <div key={dados.id}>
                    <img src={dados.img} alt="imagens" />
                </div>
            )}
        </S.Card>
    );
};

export default Card;