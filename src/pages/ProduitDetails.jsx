import { Container, Row,Col } from "reactstrap"
import { useParams } from "react-router"
import products from "../assets/data/products"
import CommonSection from "../components/UI/CommonSection"
import '../styles/productDetail.css'
import { motion } from "framer-motion"
import { useState ,useRef, useEffect} from "react"
import ProductsList from './../components/UI/ProductsList';
import {  useDispatch } from "react-redux"
import { cartActions } from "../redux/slices/cartSlice"
import { toast } from "react-toastify"




const ProduitDetails = () => {

const [tab,setTab] = useState('desc')
const reviewUser = useRef('')
const reviewMsg = useRef('')
const dispatch = useDispatch()

const {id} = useParams()
const [rating,setRating]=useState(null)
const product =  products.find(item => item.id===id)

const {imgUrl ,productName ,price ,avgRating, reviews,category , description ,shortDesc }=product

const relatedProducts = products.filter(item=>item.category===category)

const submitHandler=(e)=>{
  e.preventDefault()

  const reviewUserName = reviewUser.current.value
  const reviewUserMsg = reviewMsg.current.value

  const reviewObj = {
    userName:reviewUserName,
    text:reviewUserMsg,
    rating
  }
  console.log(reviewObj)
 toast.success('Review submited')

};
const addTocart = ()=>{
  dispatch(cartActions.addItem({
    id,
    image:imgUrl,
    productName,
    price,

  })
  )
  toast.success('product added successfully')
}

useEffect(()=>{
  window.scrollTo(0,0);
},[product])


  return (
    <div  title={productName}>
        <CommonSection  title={productName}/>
          <section>
            <Container className="pt-0">
              <Row>
                <Col lg='6'>
                  <img src={imgUrl} alt="" />
                </Col>
                <Col lg='6'>
                  <div className="product__details">
                    <h2>{productName}</h2>

                <div className="product__rating d-flex align-item-center gap-5 mb-4 ">
                  <div>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-half-s-fill"></i></span>
                  </div>
                  <p>(<span>{avgRating}</span>Ratings)</p>
                </div>
               <div className="d-flex align-items-center gap-5"> 
                      <span className="product__price">${price}</span>
                      <span>Category:{category.toUpperCase()}</span>
               </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button whileTap={{scale:1.2}} className="buy__btn" onClick={addTocart}>Add to Cart</motion.button>
              </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            <Container>
              <Row>
                <Col lg='12'>
                  <div className="tab__wrapper d-flex align-items-center gap-5">
                    <h6  className={`${tab==='desc' ? 'active___tab' : ''}`} onClick={()=>setTab('desc')}>Description</h6>
                    <h6  className={`${tab==='rev' ? 'active___tab' : ''}`}  onClick={()=>setTab('rev')}>Reviews({reviews.length}) </h6>
                  </div>

            {
             tab==='desc' ?     <div className="tab__content mt-5 ">
             <p>{description}</p>
            </div> : <div className="product__review mt-5">
              <div className="review__wrapper">
                <ul>
                  {reviews?.map((item,index)=>(
                  <li key={index} className="mb-4">

                    <h6>Jhon Doe</h6>
                    <span>{item.rating}( rating)</span>
                      <p>{item.text}</p>
                  </li>
                    ))
                  }
                </ul>
              <div className="review__form">

                    <h4>leave your experience</h4>

                  <form action="" onSubmit={submitHandler} >
                    <div className="form__group">
                      <input type="text" placeholder="Entre name"  ref={reviewUser}/>
                    </div>
                    <div className="form__group d-flex align-utems-center gap-5 ">
                      <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(1)}> 1 <i className="ri-star-s-fill"></i></motion.span>
                      <motion.span  whileTap={{scale:1.2}} onClick={()=>setRating(2)}> 2 <i className="ri-star-s-fill"></i></motion.span>
                      <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(3)}> 3 <i className="ri-star-s-fill"></i></motion.span>
                      <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(4)}> 4 <i className="ri-star-s-fill"></i></motion.span>
                      <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(5)}> 5 <i className="ri-star-s-fill"></i></motion.span>
                    </div>

                    <div className="form__group">
                      <textarea ref={reviewMsg} rows={4} type="text" placeholder="Review Message ..." />
                    </div>
                    <motion.button  whileTap={{scale:1.2}} type="submit" className="buy__btn">Submit</motion.button>
                  </form>
</div>

              </div>
            </div>
            }

                </Col>
                <Col lg='12' className="mt-5">
                  <h2 className="related__title"></h2>
                </Col>
                <ProductsList data={relatedProducts}/>
              </Row>
            </Container>
          </section>
    </div>
  )
}

export default ProduitDetails