import './App.css';
import Home from './Components/Home';
import { GET_TRENDING } from './Api';

function App() {

  GET_TRENDING();

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
