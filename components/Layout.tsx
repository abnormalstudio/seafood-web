import { ReactNode } from "react";
import { injectGlobal } from "emotion";
import styled from "react-emotion";
import Head from "next/head";
import { Nav, Logo } from "@components";
import { colors } from "@settings";

type Props = {
  children: ReactNode;
  navTop?: ReactNode;
  backgroundColor?: string;
};

const Container = styled("div")`
  display: flex;
  min-height: 100vh;
`;

const Main = styled("main")`
  position: relative;
  width: 100%;
  margin-left: 225px;

  @media (max-width: 900px) {
    margin-left: 0px;
    padding-top: 60px;
  }
`;

export default function Layout({ children, navTop, backgroundColor }: Props) {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav navTop={navTop} />
      <Main>{children}</Main>
      <Logo backgroundColor={backgroundColor} />
    </Container>
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
fieldset, form, label, legend, button,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
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
	background-color: ${colors.white};
	color: ${colors.dark};
	background-color: #f9eed3;
}

body, input, textarea, button {
	font-family: 'Fira Sans Condensed', sans-serif;
}

h1,h2,h3,h4,h5,h6 {
	font-family: 'Francois One', sans-serif;
}

h1 {
	font-size: 2rem;
	margin: 2rem 0px 0.5rem 0px;
	text-align: center;
}
@media (max-width: 900px) {
	h1 {
		margin: 1rem 0px 0.5rem 0px;
	}
}
h2 {
	font-size: 1.5rem;
}
h3 {
	font-size: 1.25rem;
}
`;
