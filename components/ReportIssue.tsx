import { useRef, Fragment } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "react-emotion";
import Router from "next/router";
import Link from "next/link";
import { sizes } from "@settings";
import { Button, AButton } from "@elements";

type InnerProps = {
  id: string;
  reportCreate: (inputs: any) => void;
};

const FormWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 175px);
`;
const InputWrapper = styled("div")`
  margin-bottom: ${sizes.mM};
`;
const Form = styled("form")`
  min-width: 400px;
  max-width: 100%;

  @media (max-width: 900px) {
    padding-left: ${sizes.mS};
    padding-right: ${sizes.mS};
  }
`;
const Label = styled("label")`
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
`;

const Input = styled("input")`
  width: 100%;
  padding: ${sizes.mS};
  font-size: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: none;
`;
const Textarea = Input.withComponent("textarea");

const H1 = styled("h1")`
  margin-top: ${sizes.mL};
`;

function ReportIssue({ id, reportCreate }: InnerProps) {
  const nameEl = useRef(null);
  const emailEl = useRef(null);
  const phoneEl = useRef(null);
  const issueEl = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await reportCreate({
      variables: {
        catchId: id,
        name: nameEl.current.value,
        email: emailEl.current.value,
        phone: phoneEl.current.value,
        issue: issueEl.current.value
      }
    });
    Router.push(`/catch/${id}`);
  };

  return (
    <Fragment>
      <H1>Report An Issue</H1>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              innerRef={nameEl}
              type="text"
              placeholder="Your name"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              innerRef={emailEl}
              type="email"
              placeholder="Your email"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              innerRef={phoneEl}
              type="text"
              placeholder="(555) 555-5555"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="issue">Issue</Label>
            <Textarea
              id="issue"
              innerRef={issueEl}
              placeholder="Describe the issue in detail"
              required
              rows={3}
            />
          </InputWrapper>

          <InputWrapper>
            <Button>Submit Report</Button>{" "}
            <Link as={`/catch/${id}`} href={`/catch?id=${id}`}>
              <AButton>Cancel</AButton>
            </Link>
          </InputWrapper>
        </Form>
      </FormWrapper>
    </Fragment>
  );
}

const ReportCreateMutation = gql`
  mutation ReportCreateMutation(
    $catchId: ID!
    $name: String!
    $email: String!
    $phone: String!
    $issue: String!
  ) {
    reportCreate(
      input: {
        catchId: $catchId
        name: $name
        email: $email
        phone: $phone
        issue: $issue
      }
    ) {
      report {
        id
      }
      errors
    }
  }
`;

type Props = {
  id: string;
};

export default function ReportIssueWithMutation({ id }: Props) {
  return (
    <Mutation mutation={ReportCreateMutation}>
      {reportCreate => <ReportIssue id={id} reportCreate={reportCreate} />}
    </Mutation>
  );
}
