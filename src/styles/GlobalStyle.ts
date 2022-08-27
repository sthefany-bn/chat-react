import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: 'Alegreya Sans';
        font-weight: 400;
    }
`

export const colors = {
    primary: "#4B4DA1",
    secondary: "#30317C",
    link: "#2F96FA",
    gray: "#E5E5E5",
    white: "#ffffff",
    black: "#000000",
}

