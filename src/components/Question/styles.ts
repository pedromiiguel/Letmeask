import styled from 'styled-components';

export const QuestionComponent = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  @media (max-width: 460px) {
    padding: 16px;
  }

  & + .question {
    margin-top: 8px;
  }

  &.highlighted {
    background: #f4f0ff;
    border: 1px solid #835afd;
    footer .user-info span {
      color: #29292e;
    }
  }

  &.answered {
    background: #dbdcdd;
  }

  p {
    color: #29292e;
  }
`;

export const QuestionFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 460px) {
    gap: 4px;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    color: #737380;
    font-size: 14px;
  }
`;

export const LikeButton = styled.div`
  display: flex;
  gap: 16px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;

    &.like-button {
      display: flex;
      align-items: flex-end;
      color: #737380;
      gap: 8px;

      transition: filter 0.2ms;

      &.liked {
        color: #835afd;

        svg path {
          stroke: #835afd;
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
