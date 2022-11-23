import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Home = styled.section`
  h1 {
    margin: auto 3rem 2rem;
    text-decoration-line:underline;
    text-decoration-style: double;
    font-weight: bold;
    font-size: 5rem;
    color: ${colors.white}
  }
  section {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 4rem;
    justify-content: space-around;
    margin: 1.5rem 4rem 4rem ;
  }
  aside {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 0.6rem;
    justify-content: space-around;
    margin: auto 4rem;
  }
`
