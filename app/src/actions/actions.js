import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_BEACHES = 'UPDATE_BEACHES';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios.get('https://cors-anywhere.herokuapp.com/http://hawaiibeachsafety.com/rest/conditions.json')
        .then(res => {
            console.log(res);
            dispatch({
                type: UPDATE_BEACHES,
                payload: res
            })
        })
        .catch(err => {
            console.log('Error fetching data from API', err)
            dispatch({
                type: SET_ERROR,
                payload: `Oops! There was an error getting data: ${err}`
            })
        })
}