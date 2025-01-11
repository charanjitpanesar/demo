'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from "motion/react"
import banner1 from '../../../public/images/banner1.png';
import rec5 from '../../../public/images/rec5.svg';
import rec6 from '../../../public/images/rec6.svg';
import rec7 from '../../../public/images/rec7.svg';
import rec2 from '../../../public/images/rec2.svg';
import rec3 from '../../../public/images/rec3.svg';
import rec4 from '../../../public/images/rec4.svg';
import icon5 from '../../../public/images/icon5.png';
import icon6 from '../../../public/images/icon6.png';
import icon7 from '../../../public/images/icon7.png';
import icon8 from '../../../public/images/icon8.png';
import icon9 from '../../../public/images/icon9.png';
import icon10 from '../../../public/images/icon10.png';
import rec1 from '../../../public/images/rec1.svg';
import logo from '../../../public/images/white_logo.png';
import '../../../public/sass/pages/solution_banner.scss';

const Solution_banner = () => {
    return (
        <>
            <section className="banner">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_area">
                                <div className="title">
                                    <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}}>See how we handle projects with a strategic edge</motion.h1>
                                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}}>See how SAYNT AI streamlines your business with advanced solutions</motion.p>
                                </div>
                                <div className="button_group">
                                    <motion.div
                                        className="button_area"
                                        initial={{ x: -100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1, transition: { duration: 1, ease: 'anticipate' } }}

                                    >
                                        <Link href={'/'} className='btn-primary btn-white'>See Our Work</Link>
                                    </motion.div>
                                    <motion.div
                                        className="button_area"
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1, transition: { duration: 1, ease: 'anticipate' } }}
                                    >
                                        <Link href={'/'} className='btn-primary btn-dark'>Request a Demo</Link>
                                    </motion.div>
                                </div>
                                <div className="cards_area">
                                    <Row className='align-items-end'>
                                        <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={5}>
                                            < ul className="cards">
                                                <motion.li
                                                    initial={{
                                                        y: 100,
                                                        x: -50,
                                                        opacity: 0
                                                    }}
                                                    animate={{
                                                        y: 0,
                                                        x: 0,
                                                        opacity: 1,
                                                    }}
                                                >
                                                    <div className="box">
                                                        <Image src={rec5} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon5} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                                <motion.li
                                                    initial={{
                                                        y: 100,
                                                        x: -50,
                                                        opacity: 0
                                                    }}
                                                    animate={{
                                                        y: 0,
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: { delay: 0.2 }
                                                    }}
                                                >
                                                    <div className="box box2">
                                                        <Image src={rec6} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon6} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                                <motion.li
                                                    initial={{
                                                        y: 100,
                                                        x: -50,
                                                        opacity: 0
                                                    }}
                                                    animate={{
                                                        y: 0,
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: { delay: 0.4 }
                                                    }}
                                                >
                                                    <div className="box box3">
                                                        <Image src={rec7} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon7} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                            </ul>
                                        </Col>
                                        <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
                                            <motion.div
                                                className="logo_box"
                                                initial={{
                                                    y: 100,
                                                    opacity: 0
                                                }}
                                                animate={{
                                                    y: 0,
                                                    opacity: 1,
                                                    transition: { duration: 2, ease: 'anticipate' }
                                                }}
                                            >
                                                <Image src={rec1} alt='...' title='...' fetchPriority='low' priority={false} width={204} height={236} />
                                                <div className="logo">
                                                    <Image src={logo} alt='...' title='...' priority={false} fetchPriority='low' width={101} height={92} />
                                                </div>
                                            </motion.div>
                                        </Col>
                                        <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={5}>
                                            <ul className="cards">
                                                <motion.li
                                                    initial={{
                                                        y: 100,
                                                        x: 50,
                                                        opacity: 0
                                                    }}
                                                    animate={{
                                                        y: 0,
                                                        x: 0,
                                                        opacity: 1
                                                    }}
                                                >
                                                    <div className=" box box4">
                                                        <Image src={rec2} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon8} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                                <motion.li
                                                    initial={{
                                                        y: 100,
                                                        x: 50,
                                                        opacity: 0
                                                    }}
                                                    animate={{
                                                        y: 0,
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: { delay: 0.2 }
                                                    }}
                                                >
                                                    <div className="box box5">
                                                        <Image src={rec3} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon9} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                                <motion.li
                                                    initial={{
                                                        y: 100,
                                                        x: 50,
                                                        opacity: 0
                                                    }}
                                                    animate={{
                                                        y: 0,
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: { delay: 0.4 }
                                                    }}
                                                >
                                                    <div className="box box6">
                                                        <Image src={rec4} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon10} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner_img">
                    <Image src={banner1} title='...' alt='...' fetchPriority='low' priority={false} />
                </div>
            </section>
        </>
    )
}

export default Solution_banner