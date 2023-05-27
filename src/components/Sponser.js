
import {  Container } from 'react-bootstrap'
import Business from './Business'

function Sponser() {
    return (
        <>
            <Container className='sponser my-4 p-4'>
                <div className='sponser-header pb-3'>
                    <h3>Sponsered News</h3>
                </div>
                <Business title="business" />
                <Business title="entertainment" />
                <Business title="sports" />
            </Container>
        </>
    )
}

export default Sponser
