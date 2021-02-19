import React from 'react';
import burger from '../../images/burger.png';
import {connect} from 'react-redux';
import {vote} from '../../store/actions/foodActions';

const FoodCard = (props) => {

    const voteHandler=e=>{
        props.onVote(props.foodData.id,e.target.dataset.vote)
    }

    return (
        <div className="food-card__container">
            <div className="food__item--info margin-bottom-lg">
                <p>{props.foodData.username}</p>
                <p className="date">23rd Feb, 2020</p>
            </div>
            <div className="food__item--image margin-bottom-lg">
                <img src={props.foodData.imageURL}/>
            </div>
            <div className="food__item--details margin-bottom-lg">
                <h3 className="food__title margin-bottom-md">{props.foodData.title}</h3>
                <p className="food__desc">{props.foodData.desc}</p>
            </div>
            <div className="voting__button--area margin-top-md">
               {props.actionButton=='mod' ? 
               
               <>
                <button className="btn btn-default">Edit</button>
                <button className="btn btn-primary">Delete</button>
               </>
               
               : 
               
               <>
                    <button 
                        className={["vote-btn",(props.votedData.has('1') && props.votedData.get('1')==props.foodData.id)? 'vote-btn-active':''].join(' ')} 
                        data-vote="1" 
                        onClick={voteHandler}
                        disabled={(props.votedData.get('2')==props.foodData.id || props.votedData.get('3')==props.foodData.id)}
                        >1
                    </button>

                    <button 
                        className={["vote-btn",(props.votedData.has('2') && props.votedData.get('2')==props.foodData.id)? 'vote-btn-active':''].join(' ')} 
                        data-vote="2" 
                        onClick={voteHandler}
                        disabled={(props.votedData.get('1')==props.foodData.id || props.votedData.get('3')==props.foodData.id)}
                        >2
                    </button>

                    <button 
                        className={["vote-btn",(props.votedData.has('3') && props.votedData.get('3')==props.foodData.id)? 'vote-btn-active':''].join(' ')} 
                        data-vote="3" 
                        onClick={voteHandler}
                        disabled={(props.votedData.get('2')==props.foodData.id || props.votedData.get('1')==props.foodData.id)}
                        >3
                    </button>
                </>}
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return {

    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onVote: (id,point)=>dispatch(vote(id,point))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FoodCard)
