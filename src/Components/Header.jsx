import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='mb-5'>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='fs-4' style={{ textDecoration: "none", color: "white" }}>
              <i className="fa-solid fa-basket-shopping me-2"></i>
              E-commerce
            </Link>
          </Navbar.Brand>
          <Navbar.Brand className='ms-auto'>
            <Link style={{ color: "white" }} to={'/wishlist'}><i id='wishlist' className="fa-solid fa-heart"></i><sup><Badge style={{ fontSize: "9px" }} bg="secondary">9</Badge></sup>
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to={'/cart'}>
              <i id='cart' className="fa-solid fa-cart-shopping ms-4 "></i></Link>
          </Navbar.Brand>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header