import React from 'react'
import { Card } from 'react-bootstrap'


function Business2({id, urlToImage, title, description ,author}) {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title className='fw-bold '>{title}</Card.Title>
                    {/* <Card.Title><Link to={`/details/${id}`} className='fw-bold '>{title}</Link></Card.Title> */}
                    <p>{author}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Business2

// import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'

// function Breaking() {
//     return (
//         <>
//             <Container>
//                 <div className='breaking py-4'>
//                     <div className='breaking-header rounded-top bg-primary p-2'>
//                         <p className='m-0 text-light'>Breaking News</p>
//                     </div>
//                     <div className='slider'>
//                         <div className='slides p-3'>
//                             <Row className='align-items-center'>
//                                 <Col lg={4} xs={4}>
//                                     <img className='w-100 rounded' src='https://bloggar-react.wpocean.com/static/media/img-1.85c9b187eb85aa3af75a.jpg' alt='' />
//                                 </Col>
//                                 <Col lg={8} xs={8}>
//                                     <p>25 Dec, 2023</p>
//                                     <h4 className='fw-bold'>5 unbelievable secret about choosing right fuirniture</h4>
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div className='slides p-3'>
//                             <Row className='align-items-center'>
//                                 <Col lg={4} xs={4}>
//                                     <img className='w-100 rounded' src='https://bloggar-react.wpocean.com/static/media/img-3.c94aaecaf170647e410f.jpg' alt='' />
//                                 </Col>
//                                 <Col lg={8} xs={8}>
//                                     <p>25 Dec, 2023</p>
//                                     <h4 className='fw-bold'>5 unbelievable secret about choosing right fuirniture</h4>
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div className='slides p-3'>
//                             <Row className='align-items-center'>
//                                 <Col lg={4} xs={4}>
//                                     <img className='w-100 rounded' src='https://bloggar-react.wpocean.com/static/media/img-2.09b14878414cbb2593bf.jpg' alt='' />
//                                 </Col>
//                                 <Col lg={8} xs={8}>
//                                     <p>25 Dec, 2023</p>
//                                     <h4 className='fw-bold'>5 unbelievable secret about choosing right fuirniture</h4>
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div className='slides p-3'>
//                             <Row className='align-items-center'>
//                                 <Col lg={4} xs={4}>
//                                     <img className='w-100 rounded' src='https://bloggar-react.wpocean.com/static/media/img-1.85c9b187eb85aa3af75a.jpg' alt='' />
//                                 </Col>
//                                 <Col lg={8} xs={8}>
//                                     <p>25 Dec, 2023</p>
//                                     <h4 className='fw-bold'>5 unbelievable secret about choosing right fuirniture</h4>
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div className='slides p-3'>
//                             <Row className='align-items-center'>
//                                 <Col lg={4} xs={4}>
//                                     <img className='w-100 rounded' src='https://bloggar-react.wpocean.com/static/media/img-3.c94aaecaf170647e410f.jpg' alt='' />
//                                 </Col>
//                                 <Col lg={8} xs={8}>
//                                     <p>25 Dec, 2023</p>
//                                     <h4 className='fw-bold'>5 unbelievable secret about choosing right fuirniture</h4>
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div className='slides p-3'>
//                             <Row className='align-items-center'>
//                                 <Col lg={4} xs={4}>
//                                     <img className='w-100 rounded' src='https://bloggar-react.wpocean.com/static/media/img-2.09b14878414cbb2593bf.jpg' alt='' />
//                                 </Col>
//                                 <Col lg={8} xs={8}>
//                                     <p>25 Dec, 2023</p>
//                                     <h4 className='fw-bold'>5 unbelievable secret about choosing right fuirniture</h4>
//                                 </Col>
//                             </Row>
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </>
//     )
// }

// export default Breaking

