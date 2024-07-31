
import './App.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import Home from './product/Home';
import Product from './product/Product';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </Router>
  )
}

export default App
