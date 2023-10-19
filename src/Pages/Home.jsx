import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { addToWishlist } from '../redux/Slice/wishlistSlice'
import { useDispatch } from 'react-redux'

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  const dispatch = useDispatch()

  return (
    <div>
      <Row className='ms-5'>
        {
          data?.length > 0 ? data?.map((products, index) => (
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3} >
              <Card className='shadow rounded' style={{ width: '18rem', height: "26rem" }}>
                <Card.Img variant="top" height={'200px'} src={products?.thumbnail} />
                <Card.Body>
                  <Card.Title>{products?.title.slice(0,20)}...</Card.Title>
                  <Card.Text>
                    {products?.description.slice(0, 55)}...
                  </Card.Text>
                  <div className='d-flex justify-content-around mt-5'>
                    <Button onClick={() => dispatch(addToWishlist(products))} className='btn btn-danger'>Add to Wishlist</Button>
                    <Button className='btn btn-info'>Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) : <p>Nothing to Dispaly</p>

        }
      </Row>
    </div>
  )
}

export default Home