"use client";
import React, { useEffect, useRef, useState } from 'react';
import '../../../../public/admin/sass/pages/sidebar.scss';
import { faAddressCard, faAngleLeft, faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sideBarLinks = [
    {
        id: 1,
        title: "Contact Us",
        link: "/admin/contact-us",
        icon: faAddressCard,
    },
    {
        id: 2,
        title: "Blogs",
        link: "/admin/blogs",
        icon: faBlog,
    }
];

const SideBar = (props) => {
    const {
        toggleSidebar,
        isSidebarOpen
    } = props;
    const [show, setShow] = useState(null);
    const [active, setActive] = useState(false);
    const listingRef = useRef();

    let path = usePathname();

    useEffect(() => {
        listingRef.current.addEventListener('scroll', () => {
            if (listingRef.current.scrollTop > 2) {
                setActive(true)
            }
            else {
                setActive(false)
            }
        })
        return () => setActive(false)
    }, []);

    const showFunc = (val) => {
        if (show === val) {
            setShow(null)
        }
        else {
            setShow(val)
        }
    };

    return (
        <div className='sidebar'>
            {isSidebarOpen && <div className='d-xl-none d-block'>
                <div className='close' onClick={() => toggleSidebar()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
            </div>}
            <div className='logo_area'>
                <div className='logo_title'>webapp</div>
                <div className={`menu_inner_shadow ${active ? 'show' : ''}`} ></div>
                <div className='nav_listing' ref={listingRef}>
                    <ul className='nav_links'>
                        {
                            sideBarLinks.map(item => {
                                return <li key={item.id}>
                                    <Link href={item.link} className={`link_area ${path.includes(item.link) ? "active" : ""}`}>
                                        <span className='icon'>
                                            <FontAwesomeIcon icon={item.icon} />
                                        </span>
                                        <span className='title'>
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            })
                        }
                        {/* <li onClick={() => showFunc('Pages')}>
                            <Link href="#" className='link_area'>
                                <div className='dropDown_area'>
                                    <div className='dropDown'>
                                        <div className='left_side'>
                                            <span className='icon'>
                                                <FontAwesomeIcon icon={faFileAlt} />
                                            </span>
                                            <span className='title'>
                                                Pages
                                            </span>
                                        </div>
                                        <div className='right_side'>
                                            <span className='right_arrow'>
                                                {show === "Pages" ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                            <div className={`dropDown_content ${show === "Pages" ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="#" className='dropDownItem active'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Payment Type
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Member Ship
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li onClick={() => showFunc('Products')}>
                            <Link href="#" className='link_area'>
                                <div className='dropDown_area'>
                                    <div className='dropDown'>
                                        <div className='left_side'>
                                            <span className='icon'>
                                                <FontAwesomeIcon icon={faProductHunt} />
                                            </span>
                                            <span className='title'>
                                                Products
                                            </span>
                                        </div>
                                        <div className='right_side'>
                                            <span className='right_arrow'>
                                                {show === "Products" ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className={`dropDown_content ${show === "Products" ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Categories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Sub Categories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Product Sizes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Products Colors
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="#" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faUsers} />
                                </span>
                                <span className='title'>
                                    Users
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </span>
                                <span className='title'>
                                    Auth Content
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faFileAlt} />
                                </span>
                                <span className='title'>
                                    Orders
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faQuestionCircle} />
                                </span>
                                <span className='title'>
                                    Faqs
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faAddressCard} />
                                </span>
                                <span className='title'>
                                    Contact Us
                                </span>
                            </Link>
                        </li>
                        <li>
                            <div className='menu_header'>
                                <span className='seperator'>Others</span>
                            </div>
                        </li>
                        <li onClick={() => showFunc('Activites')}>
                            <Link href="#" className='link_area'>
                                <div className='dropDown_area'>
                                    <div className='dropDown'>
                                        <div className='left_side'>
                                            <span className='icon'>
                                                <FontAwesomeIcon icon={faBars} />
                                            </span>
                                            <span className='title'>
                                                Activites
                                            </span>
                                        </div>
                                        <div className='right_side'>
                                            <span className='right_arrow'>
                                                {show === "Activites" ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className={`dropDown_content ${show === "Activites" ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Activities Logs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Email Logs
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li onClick={() => showFunc('Locations')}>
                            <Link href="#" className='link_area'>
                                <div className='dropDown_area'>
                                    <div className='dropDown'>
                                        <div className='left_side'>
                                            <span className='icon'>
                                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                            </span>
                                            <span className='title'>
                                                Locations
                                            </span>
                                        </div>
                                        <div className='right_side'>
                                            <span className='right_arrow'>
                                                {show === "Locations" ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className={`dropDown_content ${show === "Locations" ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Countries
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            County
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Cities
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;