// 액션 타입
const CHANGE_EMAIL_INPUT = 'emailChcek/CHANGE_EMAIL_INPUT';

// 액션 생성함수
export const changeEmailInput = (email: string): ChangeEmailInput => ({
  type: CHANGE_EMAIL_INPUT,
  email,
});

// // 액션 생성함수 별 반환값 정의
type ChangeEmailInput = { type: string; email: string };
type EmailCheckAction = ChangeEmailInput;

// 초기상태
const initState: EmailState = {
  email: '',
  errMsg: '',
};

// // 스테이트 타입 정의
export interface EmailState {
  email: string;
  errMsg: string;
}

// 리듀서
export default function emailCheck(
  state: EmailState = initState,
  action: EmailCheckAction,
): EmailState {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  switch (action.type) {
    case CHANGE_EMAIL_INPUT:
      if (action.email.match(regExp)) {
        return {
          email: action.email,
          errMsg: 'clear',
        };
      }
      return {
        email: action.email,
        errMsg: '정확한 이메일을 입력하세요',
      };
    default:
      return state;
  }
}
