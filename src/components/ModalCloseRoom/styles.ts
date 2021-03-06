import styled from 'styled-components';

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 590px;
  height: 360px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  background: #fff;

  border-radius: 8px;

  @media (max-width: 600px) {
    margin: 0 16px;
    gap: 16px;
  }

  img {
    width: 48px;
    height: 48px;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-family: 24px;
    color: #29292e;
  }

  p {
    color: #737380;
    line-height: 26px;
  }

  @media (max-width: 350px) {
    p {
      margin: 0 16px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 350px) {
    flex-direction: column;
    gap: 8px;
    width: 100%;
    align-items: center;
  }

  button {
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    color: #fff;
    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    @media (max-width: 350px) {
      width: 90%;
    }

    &:first-child {
      color: #737380;
      background: #dbdcdd;
    }

    &:last-child {
      background: #e73f5d;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
