import styled from "react-emotion";
import { colors } from "@settings";

const LogoWrapper = styled("div")`
  position: absolute;
  top: 45px;
  right: 45px;
  z-index: 10;
  background-color: ${colors.white};
  display: flex;
`;

const ImageWrapper = styled("div")`
  width: 50px;
  margin-right: 15px;
`;

const JellyImage = styled("img")`
  width: 100%;
`;

const Text = styled("div")``;

const Dark = styled("div")`
  color: ${colors.dark};
  font-weight: bold;
`;

const Green = styled("div")`
  color: ${colors.green};
  font-weight: bold;
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <ImageWrapper>
        <JellyImage src="/static/jellyfish.svg" alt="Jelly Fish" />
      </ImageWrapper>
      <Text>
        <Dark>THE SEAFOOD</Dark>
        <Green>TRANSPARENCY</Green>
        <Dark>PROJECT</Dark>
      </Text>
    </LogoWrapper>
  );
}
