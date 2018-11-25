import styled from "react-emotion";
import { colors } from "@settings";

const LogoWrapper = styled("div")`
  position: absolute;
  top: 45px;
  right: 45px;
  z-index: 10;
  display: flex;
  background-color: ${props => props.backgroundColor || "transparent"};

  @media (max-width: 900px) {
    position: fixed;
    top: 10px;
    left: 10px;
    right: auto;
    background-color: transparent;
  }
`;

const ImageWrapper = styled("div")`
  width: 50px;
  margin-right: 15px;

  @media (max-width: 900px) {
    margin-right: 10px;
    width: 35px;
  }
`;

const JellyImage = styled("img")`
  width: 100%;
`;
const Dark = styled("div")`
  color: #542733;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 0.85rem;
  }
`;
const Transparency = styled("div")`
  color: #f17633;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 0.85rem;
  }
`;

type Props = {
  backgroundColor?: string;
};

export default function Logo({ backgroundColor }: Props) {
  return (
    <LogoWrapper backgroundColor={backgroundColor}>
      <ImageWrapper>
        <JellyImage src="/static/jellyfish.svg" alt="Jelly Fish" />
      </ImageWrapper>
      <div>
        <Dark>THE SEAFOOD</Dark>
        <Transparency>TRANSPARENCY</Transparency>
        <Dark>PROJECT</Dark>
      </div>
    </LogoWrapper>
  );
}
