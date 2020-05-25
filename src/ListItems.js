import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function ListItems(props){
    const items = props.items;
    const handleEdit = props.handleEdit;
    const deleteItem = props.deleteItem;
    const listItems = items.map(item =>
   {
       return( 
           <div className="list" key= {item.key} >
                <p>{item.text}
                    <span>
                        <FontAwesomeIcon className='faicons' icon="trash" onClick={ () => {props.deleteItem(item.key)}} />
                        <FontAwesomeIcon className='faicons1' icon={faPencilAlt} onClick={ () => {handleEdit(item.key)}}/>   
                    </span>
                </p>
            </div>
            )
    })
        

    return(
            <div>{listItems}</div>
        )
}
export default ListItems;