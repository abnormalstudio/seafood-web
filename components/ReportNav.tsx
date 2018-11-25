import styled from "react-emotion";
import { sizes, colors } from "@settings";

type Props = {
  id: string;
};

const Container = styled("div")`
  padding: ${sizes.mM};
  width: 100%;
  text-align: center;

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    padding: ${sizes.mS};
    margin-top: 70px;
  }
`;

const FishImage = styled("img")`
  max-width: 100%;
  max-height: 75px;
  margin-bottom: ${sizes.mL};

  @media (max-width: 900px) {
    display: none;
  }
`;

const Code = styled("div")`
  font-size: 2rem;
  color: ${colors.white};
  margin-bottom: ${sizes.mM};

  @media (max-width: 900px) {
    color: ${colors.dark};
  }
`;

export default function ReportNav({ id }: Props) {
  return (
    <Container>
      <FishImage src="/static/fish.svg" alt="Fish Image" />
      <Code>{id}</Code>
    </Container>
  );
}
