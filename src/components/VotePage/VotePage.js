import React,{useEffect} from 'react';
import FoodCard from '../FoodCard/FoodCard';
import {connect} from 'react-redux';
import {fetchItems, fetchVotes} from '../../store/actions/foodActions';

const VotePage = props => {

    useEffect(()=>{
        props.onFetchItems()
        props.onFetchVotes()
    },[])

    console.log(props.votedData)

    let rowContents = [];
        let contents = props.allFoodItems.reduce((acc, item, i) => {
            
            rowContents.push(<div className="col-1-of-4"><FoodCard key={item.id} foodData={item} votedData={props.votedData}/></div>);
            if (i % 4 === 3) {
                acc.push(<div className="row" key={Math.random()}>{rowContents}</div>);
                rowContents = [];
            }
            return acc;
        },[])

        contents.push(<div className="row" key={Math.random()}>{rowContents}</div>);

    return (
        <div className="votepage__container margin-top-xl">
            {contents}
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        allFoodItems:state.food.foodItems,
        votedData: state.food.votedData
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onFetchItems: ()=>dispatch(fetchItems()),
        onFetchVotes: ()=>dispatch(fetchVotes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePage)
