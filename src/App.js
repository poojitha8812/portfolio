
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div>
       <Switch>
       <Route   path="/Home" component={Home} />
       <Route  path="/About" component={About} />
       <Route  path="/Skills" component={Skills} />
       </Switch>

     </div>

    </div>
  );
}

export default App;
