// import Helmet from '../components/Helmet/Helmet';
import {useState , useEffect} from 'react';
import { Container ,Row,Col} from 'reactstrap';
import heroImg from "../assets/images/hero-img.png"
import counterImg from'../assets/images/counter-timer-img.png'

import '../styles/home.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import products from '../assets/data/products'

import ProductsList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';


const Home = () => {

const [trandingProduct,settrandingProduct] = useState([])
const [bestSalesProduct,setBestSalesProduct] = useState([])
const [mobileProducts,setMobilProducts]=useState([])
const[wireProducts,setwireProducts]=useState([])
const[popularProducts,setPopularProducts]=useState([])


const year = new Date().getFullYear();

useEffect(()=>{
  const  filteredProducts =products.filter((item)=>item.category==='chair');
  const  filteredBestSalesProducts =products.filter((item)=>item.category==='sofa');

  const  filteredMobilProducts =products.filter((item)=>item.category==='mobile');
  const  filteredWirlessProducts =products.filter((item)=>item.category==='wireless');
  const  filteredPopularProducts =products.filter((item)=>item.category==='watch');

  
  settrandingProduct(filteredProducts);
  setBestSalesProduct(filteredBestSalesProducts)
  setMobilProducts(filteredMobilProducts);
  setwireProducts(filteredWirlessProducts);
  setPopularProducts(filteredPopularProducts);


},[]);


  return (
   
     <div title={"home"}>
      <section className="hero__section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content">
                  <p className="hero__sub">Trending product in{year}</p>
                  <h2>Make yourinterior More  
                   <h2> Minimalistc & Modern</h2>  </h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa maxime ratione magni voluptatibus,
                     eligendi dolorem nesciunt autem cumque ut.</p>
                     <motion.button whileTap={{scale :1.2}} className="buy__btn"><Link to="/shop">SHOP NEW</Link></motion.button>
                </div>
              </Col>
              <Col lg='6' md='6'  >
                <div className="here__img">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
      </section>

      <Services/>
<section className="trending__products">
<Container>
  <Row>
    <Col lg='12' className='text-center'>
      <h2 className='section__title'> Trending Products</h2>
    </Col>
    <ProductsList  data={trandingProduct}/>
  </Row>
</Container>


</section>

<section className="best__sales">
  <container>
  <Row>
    <Col lg='12' className='text-center'>
      <h2 className='section__title'>Best Sales</h2>
    </Col>
    <ProductsList data={bestSalesProduct}/>
  </Row>
  </container>
</section>

<section className="timer__count">
<Container>
  <Row>
    <Col lg='6' md='6'>
<div className="clock__top-content">
  <h4 className='text-white fs-6 mb-2' >Limited Offers</h4>
  <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
</div>

      <Clock/>
      <motion.button whileTap={{scale :1.2}} className="buy__btn store__btn">
        <Link to='/shop'>Visit Store</Link>
      </motion.button>
    </Col>

    <Col lg='6' md='6'  className='text-end'>
      <img src={counterImg} alt="image" />
    </Col>
  </Row>
</Container>

</section>


<section className="new__arrivals">

  <Container>
    <Row>
    <Col lg='12' className='text-center mb-5'>
      <h2 className='section__title'>New Arrivals</h2>
    </Col>
    <ProductsList data={mobileProducts}/>
    <ProductsList data={wireProducts}/>
    </Row>
  </Container>
</section>

<section className="popular__category">
<Container>
    <Row>
    <Col lg='12' className='text-center mb-5'>
      <h2 className='section__title'>Popular in category</h2>
    </Col>
    <ProductsList data={popularProducts}/>

    </Row>
  </Container>
</section>

     </div>
     
     );
}

export default Home