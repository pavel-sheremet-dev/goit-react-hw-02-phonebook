import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  color: ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.background};
}


h1,
h2,
h3,
h4,
h5,
h6,
p,
button,
ul,
ol,
li {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
  padding-left: 0;
}

img,
a, 
svg
 {
  display: block;
}

button {
  border: none;
}

.link {
  text-decoration: none;
  color: inherit;
}

.list {
  list-style: none;
}
`;
