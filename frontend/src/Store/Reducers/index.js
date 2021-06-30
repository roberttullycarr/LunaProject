const initialState = {
    token: null,
    restaurants: [],
    userData: [],
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
         default:
             return state;
     }
}

export default reducer;
