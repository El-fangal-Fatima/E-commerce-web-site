

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';

const ProductsCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl
      })
    );
   toast.success('product added successfuly')
  };

  return (
    <Col lg='3' md='4' className='mb-2'>
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="img" />
        </div>
        <div className='p-2 product__info'>
          <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-botton d-flex align-items-center justify-content-between p-2">
          <span className='price'>${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}><i className="ri-add-line"></i></motion.span>
        </div>
      </div>
    </Col>
  );
}

ProductsCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,

    // Add more prop validations for other properties if needed
    
  }).isRequired,
}

export default ProductsCard;

