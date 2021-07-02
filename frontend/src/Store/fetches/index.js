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
export const fetchUserProfileData = async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    // fetch user's data
    const url = 'me/';
    const response = await Axios.get(url, config);
    dispatch({ type: 'USER_DATA', payload: response.data[0]});
};

export const fetchSingleUser = userId  => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `users/${userId}/`;
    const response = await Axios.get(url, config);
    dispatch({type: 'SINGLEUSER', payload: response.data});
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

export const fetchReviewsOfRestaurant = async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    // gets the url-ending from the window object
    const path = window.location.pathname
    // matches the url-ending for a number sequence
    const match = path.match(/(\d+)/)[0]

    const url = `reviews/restaurant/${match}/`;
    const response = await Axios.get(url, config);
    dispatch({type: 'REVIEWSOFRESTAURANT', payload: response.data});
};

export const searchRestaurants = async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    // fetch user's data
    const url = 'search/?search=&type=restaurants';
    const response = await Axios.get(url, config);
    dispatch({ type: 'HEADER', payload: 'restaurants'});
    dispatch({ type: 'SEARCH_RESULTS_RESTAURANTS', payload: response.data});
};

export const searchReviews = async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    // fetch user's data
    const url = 'search/?search=&type=reviews';
    const response = await Axios.get(url, config);
    dispatch({ type: 'HEADER', payload: 'reviews'});
    dispatch({ type: 'SEARCH_RESULTS_REVIEWS', payload: response.data});
};

export const searchUsers = async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    // fetch user's data
    const url = 'search/?search=&type=Users';
    const response = await Axios.get(url, config);
    dispatch({ type: 'HEADER', payload: 'users'});
    dispatch({ type: 'SEARCH_RESULTS_USERS', payload: response.data});
};
