


import '../styles/cart.css';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Card = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <div title='Cart'>
      <CommonSection title='Shopping Cart'/>
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length === 0 ? (
                <h2 className='fs-4 text-center'>No items in the cart</h2>
              ) : (
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td><img src={item.imgUrl} alt="" /></td>
                        <td>{item.productName}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td><motion.i whileTap={{scale: 1.2}} onClick={() => deleteProduct(item.id)} className="ri-delete-bin-6-line"></motion.i></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justif-content-between'>Subtotal</h6>
                <span className='fs-4 fw-bold'>${totalAmount}</span>
              </div>
              <p className='fs-6 mt-2'>Taxes and shipping will be calculated at checkout</p>
              <button className="buy__btn w-100 mt-3"><Link to='/shop'>Continue shopping</Link></button>
              <button className="buy__btn w100 mt-3"><Link to='/check'>Checkout</Link></button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Card;

