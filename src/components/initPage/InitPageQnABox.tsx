import React from 'react';
import InitPageQnABoxAns from './InitPageQnABoxAns';

interface Props {
  handleClick: Function;
  showArr: number[];
  contents: {
    id: number;
    title: string;
    content: string;
  };
}

export default function InitPageQnABox(props: Props): JSX.Element {
  const { contents, handleClick, showArr } = props;
  const { id, title, content } = contents;
  return (
    <div className="InitPageQnABox">
      <div className="QnA_Box_Title" onClick={(): void => handleClick(id)}>
        <div className="title_text">{title}</div>
        <div className="title_plus">{showArr[id] === 1 ? '<' : '+'}</div>
      </div>
      {showArr[id] === 1 ? <InitPageQnABoxAns content={content} id={id} /> : <div />}
    </div>
  );
}
