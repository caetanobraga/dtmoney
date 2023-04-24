import { DashBoard } from './components/DashBoard';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyle />
    </>
  );
}
