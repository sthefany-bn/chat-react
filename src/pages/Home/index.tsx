import React, { useEffect, useState } from "react";
import Group1 from "assets/img/Group1.png";
import Group2 from "assets/img/Group2.png";
import Group3 from "assets/img/Group3.png";
import Group4 from "assets/img/Group4.png";
import Group5 from "assets/img/Group5.png";
import Group6 from "assets/img/Group6.png";
import Group7 from "assets/img/Group7.png";
import Group8 from "assets/img/Group8.png";
import Group9 from "assets/img/Group9.png";
import * as S from "./styles";
import { CardComponent } from "components";
import { apiMessage } from "services/data";
import { IMessageData } from "interfaces/message.interface";

const Home = () => {
  const [messages, setMessage] = useState<IMessageData[]>()
  useEffect(() => {
    const fetchData = async () => {
      const response = await apiMessage.index()
      setMessage(response.data)
    }
    fetchData()
  }, [])

  return (
    <S.Home>
      <h1>Assuntos</h1>
      <section>
        <picture>
          <img src={Group1} alt="Imagens principais" />
        </picture>
        <picture>
          <img src={Group2} alt="Imagens principais" />
        </picture>
        <picture>
          <img src={Group3} alt="Imagens principais" />
        </picture>
        <picture>
          <img src={Group4} alt="Imagens principais" />
        </picture>
        <picture>
          <img src={Group5} alt="Imagens principais" />
        </picture>
        <picture>
          <img src={Group6} alt="Imagens principais" />
        </picture>
        <picture>
          <img src={Group7} alt="Imagens principais" />
        </picture>
        <picture>
          <img src={Group8} alt="Imagens principais" />
        </picture>
        <picture>
          <img src={Group9} alt="Imagens principais" />
        </picture>
      </section>
      <aside>
        {messages && messages.map((item) => <CardComponent key={item.id} dados={item} />)}
      </aside>
    </S.Home>
  );
};

export default Home;
