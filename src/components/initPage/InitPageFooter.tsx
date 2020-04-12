import React from 'react';

import InitPageFooterSelectContainer from '../../containers/InitPageFooterSelectContainer';

export default function InitPageFooter(): JSX.Element {
  return (
    <div className="InitPageFooter">
      <div className="footer_contents">
        <div className="contents_title">질문이 있으신가요? 고객센터에 문의하세요.</div>
        <div className="contents_col">
          <div className="col_1">
            <span>자주 묻는 질문</span>
            <span>투자정보(IR)</span>
            <span>개인 정보</span>
            <span>속도 테스트</span>
          </div>
          <div className="col_2">
            <span>고객 센터</span>
            <span>입사 정보</span>
            <span>쿠키 설정</span>
            <span>법적 고지</span>
          </div>
          <div className="col_3">
            <span>계정</span>
            <span>Netflix 지원 디바이스</span>
            <span>회사 정보</span>
            <span>Netflix 오리지널</span>
          </div>
          <div className="col_4">
            <span>미디어 센터</span>
            <span>이용 약관</span>
            <span>문의 하기</span>
            <span> </span>
          </div>
        </div>
        <InitPageFooterSelectContainer />
      </div>
    </div>
  );
}
