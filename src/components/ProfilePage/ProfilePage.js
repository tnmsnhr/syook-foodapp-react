import React,{Component} from 'react'
import FoodCard from '../FoodCard/FoodCard';
import {connect} from 'react-redux';
import {addItem, fetchItems} from '../../store/actions/foodActions';

class ProfilePage extends Component{

    state=({
        title:'',
        desc:'',
        imageURL:''
    })

    componentDidMount(){
        this.props.onFetchItems()
        this.setState({
            foodItems:this.props.foodItems
        })
    }


    foodSubmitHandler =event=>{
        event.preventDefault();

        const foodData={
            title:this.state.title,
            desc:this.state.desc,
            imageURL:this.state.imageURL,
            username:this.props.currentUser.username,
            id:Date.now(),
            date:new Date(),
            points:0,
        }
        this.props.onAddItem(foodData)

        this.setState({
            title:'',
            desc:'',
            imageURL:''
        })

    }

    inputChangeHandler=event=>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    imageHandler=e=>{
        const selected = e.target.files[0]
        const imageTypes = ['image/png','image/jpg','image/jpeg']
        console.log(e.target.files[0])
        let reader= new FileReader();
        reader.readAsDataURL(selected)

        reader.onload=()=>{
            if(reader.readyState==2){
                this.setState({
                    imageURL:reader.result
                })
            }
        }
    }

    render(){
        console.log(this.props.currentUser)
        return (
            <div className="profile-page__container margin-top-xl">
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="profile__tab">
                            <div className="profile__heading margin-bottom-lg">
                                <h2>Contribute to poll</h2>
                                <span className="heading-bar">&nbsp;</span>
                            </div>
    
                            <div className="new__entry--area">
                                <form onSubmit={this.foodSubmitHandler}>
                                    <div className="form__group">
                                        <input type="text" placeholder="Enter food name" required onChange={this.inputChangeHandler} value={this.state.title} id="title"/>
                                    </div>
                                    <div className="form__group">
                                        <textarea placeholder="Describe your food" required onChange={this.inputChangeHandler} value={this.state.desc} id="desc"></textarea>
                                    </div>
                                    <div className="form__group">
                                        <input type="file" onChange={this.imageHandler}/>
                                    </div>
                                    <div className="form__group">
                                        <button className="btn btn-primary btn-full" type='submit'>Submit</button>
                                        <img src={this.state.imageURL}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-2-of-3">
                        <div className="profile__heading margin-bottom-lg">
                            <h2>My submission</h2>
                            <span className="heading-bar">&nbsp;</span>
                        </div>
                        <div>
                            {this.props.foodItems.map(item=>{
                                if(item.username==this.props.currentUser.username){
                                    return (<div className="col-1-of-2" key={item.id}><FoodCard foodData={item} actionButton='mod'/></div>)
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1-of-1">
                        <div className="profile__heading margin-top-lg">
                            <h2>How your votes are doing?</h2>
                            <span className="heading-bar">&nbsp;</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-1-of-3"><FoodCard /></div>
                    <div className="col-1-of-3"><FoodCard /></div>
                    <div className="col-1-of-3"><FoodCard /></div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        loading: state.food.loading,
        foodItems: state.food.foodItems,
        currentUser: state.user.currentUser
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onAddItem: (foodData)=>dispatch(addItem(foodData)),
        onFetchItems: ()=>dispatch(fetchItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
