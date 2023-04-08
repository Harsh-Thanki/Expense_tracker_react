import ExpenseItem from "./components/ExpenseItem";

function App() {

  let expenseDate = new Date(2022, 12, 27);
  let expenseTitle = "Car Insurence";
  let expenseAmount = 350;

  return (
    <div>
      <h1>List of Expenses</h1>
      <ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmount}/>
    </div>
  );
}

export default App;

