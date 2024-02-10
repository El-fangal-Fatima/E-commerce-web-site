import { Navigate, Route,Routes } from 'react-router-dom'


import Home from '../pages/Home'
import Card from '../pages/Card'
import Shop from '../pages/Shop'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProduitDetails from './../pages/ProduitDetails';
import Checkout from '../pages/Checkout'



const Routers = () => {
  return (
    <Routes>

      <Route path='/' element={<Navigate to='home'/>} />
      <Route path='home' element ={<Home/>} />
      <Route path='card' element ={<Card/>} />
      <Route path='shop' element ={<Shop/>} />
      <Route path='shop/:id' element ={<ProduitDetails/>} />
      <Route path='checkout' element ={<Checkout/>} />
      <Route path='login' element ={<Login/>} />
      <Route path='signup' element ={<Signup/>} />
    </Routes>
  )
}

export default Routers