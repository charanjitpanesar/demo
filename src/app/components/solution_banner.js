import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/solution_banner.scss';
import banner1 from '../../../public/images/banner1.png';
import rec1 from '../../../public/images/rec1.svg';
import logo from '../../../public/images/white_logo.png';
import Link from 'next/link';
import Image from 'next/image';

const Solution_banner = () => {
    return (
        <>
            <section className="banner">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_area">
                                <div className="title">
                                    <h1>See how we handle projects with a strategic edge</h1>
                                    <p>See how SAYNT AI streamlines your business with advanced solutions</p>
                                </div>
                                <div className="button_group">
                                    <div className="button_area">
                                        <Link href={'/'} className='btn-primary btn-white'>See Our Work</Link>
                                    </div>
                                    <div className="button_area">
                                        <Link href={'/'} className='btn-primary btn-dark'>Request a Demo</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner_img">
                    <Image src={banner1} title='...' alt='...' fetchPriority='low' priority={false} />
                </div>
                <div className="logo_box">
                    <Image src={rec1} alt='...' title='...' fetchPriority='low' priority={false} width={204} height={236}/>
                    <div className="logo">
                        <Image src={logo} alt='...' title='...' priority={false} fetchPriority='low' width={101} height={92}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solution_banner