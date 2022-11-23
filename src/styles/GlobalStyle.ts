import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#4B4DA1",
  secondary: "#30317C",
  third: "#4924A3",
  thirdLight: "#a990e7",
  link: "#2F96FA",
  button: "#331973",
  gray: "#D7D7D7",
  white: "#ffffff",
  black: "#000000",
  success: "#36BF69",
  danger: "#BF3636"
}
