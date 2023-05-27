import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


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
