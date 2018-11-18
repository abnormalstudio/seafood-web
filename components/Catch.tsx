import { Query } from "react-apollo";
import Head from "next/head";
import moment from "moment";
import styled from "react-emotion";
import { CatchQuery } from "@queries";
import { ICatch } from "@types";
import {
  NutrientTable,
  MercuryCalculation,
  CatchMap,
  CatchHeader
} from "@components";
import { colors, sizes } from "@settings";

type Props = {
  id: string;
};

type QueryResponse = {
  data: {
    catch: ICatch;
  };
  loading: boolean;
};

const CatchContainer = styled("div")`
  max-height: 100vh;
  overflow-y: scroll;
  padding: 10px;
`;

const SplitBox = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  margin-bottom: ${sizes.mM};
`;

const SplitStatBox = styled("div")`
  border: 2px solid ${colors.dark};
  padding: 10px;
  width: calc(50% - 5px);
`;

const StatBox = styled("div")`
  border: 2px solid ${colors.dark};
  padding: 10px;
  margin: 0 auto;
  margin-bottom: ${sizes.mM};
  width: 80%;
`;

const MapContainer = styled("div")`
  margin-bottom: ${sizes.mM};
`;

const Centered = styled("div")`
  text-align: center;
  font-weight: bold;
`;

export default function Catch({ id }: Props) {
  return (
    <Query query={CatchQuery} variables={{ id }}>
      {({ data, loading }: QueryResponse) => {
        if (loading) {
          return <span>Loading...</span>;
        }

        const { location, fish, latitude, longitude, caughtOn } = data.catch;
        const scans = data.catch.scans.edges.map(edge => edge.node);
        const nutrients = fish.nutrients.edges.map(edge => edge.node);

        return (
          <CatchContainer>
            <Head>
              <title>{fish.species} - Seafood Transparency Project</title>
            </Head>

            <CatchHeader species={fish.species} />

            <SplitBox>
              <SplitStatBox>
                Origin
                <Centered>{location}</Centered>
              </SplitStatBox>
              <SplitStatBox>
                Date Caught
                <Centered>
                  {moment(data.catch.caughtOn).format("MMM Do, YYYY")}
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

            <StatBox>
              <NutrientTable nutrients={nutrients} />
            </StatBox>
          </CatchContainer>
        );
      }}
    </Query>
  );
}
