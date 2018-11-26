import { mercuryPerWeek } from "@utils";

const servingsPerWeek = (
  kilos: number,
  mercuryMeanPpm: number,
  grams: number
): number => {
  return mercuryPerWeek(kilos) / (mercuryMeanPpm * grams);
};

export default servingsPerWeek;
