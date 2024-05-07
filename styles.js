import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  --background-color: #0D4028;
  --text-color: #D1AF94; 
  --lightgrey-color: #F1F0F0;
  --pink-color: #DDA2B7;
  // --button-text-color: #ffffff;
  // --accent-color: #078080; 
  // --secondary-color: #f45d48;
  --border-radius: 4px;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
