import React from 'react';
import { Link } from 'react-router-dom';

import InitPageEmailInputContainer from '../../containers/InitPageEmailInputContainer';

export default function IntiPageMain(): JSX.Element {
  return (
    <div className="InitPageMain">
      <div className="header">
        <div className="logo">NETFLIX</div>
        <Link to="/login" className="loginLink">
          <button type="button" className="loginBtn">
            로그인
          </button>
        </Link>
      </div>

      <div className="mainText">
        <div className="mainText_1">영화, TV 프로그램을 무제한으로.</div>
        <div className="mainText_2">
          다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
        </div>
        <InitPageEmailInputContainer />
        <div className="mainText_3">
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
        </div>
      </div>
    </div>
  );
}
