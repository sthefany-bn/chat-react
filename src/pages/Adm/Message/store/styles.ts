import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  form {
    margin: 1rem;
    padding: 0.4rem;
    a {
      background-color: ${colors.button};
      border-radius: 0.3rem;
      color: ${colors.white};
      font-weight: bold;
      text-decoration: none;
      padding: 0.5rem;
      outline: 0.2rem outset ${colors.button};
    }
    div {
      width: 80%;
      margin: 1rem 0;
      display: grid;
      grid-template-columns: 5rem auto;
      label {
        font-size: 1rem;
      }
      input {
        margin: 0 1.5rem;
      }
      textarea {
        margin: 0 1.5rem;
        padding: 0.4rem;
        border-radius: 0.5rem;
        height: 10rem;
      }
      input {
        padding: 0.4rem;
        border-radius: 0.5rem;
      }
      div {
        display: flex;
      }
    }
  }
`