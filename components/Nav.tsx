import styled from "react-emotion";
import Link from "next/link";

const NavTag = styled("nav")`
  width: 20%;
  min-width: 200px;
  background-image: linear-gradient(to bottom, #f26f10, #c10e9e);
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
