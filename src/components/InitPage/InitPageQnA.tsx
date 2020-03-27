import React from 'react';
import QnAbox from './QnAbox';
import QnAContent from './QnAContent';
import InitPageEmailInput from './InitPageEmailInput';

export default function InitPageQnA(): JSX.Element {
  return (
    <div className="InitPageQnA">
      <div className="title">자주 묻는 질문</div>
      <div className="QnAboxes">
        {QnAContent.map((ele, idx) => (
          <QnAbox QnA={ele} key={String(idx)} />
        ))}
      </div>
      <InitPageEmailInput />
    </div>
  );
}
