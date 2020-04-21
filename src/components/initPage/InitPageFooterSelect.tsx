import React from 'react';

import LanguageIcon from '@material-ui/icons/Language';

interface Props {
  handleChange: Function;
  language: string;
}

export default function InitPageFooterSelect(props: Props): JSX.Element {
  const { handleChange, language } = props;
  return (
    <div className="InitPageFooterSelect">
      <LanguageIcon className="select_icon" />
      <select
        className="select_box"
        value={language}
        onChange={(e): void => handleChange(e.target.value)}
      >
        <option value="한국어">한국어</option>
        <option value="English">English</option>
      </select>
      <div className="select_arrow" />
    </div>
  );
}
