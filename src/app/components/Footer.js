import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/pages/footer.scss';
import Link from 'next/link';
import logoImg from '../../../public/images/white_logo.png';
import Image from 'next/image';



const Footer = () => {

    let navLinks = [
        {
            href: "/",
            text:"Home"
        },
        {
            href: "/",
            text:"Solutions"
        },
        {
            href: "/",
            text:"About Us"
        },
        {
            href: "/",
            text:"Resources"
        },
        {
            href: "/",
            text:"Pricing"
        },
        {
            href: "/",
            text:"Contact"
        },
        {
            href: "/",
            text:"Customer Portal"
        }
    ]

    return (
         <section className='footer_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <Row>
                                <Col xxl={8} xl={7} lg={9} md={12} sm={6} xm={12}>
                                    <div className='left_area'>
                                        <div className='text_area'>Catalog</div>
                                        <div className='list_area'>
                                            <ul>
                                            {
                                                navLinks.map((element , index)=>{
                                                return <li key={index} className={index === 0 ? 'active' : ''}>
                                                    <Link href={element.href}>{element.text}</Link>
                                                </li>
                                                })
                                            }
                                            </ul>
                                        </div>
                                        <div className='logo_text_area'>
                                            <div className='logo_area'>
                                                <Image src={logoImg} alt="..." title="..." priority/>
                                            </div>
                                            <div className='text'>SAYNT AI</div>
                                        </div>
                                        <div className='top_arrow'>
                                            <i className="bi bi-arrow-up"></i>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={4} xl={5} lg={3} md={12} sm={6} xm={12}>
                                    <div className='right_area'>
                                        <div className='upper_area'>
                                            <div className='detail_area'>
                                                <h3>Location</h3>
                                                <Link href='#'>DHA, Sehar Commercial, Phase 7, Karachi</Link>
                                            </div>
                                            <div className='detail_area'>
                                                <h3>Email</h3>
                                                <Link href='#'>hello@randommail.com</Link>
                                            </div>
                                            <div className='detail_area'>
                                                <h3>Contact Us</h3>
                                                <Link href='#'>+1 891 989-11-91</Link>
                                            </div>
                                            <div className='detail_area'>
                                                <h3>Mon—Fri</h3>
                                                <Link href='#'>9am—6pm</Link>
                                            </div>
                                        </div>
                                        <div className='copyright_area'>
                                        © 2024 — Copyright
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className='banner_area'>
                                <div className='inner_left'>
                                    <h3>Explore our success</h3>
                                </div>
                                <div className='inner_right'>
                                    <Link href="#"><i className="bi bi-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}

export default Footer