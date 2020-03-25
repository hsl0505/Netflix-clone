import React from 'react';
import tvImg from '../../asset/init_tv.png';
import phoneImg from '../../asset/init_phone.png';
import deviceImg from '../../asset/init_device.png';

export default function InitPageContent(): JSX.Element {
  return (
    <div className="InitPageContent">
      <div className="tv">
        <div className="tv_text">
          <div className="text1">TV로 즐기세요.</div>
          <div className="text2">
            스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한
            디바이스에서 시청하세요.
          </div>
        </div>
        <img src={tvImg} alt="" className="tv_img" />
      </div>

      <div className="phone">
        <img src={phoneImg} alt="" className="phone_img" />
        <div className="phone_text">
          <div className="text1">즐겨 보는 콘텐츠를 저장해 이동 중에도 시청하세요.</div>
          <div className="text2">오프라인으로 즐기고 데이터를 절약하세요.</div>
        </div>
      </div>

      <div className="device">
        <div className="device_text">
          <div className="text1">다양한 디바이스에서 시청하세요.</div>
          <div className="text2">
            각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.
            추가 요금이 전혀 없습니다.
          </div>
        </div>
        <img src={deviceImg} alt="" className="device_img" />
      </div>
    </div>
  );
}
