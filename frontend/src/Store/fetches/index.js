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

export const fetchUserProfileData = async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    // fetch user's data
    const url = 'me/';
    const response = await Axios.get(url, config);
    dispatch({ type: 'USER_DATA', payload: response.data[0]});
};

export const searchRestaurants = async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    // fetch user's data
    const url = 'restaurants/?search=';
    const response = await Axios.get(url, config);
    dispatch({ type: 'SEARCH_RESULTS_REST', payload: response.data});
};