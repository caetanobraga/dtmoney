import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import {
  Container,
  TransactionTypeContainer,
  RadioBox,
} from './newTransactionalModal.styles';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionalModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionalModalProps) => {
  const { createTransaction } = useContext(TransactionsContext);

  const [type, setType] = useState('deposit');

  const [title, setTitle] = useState('');

  const [amount, setAmount] = useState(0);

  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      type,
      category,
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <CloseIcon color="disabled" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <ArrowUpwardIcon color="success" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <ArrowDownwardIcon color="error" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
