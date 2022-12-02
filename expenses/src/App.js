import './App.css';
import Expenses from './components/Expenses';
import ImputExpenses from './components/ImputExpenses';


function App() {
  return (
    <div className="main">
      <h1>Transactions</h1>
      <ImputExpenses/>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
