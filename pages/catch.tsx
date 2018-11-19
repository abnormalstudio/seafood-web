import { withRouter } from "next/router";
import { Query } from "react-apollo";
import { SeafoodApp, Layout, Catch, CatchNav } from "@components";
import { CatchQuery } from "@queries";
import { ICatch } from "@types";

type Props = {
  router: {
    query: {
      id: string;
    };
  };
};

type QueryResponse = {
  data: {
    catch: ICatch;
  };
  loading: boolean;
};

export default withRouter(({ router }: Props) => (
  <SeafoodApp>
    <Query query={CatchQuery} variables={{ id: router.query.id }}>
      {({ data, loading }: QueryResponse) => {
        if (loading) {
          return (
            <Layout>
              <span>Loading...</span>
            </Layout>
          );
        }

        if (data) {
          const navTop = <CatchNav id={router.query.id} />;

          return (
            <Layout navTop={navTop}>
              <Catch catchData={data.catch} />
            </Layout>
          );
        }

        return (
          <Layout>
            <span>Error finding catch {router.query.id}</span>
          </Layout>
        );
      }}
    </Query>
  </SeafoodApp>
));
