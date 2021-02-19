import * as actionTypes from './actionTypes';

const addItemStart=()=>{
    return {
        type:actionTypes.ADD_FOOD_ITEM_START
    }
}

const addItemSuccess=foodData=>{
    return {
        type:actionTypes.ADD_FOOD_ITEM_SUCCESS,
        foodData:foodData
    }
}

export const addItem=foodData=>{

    return dispatch=>{

        dispatch(addItemStart())

        let allfoods=localStorage.getItem("foodData")
        let userFoods=localStorage.getItem("userFoods")

        if(!allfoods){
            const allFood=[{...foodData}];
            localStorage.setItem("foodData",JSON.stringify(allFood))
        }else {
            const allFood=[...JSON.parse(allfoods),foodData];
            localStorage.setItem("foodData",JSON.stringify(allFood))
        }
        
        
        dispatch(addItemSuccess(foodData))
    }
}

const fetchItemStart=()=>{
    return {
        type:actionTypes.FETCH_FOOD_ITEM_START
    }
}

const fetchItemSuccess=allFoods=>{
    return {
        type:actionTypes.FETCH_FOOD_ITEM_SUCCESS,
        allFoods:allFoods
    }
}

export const fetchItems=()=>{

    return dispatch=>{
        dispatch(fetchItemStart())

        let allfoods=localStorage.getItem("foodData")
        dispatch(fetchItemSuccess(JSON.parse(allfoods)))

    }
}

const voteSuccess=(voteData)=>{
    return {
        type:actionTypes.VOTE_SUCCESS,
        voteData
    }
}

export const vote=(id,point)=>{
    return dispatch=>{
        const voteData=new Map(JSON.parse(localStorage.getItem('myVote')))
        if(voteData.size==0){
            voteData.set(`${point}`,id)
            localStorage.setItem('myVote',JSON.stringify([...voteData]))
        }else {
            if(voteData.has(point)){
                voteData.delete(point)
                localStorage.setItem('myVote',JSON.stringify([...voteData]))
            }else {
                voteData.set(`${point}`,id)
                localStorage.setItem('myVote',JSON.stringify([...voteData]))
            }
        }

        dispatch(voteSuccess(voteData))
    }
}

export const fetchVotes=()=>{
    return dispatch=>{
        const voteData=new Map(JSON.parse(localStorage.getItem('myVote')))
        dispatch(voteSuccess(voteData))
    }
}