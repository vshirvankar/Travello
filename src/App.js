import logo from './logo.svg';
import './App.css';
import { useHistory } from 'react-router-dom'; // version 5.2.0
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import Trip from './component/Trip';
import About from './component/Aboutcontent';
import Footer from './component/Footer';
import { Switch,Router, Route, Redirect} from "react-router-dom";
import Homepage from './component/Homepage';
import Aboutpage from './component/Aboutpage';
import Servicepage from './component/Servicepage';
import Departmentpage from './component/Departmentpage';
import Contactpage from './component/Contactpage';

function App() {
  return (
    
    <>
    <Navbar/>
      <Switch>
       
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/about' component={Aboutpage}/>
        <Route exact path='/service' component={Servicepage}/>
        <Route exact path='/department' component={Departmentpage}/>
        <Route exact path='/contact' component={Contactpage}/>
        <Redirect to='/'/>
      </Switch>
      <Footer></Footer>
    </>







    // <div className="App">
    //   <Navbar/>
    //   <Slider/>
    //   <About/>
    //   <Trip/>
    //   <Footer/>
    // </div>
  );
}

export default App;
