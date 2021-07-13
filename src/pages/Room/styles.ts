import styled from 'styled-components';

export const PageRoom = styled.div`
  height: 100vh;
`;

export const Menu = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 8px;
    }

    > div {
      display: flex;
      gap: 16px;
      @media (max-width: 500px) {
        flex-direction: column;
        gap: 8px;
      }
    }

    > img {
      max-height: 45px;
    }
  }
`;

export const MainContent = styled.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const MainTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    margin: 32px 0 24px 8px;
  }

  @media (max-width: 460px) {
    flex-direction: column;
    gap: 8px;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-family: 24px;
    color: #29292e;
  }

  span {
    margin-left: 16px;
    background: #e559f9;
    border-radius: 9999px;
    padding: 8px 16px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const Form = styled.form`
  @media (max-width: 800px) {
    margin: 0 8px;
  }
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  .user-info {
    display: flex;
    align-items: center;
    gap: 8px;
    @media (max-width: 460px) {
      gap: 4px;
    }

    img {
      height: 32px;
      width: 32px;
      border-radius: 50%;
    }

    span {
      font-size: 14px;
      color: #737380;
      font-weight: 500;
    }
  }

  > span {
    font-size: 14px;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const QuestionList = styled.div`
  margin-top: 32px;

  @media (max-width: 800px) {
    margin: 32px 8px;
  }
`;
