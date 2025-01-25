'use client'

import React, { useEffect, useState } from 'react'
import '../../../public/sass/home_scss/home_hero_section.scss';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { postApi } from '@/frontend/helpers';
import { toast } from 'react-toastify';

const Home_book_call = ({id}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <section className='home_service_banner_section  book_call_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <button className='btn-primary btn-black' onClick={() => setModalShow(true)}>Book a Call</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
        </section>
    )
}

// function MyVerticallyCenteredModal(props) {
//     const [formData, setFormData] = useState({});
//     const [mailSent, setMailSent] = useState(false);
//     const [formErrors, setFormErrors] = useState({
//         phonenumber: null
//     });

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
        
//         if(e.target.value != "")
//         {
//             setFormErrors({
//                 ...formErrors,
//                 [e.target.name]: null,
//             });
//         }
//     }

//     const handleFormSubmit = async (e) => {
//         e.preventDefault()

//         if(typeof formData.phonenumber == "undefined" || formData.phonenumber == "")
//         {
//             setFormErrors({...formErrors, phonenumber: "Please Provide Phone Number"});
//             return false;
//         }

//         let resp = await postApi("/api/send-mail?type=bookCall", formData);
//         if(resp.status)
//         {
//             toast.success("Our Expert Will Contact You Shortly!")
//             setMailSent(true);
//             setTimeout(() => {
//                 props.onHide()
//                 setTimeout(() => {
//                     setMailSent(false)
//                 }, 500)
//             }, 2000)
//         }
//         else
//         {
//             toast.error("Something's Went Wrong!!")
//         }
//     }

//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Book a Call
//           </Modal.Title>
//         </Modal.Header>

//         {!mailSent ? (
//             <>
//                 <Modal.Body>
//                     <Form onSubmit={handleFormSubmit}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Full Name</Form.Label>
//                             <Form.Control type="text" name='fullname' onChange={handleInputChange} placeholder="Enter Full Name" />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Phone Number</Form.Label>
//                             <Form.Control type="number" name='phonenumber' onChange={handleInputChange} placeholder="Enter Phonenumber" isInvalid={formErrors.phonenumber ? "isInvalid" : ""}/>
//                             <Form.Control.Feedback type="invalid">
//                                 {formErrors.phonenumber}
//                             </Form.Control.Feedback>
//                         </Form.Group>

//                         <Button type="submit" className='btn-primary btn-green'>Book</Button>
//                     </Form>
//                 </Modal.Body>
//             </>
//         ) : (
//             <>
//                 <Modal.Body>
//                     <p className='text-center'>Thanks for getting in touch! One of our experts will connect with you soon</p>
//                 </Modal.Body>
//             </>
//         )}
//       </Modal>
//     );
//   }

export default Home_book_call