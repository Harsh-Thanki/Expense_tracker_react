import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [form_title, form_title_change] = useState('');
    const [form_amount, form_amount_change] = useState('');
    const [form_date, form_date_change] = useState('');

    const title_change_handler = (event) => {
        form_title_change(event.target.value);
    };
    const amount_change_handler = (event) => {
        form_amount_change(event.target.value);
    };
    const date_change_handler = (event) => {
        form_date_change(event.target.value);
    };
    const form_submit_handler = (event) => {
        event.preventDefault();

        const form_data = {
            title: form_title,
            amount: form_amount,
            date: new Date(form_date)
        }
        console.log(form_data);
        props.expense_form_data(form_data);

        form_title_change('');
        form_amount_change('');
        form_date_change('');
    };

    return (
        <form onSubmit={form_submit_handler}>
            <div className='new-expense__controls'>
                <div className='expense__control'>
                    <label>Title</label>
                    <input type='text' value={form_title} onChange={title_change_handler}/>
                </div>
                <div className='expense__control'>
                    <label>Amount</label>
                    <input type='number'min='0.01' step='0.01' value={form_amount} onChange={amount_change_handler}/>
                </div>
                <div className='expense__control'>
                    <label>Date</label>
                    <input type='date' value={form_date} onChange={date_change_handler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
