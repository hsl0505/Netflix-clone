import React from 'react';

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
        </div>
      </div>
    </div>
  );
}
