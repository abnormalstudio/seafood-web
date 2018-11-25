import styled from "react-emotion";
import { colors, sizes } from "@settings";

type Props = {
  species: string;
};

const Header = styled("header")`
  width: 80%;
  position: relative;
  margin: ${sizes.mL} auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const H1 = styled("h1")`
  display: inline-block;
  border: 1px solid ${colors.orange};
  padding: 15px;
  background: ${colors.white};
  position: relative;
`;

const Line = styled("div")`
  position: absolute;
  top: calc(50% + 10px);
  height: 1px;
  width: 100%;
  background-color: ${colors.orange};
`;

export default function CatchHeader({ species }: Props) {
  return (
    <Header>
      <Line />
      <H1>{species}</H1>
    </Header>
  );
}
