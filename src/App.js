import './App.css';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import {  Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

<Header/>


        <Switch>
              <Route path="/about"> <About/> </Route>
              <Route path="/contact"> <Contact/> </Route>
              <Route path="/"><Home/> </Route>
        </Switch>
      


      <Footer/>
      
    </div>
  );
}

export default App;
