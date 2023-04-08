import './ExpenseDate.css'

function ExpenseDate(props){
    
    const day = props.date.toLocaleString('en-US',  {day: '2-digit'});
    const month = props.date.toLocaleString('en-US',  {month: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className='DateText'>
            {month} {day}, {year}
        </div>
    );
}

export default ExpenseDate;