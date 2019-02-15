import React, {Fragment} from 'react';

const ToDoList = (props) => {

    //let {items} = props
    var handleRemoveItem = (index)=> props.removeItem(index)

    return (
            <ul>
            {props.items.map((item, index)=>{
                return(
                
                        <li key={index}>{item} --- <button onClick={handleRemoveItem.bind(null,index)}>x</button></li>
                )
            })}
            
            </ul>
    )
};

export default ToDoList;