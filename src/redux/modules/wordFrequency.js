export const GET_PB = 'word-frequency-analyzer/wordFrequency/GET_PB';
export const GET_PB_SUCCESS = 'word-frequency-analyzer/wordFrequency/GET_PB_SUCCESS';
export const GET_PB_FAIL = 'word-frequency-analyzer/wordFrequency/GET_PB_FAIL';

export const SET_ANALYZED_DATA = 'word-frequency-analyzer/wordFrequency/SET_ANALYZED_DATA'

const initialState = {
  analyzedData : {}
};

export default function wordFrequency(state = initialState, action){
  switch (action.type) {
    case SET_ANALYZED_DATA:
      return {analyzedData: action.analyzedData};
    default:
      return state;
  }
};

export function setAnalyzedData(analyzedData) {
  return {
    type: SET_ANALYZED_DATA,
    analyzedData
  }
}

export function getPb({kdbName, pbId}) {
  return {
    types: [GET_PB, GET_PB_SUCCESS, GET_PB_FAIL],
    promise: (fetch) => fetch(`https://api.dharma-treasure.org/kdbs/${kdbName}/pbs/${pbId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
  };
}
