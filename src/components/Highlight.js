import React from 'react'
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap'

function Highlight() {
    return (
        <>
            <Container className='highlight py-4'>
                <div className='high-header pb-3'>
                    <h3>Today's Top Highlights</h3>
                </div>
                <Row className='g-3'>
                    <Col lg={8}>
                        <div className='high-left p-4'>
                            <Row className='g-3'>
                                <Col lg={6} md={6}>
                                    <Card className='border-0 mb-4'>
                                        <div className='img-card rounded'>
                                            <Card.Img variant="top" className='w-100 rounded position-relative' src="https://bloggar-react.wpocean.com/static/media/img-1.d248a8a7b308a6e240e5.jpg" />
                                            <Button className='card-btn position-absolute px-4 py-1'>Travel</Button>
                                        </div>
                                        <Card.Body className='px-0 py-4'>
                                            <Card.Title className='fw-bold'>Traveling Makes You More Inteligent and More Energetic</Card.Title>
                                            <Card.Text>
                                                <h6 className='d-flex align-items-center py-2'>By Admin <span><i class="bi bi-dot fw-bold mx-1"></i>25 Dec, 2023</span></h6>
                                                <p>You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6} md={6}>
                                    <Card className='border-0 mb-4'>
                                        <div className='img-card rounded'>
                                            <Card.Img variant="top" className='w-100 rounded position-relative' src="https://bloggar-react.wpocean.com/static/media/img-2.86656af20531ea124329.jpg" />
                                            <Button className='card-btn position-absolute px-4 py-1'>Travel</Button>
                                        </div>
                                        <Card.Body className='px-0 py-4'>
                                            <Card.Title className='fw-bold'>12 Things to See and Find Out in Bergen, Norway</Card.Title>
                                            <Card.Text>
                                                <h6 className='d-flex align-items-center py-2'>By Admin <span><i class="bi bi-dot fw-bold mx-1"></i>13 Dec,2022</span></h6>
                                                <p>You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.</p>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6} md={6}>
                                    <Card className='border-0  mb-4'>
                                        <div className='img-card rounded'>
                                            <Card.Img variant="top" className='w-100 rounded position-relative' src="https://bloggar-react.wpocean.com/static/media/img-3.30ae18afa852aaf5c17e.jpg" />
                                            <Button className='card-btn position-absolute px-4 py-1'>Travel</Button>
                                        </div>
                                        <Card.Body className='px-0 py-4'>
                                            <Card.Title className='fw-bold'>Healthy Daily Rutine For Your Healthy Lifestyle</Card.Title>
                                            <Card.Text>
                                                <h6 className='d-flex align-items-center py-2'>By Admin <span><i class="bi bi-dot fw-bold mx-1"></i>22 Dec,2022</span></h6>
                                                <p>You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.</p>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6} md={6}>
                                    <Card className='border-0  mb-4'>
                                        <div className='img-card rounded'>
                                            <Card.Img variant="top" className='w-100 rounded position-relative' src="https://bloggar-react.wpocean.com/static/media/img-4.3655912459868233e8a5.jpg" />
                                            <Button className='card-btn position-absolute px-4 py-1'>Travel</Button>
                                        </div>
                                        <Card.Body className='px-0 py-4'>
                                            <Card.Title className='fw-bold'>Perfect Photo Clicking Idea You Must Khow About.</Card.Title>
                                            <Card.Text>
                                                <h6 className='d-flex align-items-center py-2'>By Admin <span><i class="bi bi-dot fw-bold mx-1"></i>25 Dec,2023</span></h6>
                                                <p>You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.</p>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6} md={6}>
                                    <Card className='border-0 bdr'>
                                        <div className='img-card rounded'>
                                            <Card.Img variant="top" className='w-100 rounded position-relative' src="https://bloggar-react.wpocean.com/static/media/img-5.fa02a8e18b53375e422d.jpg" />
                                            <Button className='card-btn position-absolute px-4 py-1'>Travel</Button>
                                        </div>
                                        <Card.Body className='px-0 pt-4'>
                                            <Card.Title className='fw-bold'>Traveling Makes You More Inteligent and More Energetic</Card.Title>
                                            <Card.Text>
                                                <h6 className='d-flex align-items-center py-2'>By Admin <span><i class="bi bi-dot fw-bold mx-1"></i>25 Dec,2022</span></h6>
                                                <p>You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.</p>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6} md={6}>
                                    <Card className='border-0 bdr'>
                                        <div className='img-card rounded'>
                                            <Card.Img variant="top" className='w-100 rounded position-relative' src="https://bloggar-react.wpocean.com/static/media/img-6.a9e93852eb3549feb1b5.jpg" />
                                            <Button className='card-btn position-absolute px-4 py-1'>Travel</Button>
                                        </div>
                                        <Card.Body className='px-0 pt-4'>
                                            <Card.Title className='fw-bold'>12 Things to See and Find Out in Bergen, Norway</Card.Title>
                                            <Card.Text>
                                                <h6 className='d-flex align-items-center py-2'>By Admin <span><i class="bi bi-dot fw-bold mx-1"></i>25 Dec,2022</span></h6>
                                                <p>You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.</p>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col lg={12}>
                                <div className='high-right p-4 mb-4'>
                                    <div className='acc-header'>
                                        <h5>Post Categories</h5>
                                    </div>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Lifestyle</Accordion.Header>
                                            <Accordion.Body>
                                                Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Inspiration</Accordion.Header>
                                            <Accordion.Body>
                                                Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Fashion</Accordion.Header>
                                            <Accordion.Body>
                                                Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Photography</Accordion.Header>
                                            <Accordion.Body>
                                                Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Travel</Accordion.Header>
                                            <Accordion.Body>
                                                Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>Business</Accordion.Header>
                                            <Accordion.Body>
                                                Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className='high-right p-4 mb-4'>
                                    <Row className='align-items-center mb-3'>
                                        <Col lg={4} xs={4}>
                                            <img className='w-100 rounded' src='https://bloggar-react.wpocean.com/static/media/img-1.d248a8a7b308a6e240e5.jpg' alt='' />
                                        </Col>
                                        <Col lg={8} xs={8} className='align-items-center'>
                                            <p className='mb-1'>25 Dec, 2023</p>
                                            <h4 className='fw-bold'>Traveling Makes You More Inteligent and More</h4>
                                        </Col>
                                    </Row>
                                    <Row className='align-items-center mb-3'>
                                        <Col lg={4} xs={4}>
                                            <img className='w-100 rounded' src='https://bloggar-react.wpocean.com/static/media/img-2.86656af20531ea124329.jpg' alt='' />
                                        </Col>
                                        <Col lg={8} xs={8} className='align-items-center'>
                                            <p className='mb-1'>13 Dec,2022</p>
                                            <h4 className='fw-bold'>12 Things to See and Find Out in Bergen, Norway</h4>
                                        </Col>
                                    </Row>
                                    <Row className='align-items-center mb-3'>
                                        <Col lg={4} xs={4}>
                                            <img className='w-100 rounded' src='https://bloggar-react.wpocean.com/static/media/img-3.30ae18afa852aaf5c17e.jpg' alt='' />
                                        </Col>
                                        <Col lg={8} xs={8} className='align-items-center'>
                                            <p className='mb-1'>25 Dec, 2023</p>
                                            <h4 className='fw-bold'>Healthy Daily Rutine For Your Healthy Lifestyle</h4>
                                        </Col>
                                    </Row>
                                    <Row className='align-items-center mb-3'>
                                        <Col lg={4} xs={4}>
                                            <img className='w-100 rounded' src='https://bloggar-react.wpocean.com/static/media/img-4.3655912459868233e8a5.jpg' alt='' />
                                        </Col>
                                        <Col lg={8} xs={8} className='align-items-center'>
                                            <p className='mb-1'>17 Dec, 2023</p>
                                            <h4 className='fw-bold'>Perfect Photo Clicking Idea You Must Khow About.</h4>
                                        </Col>
                                    </Row>
                                    <Row className='align-items-center'>
                                        <Col lg={4} xs={4}>
                                            <img className='w-100 rounded' src='https://bloggar-react.wpocean.com/static/media/img-5.fa02a8e18b53375e422d.jpg' alt='' />
                                        </Col>
                                        <Col lg={8} xs={8} className='align-items-center'>
                                            <p className='mb-1'>23 Dec, 2023</p>
                                            <h4 className='fw-bold'>Traveling Makes You More Inteligent and More</h4>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={12} xs={8} sm={8} md={6}>
                            <div className=''>
                                <img className='w-100' src='https://bloggar-react.wpocean.com/static/media/add.046ff45cb7df970245dc.jpg' alt='' />
                            </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Highlight
