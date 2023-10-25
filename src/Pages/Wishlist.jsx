import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/Slice/wishlistSlice'
import { addToCart } from '../redux/Slice/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (products)=>{
    dispatch(addToCart(products))
    dispatch(removeFromWishlist(products.id))
  }

  return (
    <div>
      <Row className='ms-5'>
      <Link to='/'>Back to Home</Link>
      {
          wishlistArray?.length>0?
          wishlistArray?.map((products,index)=>(
            <Col key={index} className='mb-5 mt-5' sm={12} md={6} lg={4} xl={3} >
              <Card className='shadow rounded' style={{ width: '18rem',height:"26rem" }}>
                <Card.Img variant="top" height={'200px'} src={products?.thumbnail} />
                <Card.Body>
                  <Card.Title>{products?.title}</Card.Title>
                    <Card.Text>
                      {products?.description.slice(0,55)}...
                    </Card.Text>
                  <div className='d-flex justify-content-around mt-5'>
                    <Button onClick={()=>dispatch(removeFromWishlist(products.id))}  className='btn btn-danger'>Remove</Button>
                    <Button onClick={()=>handleWishlistCart(products)} className='btn btn-info'>Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )): 
          <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
              <img src="https://vastrasanskriti.com/img/empty-wishlist.png" alt="" />
          </div>
        
        }
      </Row>
    </div>
  )
}

export default Wishlist