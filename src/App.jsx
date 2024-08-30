import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Cart from './pages/Cart/Cart'
import BigDeals from './pages/BigDeals/BigDeals'




function App() {

return (
  <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}   />
        <Route path='/category' element={<Category/>}   />
        <Route path='/bigdeals' element={<BigDeals/>}   />
        <Route path='/cart' element={<Cart/>}   />
      </Routes>
  </Router>
  )
}

export default App
