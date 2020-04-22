import React from 'react';
import { Link } from 'react-router-dom';

import LoginBox from './LoginBox';

export default function LoginPageMain(): JSX.Element {
  return (
    <div className="LoginPageMain">
      <Link to="/" className="LoginPageMain_link">
        <div className="logo">NETFLIX</div>
      </Link>
      <LoginBox />
    </div>
  );
}
