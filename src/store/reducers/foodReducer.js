import * as actionTypes from '../actions/actionTypes';

const initialState={
    foodItems:[],
    loading:false,
    selectedItem:{},
    votedData:new Map()
}

const reducer=(state=initialState, action)=>{

    switch(action.type){

        case actionTypes.ADD_FOOD_ITEM_SUCCESS:
            const allFoodItems = state.foodItems;
            let updatedFoodItems=[...allFoodItems, action.foodData]
            console.log(updatedFoodItems)
            return {
                ...state,
                foodItems:updatedFoodItems
            }

        case actionTypes.FETCH_FOOD_ITEM_SUCCESS:

            if(!action.allFoods){
                
                return {
                    ...state,
                    foodItems:[]
                }
            }
            return {
                ...state,
                foodItems:action.allFoods
            }

        case actionTypes.VOTE_SUCCESS:

            return {
                ...state,
                votedData:action.voteData
            }

        default:
            return state;
    }
}

export default reducer;