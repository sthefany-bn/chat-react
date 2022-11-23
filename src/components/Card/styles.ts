import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Card = styled.div`
  div {
    background-color: ${colors.thirdLight};
    border-radius: 0.5rem;
    padding: 0.4rem;
    h3, h4 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-size: medium;
    }
    div {
      display: flex;
      span {
        background-color: ${colors.third};
        border-radius: 0.5rem;
        padding: 0.3rem;
        margin: 0 0.4rem 0 0;
        font-size: small;
      }
    }
  }
`