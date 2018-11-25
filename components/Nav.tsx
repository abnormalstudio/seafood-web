import { ReactNode } from "react";
import styled from "react-emotion";
import Link from "next/link";
import { colors, sizes } from "@settings";

const NavTag = styled("nav")`
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 225px;
  background-color: #3289a3;
  z-index: 10;

  @media (max-width: 900px) {
    width: 100%;
    bottom: auto;
    height: 60px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Ul = styled("ul")`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: ${sizes.mM};
  width: 100%;

  @media (max-width: 900px) {
    display: flex;
    justify-content: flex-end;
    bottom: 0px;
    padding: ${sizes.mS};
  }
`;

const Li = styled("li")`
  width: 50%;
  min-width: 175px;
  margin: 0 auto;
  margin-bottom: ${sizes.mM};

  @media (max-width: 900px) {
    width: 100px;
    min-width: auto;
    text-align: center;
    margin: 0px;
  }
`;

const NavA = styled("a")`
  font-size: 1.5rem;
  color: ${colors.white};
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

const NavImage = styled("img")`
  width: 20px;
  margin-right: 5px;
`;

type Props = {
  navTop?: ReactNode;
};

export default function Nav({ navTop }: Props) {
  return (
    <NavTag>
      {navTop}

      <Ul>
        <Li>
          <Link href="/">
            <NavA>
              <NavImage src="/static/home.svg" alt="Home" />
              Home
            </NavA>
          </Link>
        </Li>
        <Li>
          <Link href="/about">
            <NavA>
              <NavImage src="/static/about.svg" alt="About" />
              About
            </NavA>
          </Link>
        </Li>
      </Ul>
    </NavTag>
  );
}
