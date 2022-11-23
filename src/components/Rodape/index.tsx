import { FiTwitter } from "react-icons/fi";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import * as S from "./styles";

const Rodape = () => {
  return (
    <S.Rodape>
      <div className="content">
        <a href="https://www.instagram.com/sthefany.buenoo/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/Sth3fany20" target="_blank" rel="noreferrer">
          <FiTwitter />
        </a>
      </div>
    </S.Rodape>
  );
};

export default Rodape;