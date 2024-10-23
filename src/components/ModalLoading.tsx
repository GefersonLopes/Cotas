import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import { useLoadingStore } from '../state/storeLoading';
import '../styles/loading.scss';

const ModalLoad: React.FC = () => {
  const { loadingCount } = useLoadingStore();

  return (
    <Modal
      show={loadingCount > 0}
      centered
      backdrop="static"
      keyboard={false}
      dialogClassName="loading-modal"
    >
      <Modal.Body className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
      </Modal.Body>
    </Modal>
  );
};

export default ModalLoad;
