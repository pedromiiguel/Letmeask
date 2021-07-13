import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.textColor};
}

body, input, button, select, textarea {
  font: 400 16px Roboto, sans-serif;
}
`;
