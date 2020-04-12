import { combineReducers } from 'redux';

import emailCheck, { EmailState } from './emailCheck';
import showQnAAns, { ShowAnsState } from './showQnA_Ans';
import selectLanguage, { LanguageState } from './selectLanguage';

export interface State {
  emailCheck: EmailState;
  showQnAAns: ShowAnsState;
  selectLanguage: LanguageState;
}

export default combineReducers({ emailCheck, showQnAAns, selectLanguage });
