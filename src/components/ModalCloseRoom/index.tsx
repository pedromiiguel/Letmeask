import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { database } from '../../services/firebase';
import CloseRoomImg from '../../assets/images/close-room.svg';

import { ModalWrapper, ModalContent, ButtonsContainer } from './styles';

type ModalType = {
  setIsOpen: (value: boolean) => void;
};

type RoomParams = {
  id: string;
};
export function ModalCloseRoom({ setIsOpen }: ModalType) {
  const { id: roomId } = useParams<RoomParams>();
  const history = useHistory();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });
    history.push('/');
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <img src={CloseRoomImg} alt="Encerrar sala" />
        <h1>Encerrar sala</h1>
        <p>Tem certeza que você deseja encerrar esta sala?</p>
        <ButtonsContainer>
          <button onClick={() => setIsOpen(false)}>Cancelar</button>
          <button onClick={handleEndRoom}>Sim, excluir</button>
        </ButtonsContainer>
      </ModalContent>
    </ModalWrapper>
  );
}
