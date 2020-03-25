import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

export default class InitPageEmailInput extends Component {
  render(): JSX.Element {
    return (
      <div className="InitPageEmailInput">
        <TextField
          id="InitPageEmailInput"
          label="이메일"
          placeholder=""
          multiline
          variant="filled"
          className="inputBox"
          InputProps={{ disableUnderline: true }}
        />
        <Button variant="text" className="inputBtn">
          30일 무료 이용 &gt;
        </Button>
      </div>
    );
  }
}
