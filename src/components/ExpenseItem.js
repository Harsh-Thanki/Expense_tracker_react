import './ExpenseItem.css';

function ExpenseItem(){
    return (
        <div className='expense-item'>
            <div>Nov 20th 2022</div>
            <div className='expense-item__description'>
                <h2>Car Insurence</h2>
                <div className='expense-item__price'>$350</div>
            </div>
        </div>
    );
}

export default ExpenseItem;