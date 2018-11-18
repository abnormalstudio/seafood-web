import { INutrient } from "@types";

type Props = {
  nutrients: Array<INutrient>;
};

export default function NutrientTable({ nutrients }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Value</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>
        {nutrients.map(nutrient => (
          <tr key={nutrient.name}>
            <td>{nutrient.name}</td>
            <td>{nutrient.value}</td>
            <td>{nutrient.unit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
