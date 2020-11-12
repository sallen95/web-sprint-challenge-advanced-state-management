import axios from 'axios';

export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIULRE = 'FETCH_SMURF_FAIULRE';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';

export const fetchSmurf = () => {
    return (dispatch) => {
        axios
            .get(`http://localhost:3333/smurfs`)
            .then((res) => {
                console.log(res);
                dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: FETCH_SMURF_FAIULRE, payload: err.message })
            })
    }
}

export const addSmurf = (smurf) => {
    return (dispatch) => {
        axios
            .post(`http://localhost:3333/smurfs`, smurf)
            .then((res) => {
                console.log(res)
                dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}