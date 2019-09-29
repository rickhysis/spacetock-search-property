import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,900|Inconsolata:400,700');

* {
  box-sizing: border-box;
}

html {
  font-family: Lato, sans-serif;
  font-size: 16px;
}

body {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1.5rem;
}
.pagination{
    justify-content: center;
    -webkit-box-pack: center!important;
    -ms-flex-pack: center!important;
    justify-content: center!important;
    width: 100%;
}
`;

export default GlobalStyle