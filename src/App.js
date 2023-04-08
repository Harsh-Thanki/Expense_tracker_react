import ExpenseItem from "./components/ExpenseItem";

function App() {

  let expenses = [
    {
      id: 'e1',
      date : new Date(2022, 12, 27),
      title: 'Car Insurence',
      amount: 350
    },
    {
      id: 'e2',
      date : new Date(2022, 12, 31),
      title: 'Shopping for New Year',
      amount: 10000
    },
    {
      id: 'e3',
      date : new Date(2023, 1, 5),
      title: 'Mountain-view Trip',
      amount: 2500
    },
    {
      id: 'e4',
      date : new Date(2023, 1, 10),
      title: 'Flight Ticket',
      amount: 750
    },
    {
      id: 'e5',
      date : new Date(2023, 1, 11),
      title: 'Food shopping',
      amount: 210
    }
  ];
 
  return (
    <div>
      <h1>List of Expenses</h1>
      <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}/>
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}/>
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount}/>
      <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount}/>
      <ExpenseItem date={expenses[4].date} title={expenses[4].title} amount={expenses[4].amount}/>
    </div>
  );
}

export default App;

