import { withRouter } from "next/router";
import { Query } from "react-apollo";
import { SeafoodApp, Layout, ReportIssue, ReportNav } from "@components";
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
          const navTop = <ReportNav id={router.query.id} />;

          return (
            <Layout navTop={navTop} backgroundColor="#FFF">
              <ReportIssue id={router.query.id} />
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
