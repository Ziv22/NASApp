import { usePromiseTracker } from "react-promise-tracker";
import { BrowserRouter as Router} from 'react-router-dom'
import Container  from './components/Container'
import NavBar     from './components/NavBar';
import React      from 'react';
import './App.css';

function App() {
  const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
      return (
        promiseInProgress &&
       <img src= "../assets/circle.png" alt=""/>
     );  
}
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <LoadingIndicator/>
        <Container/>
      </Router>
    </div>
  );
}

export default App;
