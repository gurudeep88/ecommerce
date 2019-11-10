import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import productList from './Components/ProductList';
import Details from './Components/Details';
import Default from './Components/Default';
import Cart from './Components/Cart';
import Aboutus from './Components/Aboutus';
import His from './Components/His';
import Hers from './Components/Hers';


function App() {
  return (
    <React.Fragment> 
      <Navbar />
      <Switch>
        <Route exact path="/" component={productList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path='/his' component={His} />
        <Route path='/hers' component={Hers} />
        
        <Route component={Default} />
      </Switch>
      
    </React.Fragment>
  );
}

export default App;
