import React from 'react';

import LoginPageMain from '../components/LoginPage/LoginPageMain';
import LoginPageFooter from '../components/LoginPage/LoginPageFooter';

export default function LoginPage(): JSX.Element {
  return (
    <div className="LoginPage">
      <LoginPageMain />
      <LoginPageFooter />
    </div>
  );
}
