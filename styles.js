import { createGlobalStyle } from "styled-components";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

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
    font-family: ${montserrat.style.fontFamily};
    color: var(--text-color);
    background-color: var(--background-color);
  }

  header {
    padding: 20px 0 20px 0;
    width: 100%;
    // position: sticky;
    // top: 0;
    // z-index: 10;
  }
   
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  h1 {
    text-align: center;
    margin: 0;
  }
`;
