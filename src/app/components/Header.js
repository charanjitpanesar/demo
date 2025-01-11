'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import logoImg from '../../../public/images/logo.png';
import '../../../public/sass/pages/header.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
            href: "/about_us",
            text:"About Us"
        },
        {
            href: "/resources",
            text:"Resources"
        },
        {
            href: "/pricing",
            text:"Pricing"
        },
        {
            href: "/contact",
            text:"Contact"
        },
        {
            href: "/customer_portal",
            text:"Customer Portal"
        }
    ]

    const pathname = usePathname();

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
                                        return <li key={index} className={pathname === element.href ? 'active' : ''}>
                                            <Link href={element.href}>{element.text}</Link>
                                        </li>
                                        })
                                    }
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
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