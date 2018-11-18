import styled from "react-emotion";
import { INutrient } from "@types";

type Props = {
  nutrients: Array<INutrient>;
};

const Table = styled("table")`
  max-width: 600px;
  margin: 0 auto;
`;

const Th = styled("th")`
  font-weight: bold;
`;

const Td = styled("td")`
  padding: 6px 3px;
`;

export default function NutrientTable({ nutrients }: Props) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Nutrient</Th>
          <Th>Value</Th>
        </tr>
      </thead>
      <tbody>
        {nutrients.map(nutrient => (
          <tr key={`${nutrient.name}-${nutrient.unit}`}>
            <Td>{nutrient.name}</Td>
            <Td>
              {nutrient.value} {nutrient.unit}
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
