import styled from "react-emotion";
import { colors, sizes } from "@settings";

export const StatBox = styled("div")`
  border: 2px solid ${colors.dark};
  padding: 10px;
  margin: 0 auto;
  margin-bottom: ${sizes.mL};
  width: 80%;
  line-height: 1.7rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Centered = styled("div")`
  text-align: center;
  font-weight: bold;
`;

export const Button = styled("button")`
  display: inline-block;
  padding: ${sizes.mS};
  color: ${colors.orange};
  background-color: ${colors.black};
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: box-shadow 0.5s;
  cursor: pointer;
  font-family: "Fira Sans Condensed", sans-serif;
  line-height: 1rem;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;
export const AButton = Button.withComponent("a");
