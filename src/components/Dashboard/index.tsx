import { Summary } from "../Summary";
import { TransactionTables } from "../TransactionsTable";
import { Container } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionTables />
    </Container>
  );
};
