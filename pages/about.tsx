import { Fragment } from "react";
import Head from "next/head";
import { Layout } from "@components";

export default () => (
  <Layout>
    <Head>
      <title>Seafood Transparency Project - About</title>
    </Head>
    <Fragment>
      <h1>About</h1>
      <p>
        You're on the right page to find out about the Seafood Transparency
        Project.
      </p>
    </Fragment>
  </Layout>
);
