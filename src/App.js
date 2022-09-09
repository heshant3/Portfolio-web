import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './Css/App.css';                                         
import Home from './Component/Home';
import About from './Component/About';
import Works from './Component/Works';
import Error from './Component/Error';
import List from './Component/List';
import Footer from './Component/Footer';

const App=()=>{
  return(
    <>
    <List/>
   <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/works" component={Works}/>
    <Route path="/about" component={About}/>
    <Route component={Error}/>
   </Switch>


    </>
  )
}
export default App;