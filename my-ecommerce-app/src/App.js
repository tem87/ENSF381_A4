import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './component/Homepage'; // Assuming Homepage component file location
//import ProductsPage from './component/ProductsPage'; // Import other page components if needed
//import LoginPage from './component/LoginPage';



const App = () => {
  return (
    <Router>
      <div>
        {/* Header and other common components can be included here */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* Add more routes for other pages if needed */}
        </Switch>
        {/* Footer and other common components can be included here */}
      </div>
    </Router>
  );
};

export default App;
