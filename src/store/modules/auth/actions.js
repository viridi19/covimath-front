export function fetchRequest(city) {
  return {
    type: '@city/FETCH_REQUEST',
    payload: { city },
  };
}

export function fetchSuccess(list) {
  return {
    type: '@city/FETCH_SUCCESS',
    payload: { list },
  };
}

export function fetchFailure() {
  return {
    type: '@city/FETCH_FAILURE',
  };
}

export function selectDiff(diff) {
  return {
    type: '@city/SELECT_DIFF',
    payload: { diff }
  };
}
