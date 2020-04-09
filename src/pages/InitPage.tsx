import React from 'react';

import InitPageMain from '../components/initPage/IntiPageMain';
import InitPageContents from '../components/initPage/InitPageContents';
import InitPageQnA from '../components/initPage/InitPageQnA';
import InitPageFooter from '../components/initPage/InitPageFooter';

export default function InitPage(): JSX.Element {
  return (
    <div className="InitPage">
      <InitPageMain />
      <InitPageContents />
      <InitPageQnA />
      <InitPageFooter />
    </div>
  );
}
