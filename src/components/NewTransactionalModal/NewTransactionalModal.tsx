import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from './newTransactionalModal.styles';

interface NewTransactionalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionalModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionalModalProps) => {
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
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
