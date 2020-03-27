import React from 'react';
import InitPageHeader from '../components/InitPage/InitPageHeader';
import InitPageContent from '../components/InitPage/InitPageContent';
import InitPageQnA from '../components/InitPage/InitPageQnA';

export default function InitPage(): JSX.Element {
  return (
    <div className="InitPage">
      <InitPageHeader />
      <InitPageContent />
      <InitPageQnA />
    </div>
  );
}
