const initialState = {
    token: null,
    restaurants: [],
    me: {},
    usercomments: {},
    userreviews: {},
    userrestaurants: {},
};

const reducer = (state = initialState, action) => {
     switch (action.type) {
         case 'SIGNIN':
             console.log("in the reducer");
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
         default:
             return state;
     }
}

export default reducer;
