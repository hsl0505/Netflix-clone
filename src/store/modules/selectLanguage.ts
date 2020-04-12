// 액션 타입
const SELECT_LANGUAGE = 'selectLanguage/SELECT_LANGUAGE';

// 액션 생성 함수
export const changeLanguage = (language: string): ChangeLanguage => ({
  type: SELECT_LANGUAGE,
  language,
});

// // 액션 생성함수 반환값
type ChangeLanguage = { type: string; language: string };
type ChangeLanguageAction = ChangeLanguage;

// 초기 상태
const initState: LanguageState = {
  language: '한국어',
};

// // 스테이트 타입
export interface LanguageState {
  language: string;
}

// 리듀서
export default function selectLanguage(
  state: LanguageState = initState,
  action: ChangeLanguageAction,
): LanguageState {
  switch (action.type) {
    case SELECT_LANGUAGE:
      if (action.language === 'English') {
        return {
          language: 'English',
        };
      }
      return {
        language: '한국어',
      };
    default:
      return state;
  }
}
