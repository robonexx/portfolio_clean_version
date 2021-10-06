import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Darker+Grotesque:wght@300;400;500;600;700&display=swap');

*,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
      width: 100vw;
      height: 100%;
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text}; 
      overflow-x: hidden;
  }
  `;