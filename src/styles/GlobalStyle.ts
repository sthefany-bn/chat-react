import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

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
    third: "#0000FF",
    link: "#2F96FA",
    gray: "#D8D8D8",
    white: "#ffffff",
    black: "#000000",
    danger: "#ff0000",
    success: "#00ff00"
}

