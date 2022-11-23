import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  div {
    display: block;
    width: 3rem;
    margin: 1rem 0;
  }
  table {
    margin-left: 1.8rem;
    width: 95%;
    border-collapse: collapse;
    tr, td, th {
      border: 2px solid ${colors.black};
      padding: 0.5rem;
      color: ${colors.white};
    }
  }
`