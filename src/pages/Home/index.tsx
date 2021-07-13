import React, { FormEvent, useState } from 'react';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { PageAuth, Aside, AuthContainer, Separator, Form, MainContent, CreateRoom} from './styles'


export function Home() {
  const history = useHistory();

  const [roomCode, setRoomCode] = useState('');

  const { SignInWithGoogle, user } = useAuth();

  function handleCreateRoom() {
    if (!user) {
      SignInWithGoogle();
    }

    history.push('/rooms/new');
    console.log(user);
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`/rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists!');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed!');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <PageAuth>
      <Aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp; ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </Aside>
      <AuthContainer>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <CreateRoom onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo google" />
            Crie sua sala com o google
          </CreateRoom>
          <Separator>ou entre em uma sala</Separator>
          <Form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </Form>
        </MainContent>
      </AuthContainer>
    </PageAuth>
  );
}
