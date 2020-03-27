import React from 'react';

import InitPageEmailInput from './InitPageEmailInput';

export default function InitPageHeader(): JSX.Element {
  return (
    <div className="InitPageHeader">
      <div className="backImg">
        <div className="logoLogin">
          <div className="logo">NETFLIX</div>
          <div className="login">로그인</div>
        </div>

        <div className="mainTextBox">
          <div className="text1">영화, TV 프로그램을</div>
          <div className="text2">무제한으로.</div>
          <div className="text3">다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</div>
          <InitPageEmailInput />
          <div className="text4">
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
          </div>
        </div>
      </div>
    </div>
  );
}
