import React, { useState, useEffect } from 'react';
import {Switch,Route} from 'react-router-dom';
import './Css/App.css';                                         
import Home from './Component/Home';
import About from './Component/About';
import Works from './Component/Works';
import Error from './Component/Error';
import List from './Component/List';
import Footer from './Component/Footer';

const App=()=>{

  const App = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

  return(
    <div className='Appc'>

{loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (

    <List/>
   <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/works" component={Works}/>
    <Route path="/about" component={About}/>
    <Route component={Error}/>
   </Switch>

 )}
    </div>
  )
}
export default App;