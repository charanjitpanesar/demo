'use client'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import logoImg from '../../../public/images/logo.png';
import '../../../public/sass/pages/header.scss';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

    let navLinks = [
        {
            href: "/",
            text:"Home"
        },
        {
            href: "/solutions",
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

    const [isResponsiveHeaderVisible, setIsResponsiveHeaderVisible] = useState(false);

    const toggleResponsiveHeader = () => {
        setIsResponsiveHeaderVisible(!isResponsiveHeaderVisible);
    };
    return (
        <>
            <section className='header_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                            <div className='parent_area'>
                                <div className='logo_area'>
                                    <Image src={logoImg} alt="..." title="..." priority/>
                                </div>
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
                                <div className='menu_area d-block d-lg-none' onClick={toggleResponsiveHeader} >
                                    <i className="bi bi-list"></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={`responsive_header ${isResponsiveHeaderVisible ? 'show' : ''}`}>
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
            </section>
        </>
    )
}

export default Header

{/* <section className='header_section'>
    <Container>
        <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                <div className='parent_area'></div>
            </Col>
        </Row>
    </Container>
</section> */}