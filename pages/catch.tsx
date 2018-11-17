import { Fragment } from "react";
import Head from "next/head";
import { Layout } from "@components";

export default () => (
  <Layout>
    <Head>
      <title>Seafood Transparency Project - Catch</title>
    </Head>
    <Fragment>
      <h1>Catch</h1>
      <p>You've caught a fish!</p>
    </Fragment>
  </Layout>
);
