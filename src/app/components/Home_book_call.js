import React from 'react'
import '../../../public/sass/home_scss/home_hero_section.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const Home_book_call = () => {
    return (
        <section className='home_service_banner_section  book_call_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <Link href='/' className='btn-primary btn-black'>Book a Call</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home_book_call