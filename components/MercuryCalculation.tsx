import React from "react";

/*
Research from:
http://mercuryfactsandfish.org/mercury-facts/the-safe-or-reference-dose/
*/

const mercuryPerWeek = (kilos: number): number => {
  const days = 7;
  const dosePerKilo = 0.1;
  return kilos * days * dosePerKilo;
};

const servingsPerWeek = (
  kilos: number,
  mercuryMeanPpm: number,
  grams: number
): number => {
  return mercuryPerWeek(kilos) / (mercuryMeanPpm * grams);
};

type Props = {
  species: string;
  mercuryMeanPpm: number;
};

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
        <input
          type="text"
          defaultValue={String(kilos)}
          onChange={this.handleChange}
        />
        <p>
          {species} contains on average {mercuryMeanPpm * 200}µg of mercury per
          200g serving. An adult weighing {kilos} kilos can safely consume{" "}
          {mercuryPerWeek(kilos)}
          µg of mercury per week. This allows for{" "}
          {servingsPerWeek(kilos, mercuryMeanPpm, 200).toFixed(1)} servings of{" "}
          {species} per week.
        </p>
      </div>
    );
  }
}
