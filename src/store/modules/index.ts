import { combineReducers } from 'redux';

import emailCheck, { EmailState } from './emailCheck';
import showQnAAns, { ShowAnsState } from './showQnA_Ans';

export interface State {
  emailCheck: EmailState;
  showQnAAns: ShowAnsState;
}

export default combineReducers({ emailCheck, showQnAAns });
