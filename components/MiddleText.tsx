import styled from "react-emotion";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const H2 = styled("h2")`
  text-align: center;
`;

type Props = {
  text: string;
};

export default function MiddleText({ text }: Props) {
  return (
    <Wrapper>
      <H2>{text}</H2>
    </Wrapper>
  );
}
