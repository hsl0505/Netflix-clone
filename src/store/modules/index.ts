import { combineReducers } from 'redux';

import emailCheck, { EmailState } from './emailCheck';

export interface State {
  emailCheck: EmailState;
}

export default combineReducers({ emailCheck });
