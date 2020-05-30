import React from 'react';
import { Switch,Route} from 'react-router-dom'

import NavBar from '../NavBar';
import Home from '../Home';
import Checkout from '../Checkout';

const App = ()=>{

  return(
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component ={Home} />
        <Route exact path='/checkout' component ={Checkout} />

      </Switch>
    </div>
  )
}

export default App
