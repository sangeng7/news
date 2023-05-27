import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function Suscribe() {
  return (
    <>
      <Container>
        <div className='suscribe text-center my-4'>
            <div className='sus-text text-center text-light pb-4'>
                <h4 className='fw-bold'>Never miss any Update!</h4>
                <p>Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
            </div>
            <div className='sus-form'>
                <Form className=' mx-auto d-flex position-relative'>
                    <input className='p-2 p-md-3 p-lg-4 w-100 rounded border-0' type='text' placeholder='Enter your email' />
                    <Button className='sus-form-btn position-absolute rounded-1 px-4 py-3'> Suscribe <i class=" ms-2 bi bi-person"></i> </Button>
                </Form>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Suscribe
