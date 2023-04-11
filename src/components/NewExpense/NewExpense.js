import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {

    const get_expense_form_data = (form_data) => {
        const new_form_data = {
            id: Math.random().toString(),
            ...form_data
        };
        console.log(new_form_data);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm expense_form_data = {get_expense_form_data}/>
        </div>
    );
}

export default NewExpense;
