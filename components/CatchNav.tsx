import styled from "react-emotion";
import Link from "next/link";
import { sizes, colors } from "@settings";
import { AButton } from "@elements";

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
    margin-top: 60px;
    background-color: #f9eed3;
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
    margin-bottom: 0px;
  }
`;

export default function CatchNav({ id }: Props) {
  return (
    <Container>
      <FishImage src="/static/fish.svg" alt="Fish Image" />
      <Code>{id}</Code>
      <div>
        <Link as={`/catch/${id}/report`} href={`/report?id=${id}`}>
          <AButton>REPORT ISSUE</AButton>
        </Link>
      </div>
    </Container>
  );
}
