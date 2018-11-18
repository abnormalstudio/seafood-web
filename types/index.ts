export interface IFish {
  id: string;
  species: string;
  mercuryMeanPpm: number;
  mercuryNumSamples: number;
  nutrients: {
    edges: [
      {
        node: INutrient;
      }
    ];
  };
}

export interface INutrient {
  name: string;
  group: string;
  unit: string;
  value: number;
}

export interface IFishery {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  contact: string;
  website: string;
}

export interface IScan {
  id: string;
  latitude: number;
  longitude: number;
  scannedAt: string;
  scanner: string;
}

export interface ICatch {
  id: string;
  latitude: number;
  longitude: number;
  caughtOn: string;
  location: string;
  fish: IFish;
  fishery: IFishery;
  scans: {
    edges: [
      {
        node: IScan;
      }
    ];
  };
}
