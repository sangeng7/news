import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import data from './news'

function Trending() {
  return (
    <>
      <Container className='trending my-4 p-4'>
        <div className='trending-header pb-3'>
          <h3>Trending News</h3>
        </div>
        <Row className='g-3'>
          {data.slice(0, 3).map((a) => (
            <Col lg={4} md={6}>
              {/* <Trending2 key={items.id} {...items}/> */}
              <Card>
                <Card.Img variant="top" src={a.img} />
                <Card.Body>
                  <Card.Title className='pb-2'><Link to={`/details/${a.id}`}> {a.title}</Link></Card.Title>
                  <Card.Text>
                    {a.publishedAt}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Trending
