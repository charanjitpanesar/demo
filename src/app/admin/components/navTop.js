"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import profileImg from '../../../../public/admin/images/profile.jpg';
import profileImg3 from '../../../../public/admin/images/profile3.png';
import '../../../../public/admin/sass/pages/navTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Dropdown, Form } from 'react-bootstrap';
import { faAngleLeft, faBars, faCog, faFilter, faSignOutAlt, faTimesCircle, faUser } from '@fortawesome/free-solid-svg-icons';


const NavTop = (props) => {
    const {
        toggleSidebar,
    } = props;
    const [show, setShow] = useState(false);


    return (
        <div className='nav_area'>
            {/* <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}> */}
                    <div className='inner_area'>

                        <div className='nav_top'>
                            <div className='bar_icon d-xl-none d-block' onClick={() => toggleSidebar()}>
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <div className='profile_area'>
                                        <div className='profile_img'>
                                            <Image src={profileImg3} alt='...' fetchPriority='low' />
                                        </div>
                                        <div className='dot'></div>
                                    </div>
                                </Dropdown.Toggle>

                                {/* <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                        <div className='top'>
                                            <div className='profile_left'>
                                                <div className='user_profile'>
                                                    <div className='profile_area'>
                                                        <div className='profile_img'>
                                                            <Image src={profileImg3} alt='...' fetchPriority='low' />
                                                        </div>
                                                        <div className='dot'></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='profile_right'>
                                                <div className='user_name'>John Doe</div>
                                                <div className='admin'>Admin</div>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <div className='mid'><span className='profile_icon'><FontAwesomeIcon icon={faUser} /></span> My Profile</div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <div className='mid'><span className='profile_icon'><FontAwesomeIcon icon={faCog} /></span> Setting</div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <div className='bottom'>
                                            <span className='profile_icon'><FontAwesomeIcon icon={faSignOutAlt} /></span> Log out
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu> */}
                            </Dropdown>
                        </div>
                        <div className='nav_btm'>
                            <div className='left'>
                                <div className='title'>
                                    Manage Users
                                </div>
                            </div>
                            <div className='right'>
                                <div className='btn_area'>
                                    <div className='back_btn'>
                                        <span><FontAwesomeIcon icon={faAngleLeft} /></span>  Back
                                    </div>
                                </div>
                                <Dropdown show={show}>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <div className='btn_area'>
                                            <div className='back_btn' onClick={() => setShow(true)}>
                                                <span className='filter_icon'><FontAwesomeIcon icon={faFilter} /></span>  Filter
                                            </div>
                                        </div>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <div className='cross_icon' onClick={() => setShow(false)}>
                                            <FontAwesomeIcon icon={faTimesCircle} />
                                        </div>
                                        <Dropdown.Item as={'div'}>
                                            <div className='date_area'>
                                                <div className='left_side'>
                                                    <Form.Group className='form-group'>
                                                        <Form.Label>Created On</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="date"
                                                            placeholder="Select Date of birth"
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className='right_side'>
                                                    <Form.Group className='form-group'>
                                                        <Form.Control
                                                            required
                                                            type="date"
                                                            placeholder="Select Date of birth"
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item as={'div'}>
                                            <div className='date_area'>
                                                <div className='left_side'>
                                                    <Form.Group className='form-group'>
                                                        <Form.Label>Last Login</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="date"
                                                            placeholder="Select Date of birth"
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className='right_side'>
                                                    <Form.Group className='form-group'>
                                                        <Form.Control
                                                            required
                                                            type="date"
                                                            placeholder="Select Date of birth"
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item as={'div'}>
                                            <div className='select_area'>
                                                <Form.Check
                                                    type={'radio'}
                                                    label="All"
                                                    name='status'
                                                />
                                                <Form.Check
                                                    type={'radio'}
                                                    label="Publish"
                                                    name='status'
                                                />
                                                <Form.Check
                                                    type={'radio'}
                                                    label="UnPublish"
                                                    name='status'
                                                />
                                            </div>
                                        </Dropdown.Item>
                                        <div className='btn_main'>
                                            <div className='btn_area'>
                                                <div className='btn btn-primary reset_btn'>Reset</div>
                                            </div>
                                            <div className='btn_area' onClick={() => setShow(false)}>
                                                <div className='btn btn-primary'>Submit</div>
                                            </div>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                {/* </Col>
            </Row> */}
        </div>
    )
}
export default NavTop;