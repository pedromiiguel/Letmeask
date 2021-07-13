import React, { ReactNode } from 'react';
import {
  QuestionComponent,
  QuestionFooter,
  UserInfo,
  LikeButton,
} from './styles';
import cx from 'classnames';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <QuestionComponent
      className={cx(
        'question',
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <QuestionFooter>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <LikeButton>{children}</LikeButton>
      </QuestionFooter>
    </QuestionComponent>
  );
}
