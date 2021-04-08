import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import AboutMe from "./pages/Aboutme"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import {BrowserRouter as Router,Route} from "react-router-dom"
import Footer from"./components/Footer"
function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Route exact path= "/" component={AboutMe}></Route>
        <Route exact path= "/contact" component ={Contact}></Route>
        <Route exact path= "/portfolio" component={Portfolio}></Route>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
