import React from 'react';

import { TextField } from '@material-ui/core';

interface Props {
  handleInput: Function;
  email: string;
}

export default function InitPageEmailInput(props: Props): JSX.Element {
  const { handleInput, email } = props;

  return (
    <div className="InitPageEmailInput">
      <form className="InitPageEmailInput_form">
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
      </form>

      <button type="button" className="emailInputBtn">
        30일 무료 이용 &gt;
      </button>
    </div>
  );
}
