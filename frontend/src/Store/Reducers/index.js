const initialState = {
    token: null,
    restaurants: [],
    userData: [],
    searchResultRest: [],
    searchResultUsers: [],
};

const reducer = (state = initialState, action) => {
     switch (action.type) {
         case 'SIGNIN':
             console.log("in the reducer");
             return {...state, token: action.payload};
         case 'RESTAURANTS':
             return {...state, restaurants: action.payload};
         case 'USER_DATA':
             return {...state, userData: action.payload};
         case 'SEARCH_RESULTS_REST':
            return { ...state, searchResultRest: action.payload };
         case 'SEARCH_RESULTS_USERS':
            return { ...state, searchResultUsers: action.payload };
         default:
             return state;
     }
}

export default reducer;
