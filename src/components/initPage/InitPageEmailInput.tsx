import React from 'react';

import { TextField } from '@material-ui/core';

interface Props {
  handleInput: Function;
  email: string;
  errMsg: string;
}

export default function InitPageEmailInput(props: Props): JSX.Element {
  const { handleInput, email, errMsg } = props;

  return (
    <div
      className="InitPageEmailInput"
      style={{ marginBottom: errMsg === '정확한 이메일을 입력하세요' ? '1.5rem' : '' }}
    >
      <div className="InitPageEmailInput_form">
        <TextField
          label="이메일 주소"
          multiline
          variant="filled"
          className="emailInput"
          InputProps={{ disableUnderline: true }}
          type="email"
          onChange={(e): void => handleInput(e.target.value)}
          value={email}
        />
        <div className="errMsg">{errMsg === '정확한 이메일을 입력하세요' ? errMsg : ''}</div>
      </div>

      <button type="button" className="emailInputBtn">
        30일 무료 이용 &gt;
      </button>
    </div>
  );
}
