import { Fragment } from "react";
import styled from "react-emotion";
import { INutrient } from "@types";
import { StatBox } from "@elements";
import { sizes } from "@settings";

type Props = {
  nutrients: Array<INutrient>;
};

const groups = ["Proximates", "Minerals", "Vitamins", "Lipids"];

const GroupTitle = styled("h3")`
  margin-bottom: ${sizes.mS};
`;

const Nutrients = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

const Nutrient = styled("div")`
  padding: ${sizes.mS} ${sizes.mS} ${sizes.mS} 0px;
  width: 33.3%;
`;

export default function NutrientTable({ nutrients }: Props) {
  return (
    <Fragment>
      {groups.map(group => {
        const groupNutrients = nutrients.filter(
          nutrient => nutrient.group === group
        );

        if (groupNutrients.length === 0) {
          return null;
        }

        return (
          <StatBox key={`group-${group}`}>
            <GroupTitle>{group}</GroupTitle>
            <Nutrients>
              {groupNutrients.map(nutrient => (
                <Nutrient key={`nutrient-${nutrient.name}-${nutrient.unit}`}>
                  {nutrient.name} - {nutrient.value} {nutrient.unit}
                </Nutrient>
              ))}
            </Nutrients>
          </StatBox>
        );
      })}
    </Fragment>
  );
}
