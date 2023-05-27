import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Business2 from './Business2'

function Business(props) {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?category=${props.title}&apiKey=a5a36d5983404267925a00312dc8d093`)
            .then(res => res.json()).then(data => setNews(data.articles))
    }, [])
    console.log(news)
    return (
        <>
            <div className='business mb-4'>
                <h4 className=' bg-primary px-3 py-2 rounded-top text-light '>{props.title}</h4>
                <Row className='g-3'>
                    {news.slice(0, 3).map((items) => (
                        <Col lg={4} md={6}>
                            <Business2 key={items.id} {...items}/>
                        </Col>
                    ))}
                </Row>
            </div>
            {/* <div className='business mb-4'>
                <h4 className=' bg-primary px-3 py-2 rounded-top text-light '>{props.title}</h4>
                <Row>
                    {news.slice(0, 3).map((a) => (
                        <Col lg={4}>
                            <Card>
                                <Card.Img variant="top" src={a.urlToImage} />
                                <Card.Body>
                                    <Card.Title className='fw-bold '>{a.title}</Card.Title>
                                    <p>{a.author}</p>
                                    <Card.Text>
                                        {a.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div> */}
        </>
    )
}

export default Business
