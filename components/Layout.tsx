import { ReactNode } from "react";
import { injectGlobal } from "emotion";
import { ApolloProvider } from "react-apollo";
import styled from "react-emotion";
import { apolloClient } from "@utils";
import { Nav } from "@components";
import { colors } from "@settings";

type Props = {
  children: ReactNode;
};

const Container = styled("div")`
  display: flex;
  color: ${colors.dark};
  background-color: ${colors.white};
  min-height: 100vh;
`;

export default function Layout({ children }: Props) {
  return (
    <ApolloProvider client={apolloClient}>
      <Container>
        <Nav />
        <main>{children}</main>
      </Container>
    </ApolloProvider>
  );
}

injectGlobal`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
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
`;

injectGlobal`
* {
	box-sizing: border-box;
}

body {
	font-size: 18px;
	font-family: 'Fira Sans Condensed', sans-serif;
}

h1,h2,h3,h4,h5,h6 {
	font-family: 'Francois One', sans-serif;
}

h1 {
	font-size: 2rem;
}
`;
