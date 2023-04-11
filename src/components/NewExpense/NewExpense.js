import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {

    const get_expense_form_data = (form_data) => {
        console.log(form_data);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm expense_form_data = {get_expense_form_data}/>
        </div>
    );
}

export default NewExpense;
