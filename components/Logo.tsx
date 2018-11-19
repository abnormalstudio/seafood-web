import styled from "react-emotion";
import { colors } from "@settings";

const LogoWrapper = styled("div")`
  position: absolute;
  top: 45px;
  right: 45px;
  z-index: 10;
  display: flex;
  background-color: ${props => props.backgroundColor || "transparent"};
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

const Black = styled("div")`
  color: ${colors.black};
  font-weight: bold;
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
      <Text>
        <Dark>THE SEAFOOD</Dark>
        <Black>TRANSPARENCY</Black>
        <Dark>PROJECT</Dark>
      </Text>
    </LogoWrapper>
  );
}
