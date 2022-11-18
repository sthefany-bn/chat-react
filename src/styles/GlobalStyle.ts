import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
    third: "#4924A3",
    link: "#2F96FA",
    gray: "#D7D7D7",
    white: "#ffffff",
    black: "#000000",
    danger: "##BF3636",
    success: "#36BF69"
}

