// 액션 타입
const CHANGE_EMAIL_INPUT = 'emailChcek/CHANGE_EMAIL_INPUT';

// 액션 생성함수
export const changeEmailInput = (emailUp: string, emailDown: string): ChangeEmailInput => ({
  type: CHANGE_EMAIL_INPUT,
  emailUp,
  emailDown,
});

// // 액션 생성함수 별 반환값 정의
type ChangeEmailInput = { type: string; emailUp: string; emailDown: string };
type EmailCheckAction = ChangeEmailInput;

// 초기상태
const initState: EmailState = {
  emailUp: '',
  emailDown: '',
  errMsgUp: '',
  errMsgDown: '',
};

// // 스테이트 타입 정의
export interface EmailState {
  emailUp: string;
  emailDown: string;
  errMsgUp: string;
  errMsgDown: string;
}

// 리듀서
export default function emailCheck(
  state: EmailState = initState,
  action: EmailCheckAction,
): EmailState {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  switch (action.type) {
    case CHANGE_EMAIL_INPUT:
      if (action.emailDown === 'up') {
        if (action.emailUp === '') {
          return {
            ...state,
            emailUp: action.emailUp,
            errMsgUp: '',
          };
        }
        if (action.emailUp.match(regExp)) {
          return {
            ...state,
            emailUp: action.emailUp,
            errMsgUp: 'clear',
          };
        }
        return {
          ...state,
          emailUp: action.emailUp,
          errMsgUp: '정확한 이메일을 입력하세요',
        };
      }

      if (action.emailUp === 'down') {
        if (action.emailDown === '') {
          return {
            ...state,
            emailDown: action.emailDown,
            errMsgDown: '',
          };
        }
        if (action.emailDown.match(regExp)) {
          return {
            ...state,
            emailDown: action.emailDown,
            errMsgDown: 'clear',
          };
        }
        return {
          ...state,
          emailDown: action.emailDown,
          errMsgDown: '정확한 이메일을 입력하세요',
        };
      }

      return state;

    default:
      return state;
  }
}
