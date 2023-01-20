import './App.css';
import NewItemForm from './components/NewItemForm';
import SearchForm from './components/SearchForm';
import Transactions from './components/Transactions';


function App() {
  return (
    <div className="ui raise segment">
      <div className='header'>
        <h2>The Bank of Flatiron</h2>
      </div>
      <SearchForm/>
      <NewItemForm/>
      <Transactions/>
      
    </div>
  );
}

export default App;
