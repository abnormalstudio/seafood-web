/*
Research from:
http://mercuryfactsandfish.org/mercury-facts/the-safe-or-reference-dose/
*/

const mercuryPerWeek = (kilos: number): number => {
  const days = 7;
  const dosePerKilo = 0.1;
  return kilos * days * dosePerKilo;
};

export default mercuryPerWeek;
