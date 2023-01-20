//import logo from './logo.svg';
import './App.css';
import NewTransactionItem from './NewTransactionItem';
import SearchBar from './SearchBar';
import Transaction from './Transaction'

function App() {
  return (
    <div className="App">
      <div>
        <h1>The Bank of Flatiron</h1>
      </div>
      <NewTransactionItem />
      <SearchBar />
      <Transaction />
    </div>
  );
}

export default App;
