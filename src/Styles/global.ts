import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}


body {
	line-height: 1;
 background: ${({ theme }) => theme.colors['base-background']};
	color: ${({ theme }) => theme.colors['base-text']};
	-webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
	font-family: ${({ theme }) => theme.fonts.regular};
	font-weight: 400;
	font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button{
 cursor: pointer;
}

a{
 text-decoration: none;
}

li{
 list-style: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
	-webkit-appearance: none;
	margin: 0;
}

input[type='number']{
	-moz-appearance: textfield;
}



`;
