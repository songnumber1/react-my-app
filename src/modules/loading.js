// 액션 타입
const ISLOADING = 'ISLOADING';

// 액션 생성 함수
export const isloading = () => ({ type: ISLOADING });

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = {
  isLoading: false
};

export default function loading(state = initialState, action) {
  switch (action.type) {
    case ISLOADING:
      console.log('1234', action.payload);
      return (state = action.payload);

    default:
      return state;
  }
}
