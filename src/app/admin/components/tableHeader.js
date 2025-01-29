"use client";
import { faEdit, faEllipsisV, faEye, faSearch, faSort, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import '../../../../public/admin/sass/pages/table.scss';


const TableHeader = (props) => {
    return (
        <div className='card-header'>
            <div className='header_left'>
                <div className='heading'>Here Is Your Users Listing!</div>
            </div>
            <div className='header_right'>
                {props.children}
            </div>
        </div>
    )
}

export default TableHeader;