import Axios from "../Axios/index"

export const fetchRestaurants = async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = 'restaurants/';
    const response = await Axios.get(url, config);
    console.log(response);
    dispatch({type: 'RESTAURANTS', payload: response.data});
};

export const fetchUserMe = async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = 'me/';
    const response = await Axios.get(url, config);
    console.log(response);
    dispatch({type: 'ME', payload: response.data});
}

export const fetchUserComments = (id) => async (dispatch) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `review/comment/${id}/`;
    const response = await Axios.get(url, config);
    console.log(response);
    dispatch({type: 'USERCOMMENTS', payload: response.data});
}