import React from 'react';
import { database } from '../../services/firebase';
import { useParams } from 'react-router-dom';

import DeleteModalimg from '../../assets/images/delete-modal.svg';

import { ModalWrapper, ModalContent, ButtonsContainer } from '../ModalCloseRoom/styles';


type ModalType = {
  questionId: string;
  setModalDeleteIsOpen: (value: boolean) => void;
};

type RoomParams = {
  id: string;
};

export function ModalDelete({ questionId, setModalDeleteIsOpen }: ModalType) {
  const { id: roomId } = useParams<RoomParams>();

  async function handleDeleteQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    setModalDeleteIsOpen(false);
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <img src={DeleteModalimg} alt="Remover pergunta" />
        <h1>Excluir pergunta</h1>
        <p>Tem certeza que você deseja excluir esta pergunta?</p>
        <ButtonsContainer>
          <button onClick={() => setModalDeleteIsOpen(false)}>Cancelar</button>
          <button onClick={() => handleDeleteQuestion(questionId)}>
            Sim, excluir
          </button>
        </ButtonsContainer>
      </ModalContent>
    </ModalWrapper>
  );
}
