import produce from 'immer';

const INITIAL_STATE = {
  list: [],
  city: null,
  diff: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@city/FETCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@city/FETCH_SUCCESS': {
        draft.list = action.payload.list;
        draft.city = action.payload.city;
        draft.loading = false;
        break;
      }
      case '@city/FETCH_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@city/SELECT_CITY': {
        draft.city = action.payload.city;
        break;
      }
      case '@city/SELECT_DIFF': {
        draft.diff = action.payload.diff;
        break;
      }
      default:
    }
  });
}
