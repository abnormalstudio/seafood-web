import styled from "react-emotion";
import { sizes, colors } from "@settings";

type Props = {
  id: string;
};

const Container = styled("div")`
  padding: ${sizes.mM};
  width: 100%;
  text-align: center;
`;

const FishImage = styled("img")`
  max-width: 100%;
  max-height: 75px;
  margin-bottom: ${sizes.mL};
`;

const Code = styled("div")`
  font-size: 2rem;
  color: ${colors.white};
  margin-bottom: ${sizes.mM};
`;

const ReportLink = styled("a")`
  display: inline-block;
  padding: ${sizes.mS};
  color: ${colors.green};
  background-color: ${colors.dark};
  text-decoration: none;
  font-weight: bold;
`;

export default function CatchNav({ id }: Props) {
  const email = "report@seafoodtransparencyproject.ca";
  const subject = `Issue with ${id}`;

  return (
    <Container>
      <FishImage src="/static/fish.svg" alt="Fish Image" />
      <Code>{id}</Code>
      <ReportLink href={`mailto:${email}?subject=${subject}`}>
        REPORT ISSUE
      </ReportLink>
    </Container>
  );
}
