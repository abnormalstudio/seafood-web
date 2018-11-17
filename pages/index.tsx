import React, { Fragment } from "react";
import Head from "next/head";
import Router from "next/router";
import { Layout } from "@components";

export default class Index extends React.Component {
  private codeInput: React.RefObject<HTMLInputElement>;

  constructor() {
    super({});
    this.codeInput = React.createRef();
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { current } = this.codeInput;
    if (current) {
      Router.push(`/catch/${current.value}`);
    }
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>Seafood Transparency Project</title>
        </Head>
        <Fragment>
          <h1>Seafood Transparency Project</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref={this.codeInput} />
            <button type="submit">Search</button>
          </form>
        </Fragment>
      </Layout>
    );
  }
}
