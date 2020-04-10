import React from 'react';
import tvImg from '../../asset/init_tv.png';
import phoneImg from '../../asset/init_phone.png';
import deviceImg from '../../asset/init_device.png';

export default function InitPageContents(): JSX.Element {
  return (
    <div className="InitPageContents">
      <div className="content_tv">
        <div className="tv_text">
          <div className="tv_text1">TV로 즐기세요.</div>
          <div className="tv_text2">
            스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한
            디바이스에서 시청하세요.
          </div>
        </div>
        <img className="tv_img" src={tvImg} alt="" />
      </div>

      <div className="content_phone">
        <img className="phone_img" src={phoneImg} alt="" />
        <div className="phone_text">
          <div className="phone_text1">즐겨 보는 콘텐츠를 저장해 이동 중에도 시청하세요.</div>
          <div className="phone_text2">오프라인으로 즐기고 데이터를 절약하세요.</div>
        </div>
      </div>

      <div className="content_device">
        <div className="device_text">
          <div className="device_text1">다양한 디바이스에서 시청하세요.</div>
          <div className="device_text2">
            각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.
            추가 요금이 전혀 없습니다.
          </div>
        </div>
        <img className="device_img" src={deviceImg} alt="" />
      </div>
    </div>
  );
}
