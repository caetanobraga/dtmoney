import { Sumary } from '../Sumary';
import { TransactionalsTable } from '../TransactionalsTable/TransactionalsTable';
import { Container } from './dashBoard.styles';

export const DashBoard = () => {
  return (
    <Container>
      <Sumary />
      <TransactionalsTable />
    </Container>
  );
};
