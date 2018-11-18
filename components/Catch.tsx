import { Query } from "react-apollo";
import Head from "next/head";
import moment from "moment";
import styled from "react-emotion";
import { CatchQuery } from "@queries";
import { ICatch } from "@types";
import { NutrientTable, MercuryCalculation, CatchMap } from "@components";

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
  color: #ffffff;
  max-height: 100vh;
  overflow-y: scroll;
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

            <h1>{fish.species}</h1>

            <div>
              <div>{location}</div>
              <div>{moment(data.catch.caughtOn).format("MMM Do, YYYY")}</div>
            </div>

            <MercuryCalculation
              species={fish.species}
              mercuryMeanPpm={fish.mercuryMeanPpm}
            />
            <CatchMap
              origin={{ latitude, longitude, time: caughtOn }}
              scans={scans}
            />
            <NutrientTable nutrients={nutrients} />
          </CatchContainer>
        );
      }}
    </Query>
  );
}
