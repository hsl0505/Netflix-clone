import React from 'react';

interface Props {
  content: string;
  id: number;
}

export default function InitPageQnABoxAns(props: Props): JSX.Element {
  const { content, id } = props;
  return (
    <div className="QnA_Box_Ans">
      <div className="ans_text">
        {content.split('\n').map((line) => {
          return (
            <span key={id}>
              {line}
              <br />
              <br />
            </span>
          );
        })}
      </div>
    </div>
  );
}
