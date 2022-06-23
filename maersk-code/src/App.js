import React from 'react';
import './App.css';
import ShuffleHome from './ShuffleHome';
import { Switch,Route} from 'react-router-dom'


const App=()=> {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={ShuffleHome}/>
      </Switch>
    </div>
  );
}

export default App;
