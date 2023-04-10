import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {React, useState} from 'react';

const ExpenseItem = (props) => {
    const [new_item_title, set_new_item_title] = useState("");
    const [item_title, set_item_title] = useState(props.title);

    const txt_change_handler = (event) => {
        set_new_item_title(event.target.value);
    }
    const btn_click_handler = () => {
        set_item_title(new_item_title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{item_title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <input type='Text' onChange={txt_change_handler} value={new_item_title}/>
            <button onClick={btn_click_handler}>Edit</button>
        </Card>
    );
}

export default ExpenseItem;

