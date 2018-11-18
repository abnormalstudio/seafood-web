import gql from "graphql-tag";

const CatchQuery = gql`
  query catchQuery($id: ID!) {
    catch(id: $id) {
      id
      latitude
      longitude
      caughtOn
      location
      fish {
        id
        species
        mercuryMeanPpm
        mercuryNumSamples
        nutrients(first: 50) {
          edges {
            node {
              name
              group
              unit
              value
            }
          }
        }
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
