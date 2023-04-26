import { Container } from './sumary.styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const Sumary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <div className="circle-in">
            <ArrowUpwardIcon color="success" />
          </div>
        </header>
        <strong>R$ 10.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <div className="circle-out">
            <ArrowDownwardIcon color="error" />
          </div>
        </header>
        <strong>- R$ 3.000,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <div className="circle highlight-background">
            <AttachMoneyIcon color="inherit" />
          </div>
        </header>
        <strong>R$ 7.000,00</strong>
      </div>
    </Container>
  );
};
