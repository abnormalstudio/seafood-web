import { withRouter } from "next/router";
import { Layout, Catch } from "@components";

type Props = {
  router: {
    query: {
      id: string;
    };
  };
};

export default withRouter(({ router }: Props) => (
  <Layout>
    <Catch id={router.query.id} />
  </Layout>
));
