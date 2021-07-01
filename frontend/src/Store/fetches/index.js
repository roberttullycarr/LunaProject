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

export const fetchSingleRestaurant = async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    // gets the url-ending from the window object
    const path = window.location.pathname
    // matches the url-ending for a number sequence
    const match = path.match(/(\d+)/)[0]

    const url = `restaurants/${match}/`;
    const response = await Axios.get(url, config);
    dispatch({type: 'SINGLERESTAURANT', payload: response.data});
};