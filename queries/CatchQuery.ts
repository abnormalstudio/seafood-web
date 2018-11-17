import gql from "graphql-tag";

const CatchQuery = gql`
  query catchQuery($id: ID!) {
    catch(id: $id) {
      id
      latitude
      longitude
      fish {
        id
        mercuryMeanPpm
        mercuryNumSamples
      }
      fishery {
        id
        name
        address
        email
        phone
        contact
        website
      }
      scans(first: 25) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            latitude
            longitude
            scannedAt
            scanner
          }
        }
      }
    }
  }
`;

export default CatchQuery;
