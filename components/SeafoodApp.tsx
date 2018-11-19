import { ReactNode } from "react";
import { ApolloProvider } from "react-apollo";
import { apolloClient } from "@utils";

type Props = {
  children: ReactNode;
};

export default function SeafoodApp({ children }: Props) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
