export function fetchRequest(name) {
  return {
    type: '@city/FETCH_REQUEST',
    payload: { name },
  };
}

export function fetchSuccess(city, list) {
  return {
    type: '@city/FETCH_SUCCESS',
    payload: { city, list },
  };
}

export function fetchFailure() {
  return {
    type: '@city/FETCH_FAILURE',
  };
}

export function selectCity(city) {
  return {
    type: '@city/SELECT_CITY',
    payload: { city }
  };
}


export function selectDiff(diff) {
  return {
    type: '@city/SELECT_DIFF',
    payload: { diff }
  };
}
