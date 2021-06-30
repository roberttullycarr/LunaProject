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