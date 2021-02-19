import * as actionTypes from '../actions/actionTypes';

const initialState={
    currentUser:{},
    userEntries:[],
    userVoted:[],
    loginSuccess:false
}

const reducer=(state=initialState,action)=>{

    switch(action.type){

        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser:action.userData,
                loginSuccess:true
            }

        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                loginSuccess:false
            }
        
        default:
            return {
                ...state
            }
    }
}

export default reducer;