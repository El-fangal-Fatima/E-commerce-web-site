
import { useRef,useEffect } from 'react'
import './header.css'
import {motion} from 'framer-motion'
import logo from '../../assets/images/eco-logo.png'
import { Container,Row } from 'reactstrap'
import { NavLink,useNavigate } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import userIcon from '../../assets/images/user-icon.png'
import {  useSelector } from 'react-redux'

const nav__links =[ {
  path:'home',
  dispaly:'Home'
},
{
  path:'shop',
  dispaly:'Shop'
},
{
  path:'card',
  dispaly:'Card'
},
]
const Header = () => {

 const headerRef = useRef(null)
const navigate = useNavigate()

  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
 const stickHeaderFunc = () =>{
  window.addEventListener('scroll' ,()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('sticky__header')
    }else{
      headerRef.current.classList.remove('sticky__header')
    }
  })
 }
 useEffect(()=>{
  stickHeaderFunc()

  return () =>window.removeEventListener('scroll',stickHeaderFunc)

 })

 const navigateToCart =()=> {
    navigate ('/card')
 }
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="LOGO" />
              <h1>Multimart</h1>
            
            <div>
            
            <p>Sience 1995</p>
            </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item,index) => ( 
                <li className='nav__item' key={index}><NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav__active':""}>{item.dispaly}</NavLink></li>
                ))
              }
              

                
              </ul>
            </div>

        <div className="nav__icons">
          <span className='fav__icons'><i className ="ri-heart-line"></i>
          <span className="badge">1</span>
          </span>
          
          <span className='cart__icon' onClick={navigateToCart}><i className ="ri-shopping-bag-line"></i>
          <span className="badge">{totalQuantity}</span>
          </span>
          
          <span>< motion.img whileTap={{scale:1.2}} src={userIcon} alt="" /></span>
        </div> 
        <div className="mobil__menu">
          <span><i className="ri-menu-line"></i></span>
        </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header