import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Section = styled.section`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${colors.primary};
    form {
        background-color: ${colors.white};
        border-radius: 1rem;
        padding: 1.5rem;
        svg {
            display: flex;
            margin: 0.4rem 8rem;
            height: 5rem;
            width: 5rem;
            color: ${colors.gray};
        }
        div {
            background-color: ${colors.gray};
            border-radius: 0.2rem;
            display: flex;
            margin: 0.5rem 0;
            padding: 0.35rem;
            input {
                width: 100%;
                font-size: 1rem;
                border: 0;
                background-color: transparent;
            }
        }
        p{
            font-size: 0.8rem;
            margin-top: 1rem;
            a{
                text-decoration: none;
                color : ${colors.link};
                font-weight: bold;
            }
        }
    }
`