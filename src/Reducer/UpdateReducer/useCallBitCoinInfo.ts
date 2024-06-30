export interface ActionStateType {
  loading: boolean;
  gettingData: Record<string, any>;
  error: boolean;
}

export interface ActionType {
  type: 'START_FETCH' | 'FETCH_SUCCESS' | 'FETCH_ERROR';
  payload?: any;
}

const INITIAL_OBJECT: ActionStateType = {
  loading: false,
  gettingData: {},
  error: false,
};
export { INITIAL_OBJECT };

export const useCallBitCoinInfo = (
  state: ActionStateType,
  action: ActionType,
) => {
  switch (action.type) {
    case 'START_FETCH':
      return {
        ...state,
        loading: true,
        error: false,
        gettingData: {},
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        gettingData: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: false,
        gettingData: action.payload,
      };
    default:
      return state;
  }
};
