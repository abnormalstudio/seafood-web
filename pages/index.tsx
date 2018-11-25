import React from "react";
import Head from "next/head";
import Router from "next/router";
import styled from "react-emotion";
import { SeafoodApp, Layout } from "@components";
import { sizes, colors } from "@settings";

const Wrapper = styled("div")`
  background-image: url("/static/fish-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

const Form = styled("form")`
  position: absolute;
  width: 60%;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

  @media (max-width: 900px) {
    width: 80%;
  }

  input {
    color: ${colors.white};
    width: 100%;
    padding: ${sizes.mS};
    font-size: 1.2rem;
    border: 1px solid ${colors.white};
    background: none;
    text-transform: uppercase;

    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }
  input::placeholder {
    color: ${colors.white};
  }
`;

const Button = styled("button")`
  background: none;
  border: none;
  border-left: 1px solid ${colors.white};
  height: 100%;
  width: 75px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  right: 0px;
`;

const SearchImage = styled("img")`
  width: 25px;
`;

type Props = {};

export default class Index extends React.Component {
  private codeInput: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.codeInput = React.createRef();
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { current } = this.codeInput;
    if (current && current.value) {
      const id = current.value.toUpperCase();
      Router.push(`/catch/${id}`);
    }
  };

  render() {
    return (
      <SeafoodApp>
        <Layout>
          <Head>
            <title>Seafood Transparency Project</title>
          </Head>
          <Wrapper>
            <Form onSubmit={this.handleSubmit}>
              <input
                type="text"
                ref={this.codeInput}
                placeholder="ENTER YOUR SEAFOOD CODE"
              />
              <Button type="submit">
                <SearchImage src="/static/search.svg" alt="Search" />
              </Button>
            </Form>
          </Wrapper>
        </Layout>
      </SeafoodApp>
    );
  }
}
