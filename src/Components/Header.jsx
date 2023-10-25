import React from 'react';
import { Badge, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useSelector } from 'react-redux';

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)

  return (
    <div className='mb-5'>
      <Navbar style={{zIndex:"1"}}  className="bg-primary position-fixed w-100">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='fs-4' style={{ textDecoration: "none", color: "white" }}>
              <i className="fa-solid fa-basket-shopping me-2"></i>
              E-commerce
            </Link>
          </Navbar.Brand>
          <Navbar.Brand className='ms-auto'>
            <Link style={{ color: "white" }} to={'/wishlist'}><i id='wishlist' className="fa-solid fa-heart"></i><sup><Badge style={{ fontSize: "9px" }} bg="warning">{wishlist.length}</Badge></sup>
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to={'/cart'}>
              <i id='cart' className="fa-solid fa-cart-shopping ms-4 "></i>
              <sup><Badge style={{ fontSize: "9px" }} bg="warning">{cart.length}</Badge></sup>
              </Link>
          </Navbar.Brand>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header