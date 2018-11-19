import { Fragment } from "react";
import Head from "next/head";
import { SeafoodApp, Layout } from "@components";

export default () => (
  <SeafoodApp>
    <Layout>
      <Head>
        <title>About - Seafood Transparency Project</title>
      </Head>
      <Fragment>
        <h1>About</h1>
        <p>
          You're on the right page to find out about the Seafood Transparency
          Project.
        </p>
      </Fragment>
    </Layout>
  </SeafoodApp>
);
