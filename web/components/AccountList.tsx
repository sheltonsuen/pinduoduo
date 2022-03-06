import { usePreloadedQuery } from "react-relay";
import { queryAccounts } from "../api/accounts";

type AccountListProps = {
  reference: any;
};

export const AccountList = ({ reference }: AccountListProps) => {
  const data = usePreloadedQuery(queryAccounts, reference);

  console.log(">>>", data);

  return <></>;
};
