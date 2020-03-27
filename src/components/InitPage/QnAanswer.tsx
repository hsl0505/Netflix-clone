import React from 'react';

interface Props {
  answer: string;
}

export default function QnAanswer(props: Props): JSX.Element {
  const { answer } = props;
  return (
    <div className="answer">
      {answer.split('\n').map((line) => (
        <span>
          {line}
          <br />
          <br />
        </span>
      ))}
    </div>
  );
}
