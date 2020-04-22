import React from 'react';
import InitPageQnABoxContainer from '../../containers/InitPageQnABoxContainer';
import InitPageEmailInputContainer from '../../containers/InitPageEmailInputContainer';

export default function InitPageQnA(): JSX.Element {
  return (
    <div className="InitPageQnA">
      <div className="QnA_Title">자주 묻는 질문</div>
      <InitPageQnABoxContainer />
      <InitPageEmailInputContainer location="down" />
      <div className="QnA_emailText">
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
      </div>
    </div>
  );
}
