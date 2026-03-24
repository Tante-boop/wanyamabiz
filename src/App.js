// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import AddProduct from './components/AddProduct';
import MakePayment from './components/MakePayment';
import GetProducts from './components/GetProducts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Rights from './components/Rights'
import Carousel from './components/Carousel';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>WanyamaBiz</h1>
        </header>
        <Navbar/>
        <Carousel/>
      </div>
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/makepayment' element={<MakePayment/>}/>
        <Route path='/' element={<GetProducts/>}/>
      </Routes>
      <Footer/>
      <Rights/>
    </Router>
  );
}

export default App;
