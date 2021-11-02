import './App.css';
import Navbar from './components/Navbar/index';
import {BrowserRouter, Route} from 'react-router-dom';
import Index from './components/Index/index';
import Contact from './components/Contact/index'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
