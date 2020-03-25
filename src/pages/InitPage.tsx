import React from 'react';
import InitPageHeader from '../components/InitPage/InitPageHeader';
import InitPageContent from '../components/InitPage/InitPageContent';

export default function InitPage(): JSX.Element {
  return (
    <div className="InitPage">
      <InitPageHeader />
      <InitPageContent />
    </div>
  );
}
