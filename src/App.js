import { BrowserRouter as Router} from 'react-router-dom'
import Container  from './components/Container'
import NavBar     from './components/NavBar';
import React      from 'react';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
            <NavBar/>
            <Container/>
        </div>
      </Router>
  );
}

export default App;
