import React from 'react';

interface Props {
  content: string;
}

export default function InitPageQnABoxAns(props: Props): JSX.Element {
  const { content } = props;
  return (
    <div className="QnA_Box_Ans">
      <div className="ans_text">
        {content.split('\n').map((line) => {
          return (
            <span>
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
