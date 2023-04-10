import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {React, useState} from 'react';

const ExpenseItem = (props) => {

    const [item_title, set_item_title] = useState(props.title);

    const btn_click_handler = () => {
        set_item_title("New Title");
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{item_title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={btn_click_handler}>Edit</button>
        </Card>
    );
}

export default ExpenseItem;

