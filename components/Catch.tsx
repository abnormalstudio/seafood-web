import Head from "next/head";
import moment from "moment";
import styled from "react-emotion";
import { ICatch } from "@types";
import {
  NutrientTable,
  MercuryCalculation,
  CatchMap,
  CatchHeader
} from "@components";
import { colors, sizes } from "@settings";
import { StatBox, Centered } from "@elements";

type Props = {
  catchData: ICatch;
};

const CatchContainer = styled("div")`
  max-height: 100vh;
  padding: 10px;
`;

const SplitBox = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  margin-bottom: ${sizes.mL};
  line-height: 1.7rem;
`;

const SplitStatBox = styled("div")`
  border: 2px solid ${colors.dark};
  padding: 10px;
  width: calc(50% - 5px);
`;

const MapContainer = styled("div")`
  margin-bottom: ${sizes.mM};
`;

export default function Catch({ catchData }: Props) {
  const { location, fish, latitude, longitude, caughtOn, fishery } = catchData;
  const scans = catchData.scans.edges.map(edge => edge.node);
  const nutrients = fish.nutrients.edges.map(edge => edge.node);
  return (
    <CatchContainer>
      <Head>
        <title>{fish.species} - Seafood Transparency Project</title>
      </Head>

      <CatchHeader species={fish.species} />

      <SplitBox>
        <SplitStatBox>
          ORIGIN
          <Centered>{location}</Centered>
        </SplitStatBox>
        <SplitStatBox>
          DATE CAUGHT
          <Centered>
            {moment(catchData.caughtOn).format("MMM Do, YYYY")}
          </Centered>
        </SplitStatBox>
      </SplitBox>

      <SplitBox>
        <SplitStatBox>
          FISHERY
          <Centered>{fishery.name}</Centered>
        </SplitStatBox>
        <SplitStatBox>
          CONTACT
          <Centered>
            {fishery.contact}
            <br />
            {fishery.address}
          </Centered>
        </SplitStatBox>
      </SplitBox>

      <StatBox>
        <MercuryCalculation
          species={fish.species}
          mercuryMeanPpm={fish.mercuryMeanPpm}
        />
      </StatBox>

      <MapContainer>
        <CatchMap
          origin={{ latitude, longitude, time: caughtOn }}
          scans={scans}
        />
      </MapContainer>

      <NutrientTable nutrients={nutrients} />
    </CatchContainer>
  );
}
