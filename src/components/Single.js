import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from './news';
import Related from './Related';

function Single() {
    let { pid } = useParams()
    let displaydata= data.find((a)=>a.id==pid)
    
    return (
        <Container className='py-lg-5 py-md-4 py-3 single'>
            <Row className='pb-4'>
                <Col lg={6} md={6} className='text-center'>
                    <img className='w-100' src={displaydata.img} alt='' />
                </Col>
                <Col lg={6} md={6}>
                    <h1 className='pb-2 pt-4 text-dark'>{displaydata.title}</h1>
                    <p className=' text-secondary'>{displaydata.publishedAt}</p>
                </Col>
            </Row>
            <Related/>
        </Container>
       
    )
}

export default Single