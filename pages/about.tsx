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
  line-height: 1.6rem;
`;

const Wrapper = styled("div")`
  display: flex;
  height: calc(100vh - 60px);
  width: 45%;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export default () => (
  <SeafoodApp>
    <Layout>
      <Head>
        <title>About - Seafood Transparency Project</title>
      </Head>
      <Wrapper>
        <H1>About</H1>
        <Para>
          Food labelling and packaging regulations in Canada have proven
          insufficient to guarantee that the product being bought is actually
          what is being offered. The lack of knowledge about seafood, as well as
          the inability to know where it comes from has created an ease for
          mislabelling and food fraud and, over time, a growing mistrust in the
          seafood industry.
        </Para>

        <Para>
          The Seafood Transparency Project aims to make fish harvesters and
          distributors of wild fish imported into Canada accountable for the
          product they offer to the public and to provide consumers with the
          option of making informed decisions based on real knowledge about
          where their food comes from.
        </Para>
      </Wrapper>
    </Layout>
  </SeafoodApp>
);
