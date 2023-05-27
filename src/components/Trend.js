import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Trend() {
    return (
        <>
            <Container className='trend py-4'>
                <Row className='g-3'>
                    <Col lg={6}>
                        <div className='fasion position-relative rounded-4'>
                        
                                <img className=' w-100 rounded-4' src='https://bloggar-react.wpocean.com/static/media/img-1.0e93841d4b805250a6f2.jpg' alt='' />
                
                            <div className='position-absolute fasion-text text-light p-4'>
                                <Button className='border-0 fw-bold px-3 py-1 mb-3 fasion-btn'>Fasion</Button>
                                <h2 className='fw-bold'>What’s In Trend In Womens Fashion Summer?</h2>
                                <p>You can customize the view Blog posts with a simple mouse click and immediately see the result of your changes.</p>
                                <p>By Marilou Kellehe / <span> 25 Dec, 2023</span></p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row className='g-3'>
                            <Col lg={12}>

                                <div className='fasion position-relative rounded-4'>
                                    <div className='fasion-img'>
                                        <img className=' w-100 rounded-4' src='https://bloggar-react.wpocean.com/static/media/img-2.c8ad3998cb264f39c007.jpg' alt='' />
                                    </div>
                                    <div className='position-absolute fasion-text text-light px-4 py-3'>
                                        <Button className='border-0 fw-bold px-3 py-1 mb-3 fasion-btn'>Fasion</Button>
                                        <h4 className='fw-bold'>Traveling Makes You More Interesting</h4>
                                        <p>By Konal Biry / <span> 13 Dec,2022</span></p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6}>
                                <div className='fasion position-relative rounded-4'>
                                    <div className='fasion-img'>
                                        <img className=' w-100 rounded-4' src='https://bloggar-react.wpocean.com/static/media/img-3.bd8d7e7eb4eeee120f96.jpg' alt='' />
                                    </div>
                                    <div className='position-absolute fasion-text text-light px-4 py-3'>
                                        <Button className='border-0 fw-bold px-3 py-1 mb-3 fasion-btn'>Travel</Button>
                                        <h4 className='fw-bold'>Top 10 Healthy Food</h4>
                                        <p>By Aliza / <span> 22 Dec,2022</span></p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <div className='fasion position-relative rounded-4'>
                                    <div className='fasion-img'>
                                        <img className=' w-100 rounded-4' src='https://bloggar-react.wpocean.com/static/media/img-4.0454c5a31f66c04d6299.jpg' alt='' />
                                    </div>
                                    <div className='position-absolute fasion-text text-light px-4 py-3'>
                                        <Button className='border-0 fw-bold px-3 py-1 mb-3 fasion-btn'>Business</Button>
                                        <h4 className='fw-bold'>What Makes a Leader?</h4>
                                        <p>By Anny / <span> 22 Dec,2022</span></p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Trend
