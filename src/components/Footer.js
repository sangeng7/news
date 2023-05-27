import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <>
            <div className='footer mt-5'>
                <div className='footer-top'>
                    <Container>
                        <Row className='g-3'>
                            <Col lg={3} md={6}>
                                <div className='footer-top-text'>
                                    <img className='mb-4' src='https://danto-hugo.netlify.app//images/logo.svg' alt='' />
                                    <p className='text-light'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className='footer-top-text text-light ps-5' >
                                    <h5 className='mb-4 fw-bold'>Important Link</h5>
                                    <ul className=''>
                                        <li>News</li>
                                        <li>Career</li>
                                        <li>Technology</li>
                                        <li>Startups</li>
                                        <li>Gadgets</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className='footer-top-text text-light' >
                                    <h5 className='mb-4 fw-bold'>Browse by Tag</h5>
                                    <ul className='d-flex '>
                                        <li className='mb-2'><a href=''>Travel</a></li>
                                        <li className='mb-2'><a href=''>Business</a></li>
                                        <li className='mb-2'><a href=''>Lifestyle</a></li>
                                        <li className='mb-2'><a href=''>Marketing</a></li>
                                        <li className='mb-2'><a href=''>Medical</a></li>
                                        <li className='mb-2'><a href=''>Sports</a></li>
                                        <li className='mb-2'><a href=''>Career</a></li>
                                        <li className='mb-2'><a href=''>Foods</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={2} md={6}>
                            <div className='footer-top-text text-light' >
                            <h5 className='mb-4 fw-bold'>Social Media</h5>
                            <ul>
                                <li><i class="bi bi-facebook me-2"></i> Facebook</li>
                                <li><i class="bi bi-twitter me-2"></i> Twitter</li>
                                <li><i class="bi bi-youtube me-2"></i> Youtube</li>
                                <li><i class="bi bi-instagram me-2"></i> Instagram</li>
                            </ul>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='footer-bottom py-4 text-center'>
                    <Container>
                        <p className='text-light m-0'>Copyright © 2023 Bloggar by wpOceans. All Rights Reserved.</p>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Footer
