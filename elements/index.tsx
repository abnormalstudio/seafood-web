import styled from "react-emotion";
import { colors, sizes } from "@settings";

export const StatBox = styled("div")`
  border: 2px solid ${colors.dark};
  padding: 10px;
  margin: 0 auto;
  margin-bottom: ${sizes.mL};
  width: 80%;
  line-height: 1.7rem;
`;

export const Centered = styled("div")`
  text-align: center;
  font-weight: bold;
`;
