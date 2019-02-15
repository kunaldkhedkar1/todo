import React , {Component, Fragment} from 'react'
import {connect} from 'react-redux'
export default class InputItem extends Component{
    constructor(props){
        super(props)
        this.state ={
            text:'',
            isCompleted: false
        }
    }
    
    handleChange = (e) =>{
        this.setState({text:e.target.value})
    }

    handleClick = () => {
        this.props.addItem(this.state.text)
        this.setState({text:''})
    };

    render(){
        return (
            <Fragment>
                <h3>ToDo List</h3>
                 <input type="text" value={this.state.text} onChange={this.handleChange}/>
                 <button onClick={this.handleClick}>Add TODO</button>
            </Fragment>
        )
    }
}

