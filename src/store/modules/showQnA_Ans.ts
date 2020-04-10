// 액션 타입
const SHOW_QA_ANS = 'showQnA_Ans/SHOW_QA_ANS';

// 액션 생성함수
export const clickQnA = (id: number): ClickQnA => ({
  type: SHOW_QA_ANS,
  id,
});

// // 액션 생성함수 반환값

type ClickQnA = { type: string; id: number };
type ShowAnsAction = ClickQnA;

// 초기 상태
const initState: ShowAnsState = {
  showArr: [0, 0, 0, 0, 0, 0],
};

// 스테이트 타입
export interface ShowAnsState {
  showArr: number[];
}

// 리듀서
export default function showQnAAns(
  state: ShowAnsState = initState,
  action: ShowAnsAction,
): ShowAnsState {
  const sliceArr = [0, 0, 0, 0, 0, 0];
  switch (action.type) {
    case SHOW_QA_ANS:
      if (state.showArr[action.id] === 0) {
        sliceArr[action.id] = 1;
        return {
          showArr: sliceArr,
        };
      }
      sliceArr[action.id] = 0;
      return {
        showArr: sliceArr,
      };

    default:
      return state;
  }
}
