import { Fragment } from "react";
import Head from "next/head";
import styled from "react-emotion";
import { SeafoodApp, Layout } from "@components";
import { sizes } from "@settings";

const H1 = styled("h1")`
  margin-top: ${sizes.mL};
`;

const Para = styled("p")`
  margin-top: ${sizes.mM};
  padding: ${sizes.mS};
`;

export default () => (
  <SeafoodApp>
    <Layout>
      <Head>
        <title>About - Seafood Transparency Project</title>
      </Head>
      <Fragment>
        <H1>About</H1>
        <Para>
          You're on the right page to find out about the Seafood Transparency
          Project.
        </Para>
      </Fragment>
    </Layout>
  </SeafoodApp>
);
