export const GET_PB = 'word-frequency-analyzer/wordFrequency/GET_PB';
export const GET_PB_SUCCESS = 'word-frequency-analyzer/wordFrequency/GET_PB_SUCCESS';
export const GET_PB_FAIL = 'word-frequency-analyzer/wordFrequency/GET_PB_FAIL';

const initialState = {
  analyzedData : {}
};

export default function wordFrequency(state = initialState, action){
  return state;
};

export function getPb({kdbName, pbId}) {
  return{
    type: [GET_PB, GET_PB_SUCCESS, GET_PB_FAIL],
    promise: (fetch) => fetch(`https://api.dharma-treasure.org/kdbs/${kdbName}/pbs/${pbId}`)
    .then((response)=>{
      if (response.ok){
        return response.json();
      }
      return Promise.reject(response);
    })
  }
}
