import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Correct import path for HomePage
import SneakerList from './components/SneakerList'; // Import SneakerList component
import Products from './pages/Products'; // Import Products page
import AboutUs from './pages/AboutUs'; // Correct import path for AboutUs page
import FAQs from './pages/FAQs'; // Import FAQs page
import ContactUs from './pages/ContactUs'; // Correct import path for ContactUs page

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} /> {/* Render HomePage on the root path */}
        <Route path="/sneakers" component={SneakerList} /> {/* Route for SneakerList */}
        <Route path="/products" component={Products} /> {/* Route for Products */}
        <Route path="/about" component={AboutUs} /> {/* Route for AboutUs */}
        <Route path="/faqs" component={FAQs} /> {/* Route for FAQs */}
        <Route path="/contact" component={ContactUs} /> {/* Route for ContactUs */}
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;