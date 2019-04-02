import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Francois+One|Kanit');
html {
      box-sizing: border-box;
      font-size: 62.5%;
}
*, :after, :before {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    color: #3c414d;
    font-family: Francois One, Helvetica, Arial, sans-serif !important;
    font-size: 1.2rem;
  }
`
export default GlobalStyle
