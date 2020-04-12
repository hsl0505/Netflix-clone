import React from 'react';
import { FormControl, Select, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';

interface Props {
  handleChange: Function;
  language: string;
}

export default function InitPageFooterSelect(props: Props): JSX.Element {
  const { handleChange, language } = props;
  return (
    <div className="InitPageFooterSelect">
      <FormControl className="temp" variant="outlined">
        <Select displayEmpty value="" onChange={(e): void => handleChange(e.target.value)}>
          <MenuItem value="" disabled className="temp3">
            <div className="temp2">
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={language} />
            </div>
          </MenuItem>
          <MenuItem value="한국어">한국어</MenuItem>
          <MenuItem value="English">English</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
