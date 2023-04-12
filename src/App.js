import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const App = () => {

  let expenses = [
    {
      id: 'e1',
      date : new Date(2022, 11, 27),
      title: 'Car Insurence',
      amount: 350
    },
    {
      id: 'e2',
      date : new Date(2022, 11, 31),
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

  const form_data = (props) => {
    console.log(props);
  }
 
  return (
    <div>
      <NewExpense send_form_data={form_data}/>
      <Expenses items={ expenses }></Expenses>
    </div>
  );
}

export default App;

