import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Related() {
    return (
        <>
            <Container className='related my-3'>
                <div className='related-header mb-4'>
                    <h4>Related</h4>
                </div>
                <Row className='g-4'>
                    <Col lg={3} md={6}>
                        <Card className='border-0'>
                            <Card.Img className='w-100' variant="top" src="https://danto-hugo.netlify.app/images/08.jpg" />
                            <Card.Body className='px-0 py-4'>
                                <p className='pb-2'><span >Lifestyle</span> • 11 JAN, 2023</p>
                                <Card.Title className='pb-2'>The Politics of Women's Fashion in the Cultural West</Card.Title>
                                <Card.Text>
                                By Livia Philips
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={6}>
                        <Card className='border-0'>
                            <Card.Img className='w-100' variant="top" src="https://danto-hugo.netlify.app/images/09.jpg" />
                            <Card.Body className='px-0 py-4'>
                                <p className='pb-2'><span className='me-1'>Lifestyle</span> • 10 JAN, 2023</p>
                                <Card.Title className='pb-2'>Easy Morning Habits To Start Your Morning Off Brilliantly</Card.Title>
                                <Card.Text>
                                By Kaiya George
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={6}>
                        <Card className='border-0'>
                            <Card.Img className='w-100' variant="top" src="https://danto-hugo.netlify.app/images/08.jpg" />
                            <Card.Body className='px-0 py-4'>
                                <p className='pb-2'><span >Lifestyle</span> • 24 DEC, 2022</p>
                                <Card.Title className='pb-2'>5 Beach Read Novels You Want to Pick Up This Summer</Card.Title>
                                <Card.Text>
                                By Justin Kenter
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={6}>
                        <Card className='border-0'>
                            <Card.Img className='w-100' variant="top" src="https://danto-hugo.netlify.app/images/10.jpg" />
                            <Card.Body className='px-0 py-4'>
                                <p className='pb-2'><span >Lifestyle</span> • 5 OCT, 2022</p>
                                <Card.Title className='pb-2'>How Changing Your Thinking Can Change Your Life</Card.Title>
                                <Card.Text>
                                By Justin Kenter
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Related
