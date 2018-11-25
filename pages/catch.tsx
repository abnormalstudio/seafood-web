import { withRouter } from "next/router";
import { Query } from "react-apollo";
import Head from "next/head";
import { SeafoodApp, Layout, Catch, CatchNav, MiddleText } from "@components";
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
              <Head>
                <title>Loading catch</title>
              </Head>
              <MiddleText text={`Loading catch ${router.query.id}`} />
            </Layout>
          );
        }

        if (data) {
          const navTop = <CatchNav id={router.query.id} />;

          return (
            <Layout navTop={navTop} backgroundColor="#f9eed3">
              <Catch catchData={data.catch} />
            </Layout>
          );
        }

        return (
          <Layout>
            <Head>
              <title>Error finding catch</title>
            </Head>
            <MiddleText text={`Error finding catch ${router.query.id}`} />
          </Layout>
        );
      }}
    </Query>
  </SeafoodApp>
));
