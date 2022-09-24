import styled from "styled-components";
import { colors } from "styles/GlobalStyle";
export const Cabecalho = styled.header`
display: flex;
  justify-content: space-between;
  background-color: ${colors.secondary};
  picture {
    svg {
      height: 4.8rem;
      width: 4.5rem;
      margin: 0.3rem auto;
    }
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${colors.white};
      font-size: 1.3rem;
    }
  }
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        margin: 0 1.5em;
        a {
          text-decoration: none;
          font-size: 1.2em;
          color: ${colors.white};
        }
        button {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          text-decoration: none;
          font-size: 1.2em;
          color: ${colors.primary};
          border: 0;
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
`
