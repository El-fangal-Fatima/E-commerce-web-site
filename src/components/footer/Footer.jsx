import './footer.css'
import { Container ,Row , Col ,ListGroup  ,ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'


const Footer = () => {

  const year=new Date().getFullYear()


  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
          <div className="nav__wrapper">
            <div className="logo">
              <h1 className='text-white'>Multimart</h1>
            </div>
          </div>
          <p className="footer__text mt-4">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae incidunt est id, laudantium doloremque reiciendis.
   Ipsum necessitatibus officia dolore.
</p>
            

          </Col>
          <Col lg="3">
              <div className="footer__quick-link">
                <h4 className="quick__links-title">Top category</h4>   
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 '>
                  <Link to='#'>Mobile Phone</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
              </div>

          </Col>
          <Col lg="2">
          <div className="footer__quick-link">
                <h4 className="quick__links-title">Useful Links</h4>   
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
              </div>

          </Col>
          <Col lg="3">
          <div className="footer__quick-link">
                <h4 className="quick__links-title">Contact</h4>   
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-map-pin-line"></i></span>
                  <p>123 Rue Mohamadi CasaBlanca Maroc</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-phone-line"></i></span>
                  <p>+212 6 00 99 88 77</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-mail-line"></i></span>
                  <p>example123@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
              </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">Copyright{year} devloped by EL-FANGAL-Fatima. All rights reserved . </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer