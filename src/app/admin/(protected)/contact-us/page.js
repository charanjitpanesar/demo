'use client'
import { useEffect, useState } from "react";
import TableCom from "../../components/table";
import { formatDate, getApi, getUrl } from "@/frontend/helpers";
import { Dropdown, Form, InputGroup, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEllipsisV, faEye, faSearch, faSort, faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import TableHeader from "../../components/tableHeader";
import TableBody from "../../components/tableBody";


const page = () => {
  const module = {
    api: "/api/contact/get-contacts",
    tableHead: ["ID", "Date", "Name", "Email"],
    tableField: ["ID", "created_at", "fullname", "email"],
  };
  const [search, setSearch] = useState("");
  const [listing, setListing] = useState([]);

  const getListing = async () => {
    let url = new URL(getUrl(module.api));

    if(search) {
      url.searchParams.set("search", search);
    }
    // history.pushState({}, "", url)

    const data = await getApi(url);
    setListing(data.status ? data.data : [])
  }

  useEffect(() => {
    getListing();
  }, [search])

  return (
    <>
      <TableCom top_spacing="top_spacing" module={module}>
        <TableHeader>
          <div className='actions'>
              <div className='actions_left'>
                  <Form.Group className='form-group'>
                      <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                          <Form.Control
                              type="text"
                              placeholder="Search..."
                              aria-describedby="inputGroupPrepend"
                              onChange={(e) => setSearch(e.target.value)}
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
        </TableHeader>
        <TableBody>
          <Table>
              <thead>
                  <tr>
                      <th><Form.Check /></th>
                      <th>ID <FontAwesomeIcon icon={faSort} /></th>
                      <th>Date <FontAwesomeIcon icon={faSort} /></th>
                      <th>Fullname <FontAwesomeIcon icon={faSort} /></th>
                      <th>Email <FontAwesomeIcon icon={faSort} /></th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      listing.map(item => {
                          return (
                              <tr key={item._id}>
                                  <td><Form.Check /></td>
                                  <td>{item._id.slice(0, 4)}...{item._id.slice(-6)}</td>
                                  <td>{formatDate(item.created_at)}</td>
                                  <td>{item.fullname}</td>
                                  <td>{item.email}</td>
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
                          )
                      })
                  }
              </tbody>
          </Table>
        </TableBody>
      </TableCom>
    </>
  );
};

export default page;
