import styled from "react-emotion";
import React from "react";
import { sizes, colors } from "@settings";
import { servingsPerWeek, mercuryPerWeek } from "@utils";

type Props = {
  species: string;
  mercuryMeanPpm: number;
};

const Label = styled("label")`
  display: block;
  font-weight: bold;
  margin-bottom: ${sizes.mS};
`;

const Input = styled("input")`
  display: inline-block;
  margin: 0px 5px;
  padding: 5px;
  width: 60px;
  border: 1px solid ${colors.dark};
`;

export default class MercuryCalculation extends React.Component<Props> {
  state = {
    kilos: 65
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    this.setState({
      kilos: parseFloat(value) || 0
    });
  };

  render() {
    const { kilos } = this.state;
    const { mercuryMeanPpm, species } = this.props;

    return (
      <div>
        <div>
          <Label htmlFor="kilos">
            YOUR WEIGHT IS
            <Input
              id="kilos"
              type="number"
              defaultValue={String(kilos)}
              onChange={this.handleChange}
            />
            KG
          </Label>
        </div>
        <p>
          {species} contains on average {(mercuryMeanPpm * 200).toFixed(1)}µg of
          mercury per 200g serving. An adult weighing {kilos} kilos can safely
          consume {mercuryPerWeek(kilos).toFixed(1)}
          µg of mercury per week. This allows for{" "}
          {servingsPerWeek(kilos, mercuryMeanPpm, 200).toFixed(1)} servings of{" "}
          {species} per week.
        </p>
      </div>
    );
  }
}
