import { Container } from './transactionalsTable.styles';

export const TransactionalsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td> <td>R$12.000,00</td>
            <td>Desenvolvimento</td> <td>20/04/2023</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td> <td>R$12.000,00</td>
            <td>Desenvolvimento</td> <td>20/04/2023</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td> <td>R$12.000,00</td>
            <td>Desenvolvimento</td> <td>20/04/2023</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td> <td>R$12.000,00</td>
            <td>Desenvolvimento</td> <td>20/04/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
