
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Routes, Route } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import Home from './Home';
import Single from './Single';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <section className='header-top'>
          <Row>
            <Col lg={12}>
              <div className='social-icons py-3 px-3'>
                <ul className='d-flex align-items-center justify-content-end '>
                  <li className='mx-2'><i class="bi bi-facebook"></i></li>
                  <li className='mx-2'><i class="bi bi-instagram"></i></li>
                  <li className='mx-2'><i class="bi bi-google"></i></li>
                  <li className='mx-2'><i class="bi bi-twitter"></i></li>
                </ul>
              </div>
            </Col>
          </Row>
        </section>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img className='w-100' src='https://danto-hugo.netlify.app//images/logo.svg' alt='' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                <Nav.Link href="#link">Pages</Nav.Link>
                <Nav.Link href="#link">Entertainment</Nav.Link>
                <Nav.Link href="#link">Sports</Nav.Link>
                <Nav.Link href="#link">Business</Nav.Link>
                <Nav.Link href="#link">Travel</Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
              </Nav>
              <div className='search-icon me-2'>
                <i class="bi bi-search"></i>
              </div>
              <div className='menu-icon' variant="primary" onClick={handleShow}>
                <i class="bi bi-list"></i>
              </div>
            </Navbar.Collapse>
            <Offcanvas className='py-4 px-3' show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title><img className='' src='https://danto-hugo.netlify.app//images/logo.svg' alt='' /></Offcanvas.Title>
              </Offcanvas.Header>
              <h4 className='pt-3 px-3 fw-bold text-light'>Our Latest News</h4>
              <Offcanvas.Body>
                <Row className='g-3'>
                  <Col lg={4}>
                    <img className='w-100' src='https://bloggar-react.wpocean.com/static/media/img-1.85c9b187eb85aa3af75a.jpg' alt='' />
                  </Col>
                  <Col lg={8} className='py-2'>
                    <p>25 Dec, 2023</p>
                    <h5>5 unbelievable secret about choosing right</h5>
                  </Col>
                  <Col lg={4}>
                    <img className='w-100' src='https://bloggar-react.wpocean.com/static/media/img-2.09b14878414cbb2593bf.jpg' alt='' />
                  </Col>
                  <Col lg={8}>
                    <p>25 Dec, 2023</p>
                    <h5>5 unbelievable secret about choosing right</h5>
                  </Col>

                  <Col lg={4}>
                    <img className='w-100' src='https://bloggar-react.wpocean.com/static/media/img-3.c94aaecaf170647e410f.jpg' alt='' />
                  </Col>
                  <Col lg={8}>
                    <p>25 Dec, 2023</p>
                    <h5>5 unbelievable secret about choosing right</h5>
                  </Col>
                </Row>
              </Offcanvas.Body>
              <h4 className='pt-4 px-3 fw-bold text-light'>Contact Us</h4>
              <Offcanvas.Body>
                <div className='d-flex mb-2'>
                  <i class="bi bi-geo-alt text-light me-3"></i>
                  <h6>68D, Belsion Town 2365 <br />
                    Fna city, LH 3656, USA</h6>
                </div>
                <div className='d-flex mb-2'>
                  <i class="bi bi-geo-alt text-light me-3"></i>
                  <h6>68D, Belsion Town 2365 <br />
                    Fna city, LH 3656, USA</h6>
                </div>
                <div className='d-flex mb-2'>
                  <i class="bi bi-geo-alt text-light me-3"></i>
                  <h6>68D, Belsion Town 2365 <br />
                    Fna city, LH 3656, USA</h6>
                </div>
              </Offcanvas.Body>
            </Offcanvas>

          </Container>
        </Navbar>
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:pid" element={<Single />} />
      </Routes>
    </>
  )
}

export default Header
