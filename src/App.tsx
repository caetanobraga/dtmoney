import { DashBoard } from './components/DashBoard';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionalModal } from './components/';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionalModalOpen, setIsNewTransactionalModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionalModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionalModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <NewTransactionalModal
        isOpen={isNewTransactionalModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
