import './App.css';
import {Routes, Route} from 'react-router-dom'
import MyForm from './Form';
import Home from './Home'
import MyF from './Form_2'
import Summary from './summary_overview'
import Analysis from './analysis';
import FirstComponent from './schmutz';


function Welcome() {

 
  
  return (
    <Routes>
                
    <Route path='/Form' Component={MyForm} />
    <Route path='/Form_2' Component={MyF} />
    <Route path='/summary' Component={Summary} />
    <Route path='/analysis' Component={Analysis} />


    <Route exact path="/" element={<Home />} /> 
   
   </Routes>
  );
}




export default Welcome;

