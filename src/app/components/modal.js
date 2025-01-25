import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import '../../../public/sass/pages/modal.scss';

const Main_modal = ({ show, setShow }) => {
    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} backdrop="static" centered>
                <Modal.Header>
                    <div className="icon" onClick={() => setShow(false)}>
                        <i className="bi bi-x-lg"></i>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Form action=''>
                        <Form.Group controlId='email' className='form-group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Enter your Email' name='email' aria-label='email' autoComplete='email' />
                        </Form.Group>
                        <Form.Group controlId='phonenumber' className='form-group'>
                            <Form.Label>Mobile No.</Form.Label>
                            <Form.Control type='tel' placeholder='Enter your Mobile No.' name='phonenumber' aria-label='phonenumber' autoComplete='tel' />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-primary btn-green' onClick={() => setShow(false)}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Main_modal