import styled from "react-emotion";
import Link from "next/link";

const NavTag = styled("nav")`
  width: 20%;
`;

export default function Nav() {
  return (
    <NavTag>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </NavTag>
  );
}
