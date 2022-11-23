import React from "react";
import { ICard } from "interfaces/card.interface";
import * as S from "./styles";

const Card = ({ dados }: ICard) => {
  return (
    <S.Card>
      {dados && (
        <div key={dados.id}>
          <h3>{dados.title}</h3>
          <h4>- {dados.message}</h4>
          <div>
            {dados.messageTopic?.map((topic) => (
              <span key={topic.id}>{topic.name}</span>
            ))}
          </div>
        </div>
      )}
    </S.Card>
  );
};

export default Card;
