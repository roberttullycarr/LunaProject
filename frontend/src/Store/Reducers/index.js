const initialState = {
    token: null,
    restaurants: [],
    me: {},
    usercomments: {},
    userreviews: {},
    userrestaurants: {},
    userData: [],
    singleRestaurant: [],
    reviewsOfRestaurant: [],
    singleUser: [],
    searchResultRest: [],
    searchResultUsers: [],
    searchResultReviews: [],
    header:'',
};

const reducer = (state = initialState, action) => {
     switch (action.type) {
         case 'SIGNIN':
             return {...state, token: action.payload};
         case 'RESTAURANTS':
             return {...state, restaurants: action.payload};
         case 'ME':
             return {...state, me: action.payload};
         case 'USERCOMMENTS':
             return {...state, usercomments: action.payload};
         case 'USERREVIEWS':
             return {...state, userreviews: action.payload};
         case 'USERRESTAURANTS':
             return {...state, userrestaurants: action.payload};
         case 'USER_DATA':
             return {...state, userData: action.payload};
         case 'SINGLEUSER':
             return {...state, singleUser: action.payload};
         case 'SINGLERESTAURANT':
             return {...state, singleRestaurant: action.payload};
         case 'REVIEWSOFRESTAURANT':
             return {...state, reviewsOfRestaurant: action.payload};
         case 'SEARCH_RESULTS_RESTAURANTS':
            return { ...state, searchResultRest: action.payload };
         case 'SEARCH_RESULTS_USERS':
            return { ...state, searchResultUsers: action.payload };
         case 'SEARCH_RESULTS_REVIEWS':
            return { ...state, searchResultReviews: action.payload };
         case 'HEADER':
            return { ...state, header: action.payload };
         default:
             return state;
     }
}

export default reducer;
