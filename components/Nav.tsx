import { ReactNode } from "react";
import styled from "react-emotion";
import Link from "next/link";
import { colors, sizes } from "@settings";

const NavTag = styled("nav")`
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 225px;
  background-color: #f2c640;
`;

const Ul = styled("ul")`
  position: absolute;
  bottom: 15px;
  padding: ${sizes.mM};
  width: 100%;
`;

const Li = styled("li")`
  width: 50%;
  min-width: 175px;
  margin: 0 auto;
  margin-bottom: ${sizes.mM};
`;

const NavA = styled("a")`
  font-size: 1.5rem;
  color: ${colors.white};
  text-transform: uppercase;
  cursor: pointer;
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
        <Li>
          <Link href="/our-work">
            <NavA>
              <NavImage src="/static/team.svg" alt="Our Work" />
              Our Work
            </NavA>
          </Link>
        </Li>
      </Ul>
    </NavTag>
  );
}
