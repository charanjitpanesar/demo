"use client";
import { faEdit, faEllipsisV, faEye, faSearch, faSort, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import '../../../../public/admin/sass/pages/table.scss';


const TableCom = (props) => {
    const {
        top_spacing
    } = props;


    return (
        <div className={`table_area ${top_spacing && top_spacing}`}>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Card>
                        <div className='card-header'>
                            <div className='header_left'>
                                <div className='heading'>Here Is Your Users Listing!</div>
                            </div>
                            <div className='header_right'>
                                <div className='actions'>
                                    <div className='actions_left'>
                                        <Form.Group className='form-group'>
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Search..."
                                                    aria-describedby="inputGroupPrepend"
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </div>
                                    <div className='actions_right'>
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#"><span className='publish'></span> Publish</Dropdown.Item>
                                                <Dropdown.Item href="#"><span className='publish unpublish'></span> UnPublish</Dropdown.Item>
                                                <Dropdown.Item href="#"><span className='cross'><FontAwesomeIcon icon={faTimes} /></span> Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="table_main">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th><Form.Check /></th>
                                            <th>ID <FontAwesomeIcon icon={faSort} /></th>
                                            <th>NAME <FontAwesomeIcon icon={faSort} /></th>
                                            <th>EMAIL <FontAwesomeIcon icon={faSort} /></th>
                                            <th>STATUS <FontAwesomeIcon icon={faSort} /></th>
                                            <th>CREATED ON <FontAwesomeIcon icon={faSort} /></th>
                                            <th>ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Form.Check /></td>
                                            <td>1</td>
                                            <td><div className='tab'>John</div></td>
                                            <td>@johngmail.com</td>
                                            <td>
                                                <Form.Group className='form-group'>
                                                    <Form.Check type="switch" />
                                                </Form.Group>
                                            </td>
                                            <td>30-11-2023 11:58AM</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basic">
                                                        <FontAwesomeIcon icon={faEllipsisV} />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#"><span className='edit'><FontAwesomeIcon icon={faEdit} /></span> Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#"><span className='view'><FontAwesomeIcon icon={faEye} /></span> View</Dropdown.Item>
                                                        <Dropdown.Item href="#"><span className='delete'><FontAwesomeIcon icon={faTrashAlt} /></span> Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TableCom;