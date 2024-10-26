import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Update the import path to match the new structure
import SneakerList from './components/SneakerList'; // Import the SneakerList component
import Products from './pages/Products'; // Import the Products page
import About from './pages/About'; // Import the About page
import FAQs from './pages/FAQs'; // Import the FAQs page
import Contact from './pages/Contact'; // Import the Contact page

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} /> {/* Render HomePage on the root path */}
        <Route path="/sneakers" component={SneakerList} /> {/* Route for SneakerList */}
        <Route path="/products" component={Products} /> {/* Route for Products */}
        <Route path="/about" component={About} /> {/* Route for About */}
        <Route path="/faqs" component={FAQs} /> {/* Route for FAQs */}
        <Route path="/contact" component={Contact} /> {/* Route for Contact */}
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;



