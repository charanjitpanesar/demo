"use client";
import { useEffect, useState } from "react";
import TableCom from "../../components/table";
import { formatDate, getApi, getUrl } from "@/frontend/helpers";
import { Dropdown, Form, InputGroup, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEllipsisV,
  faEye,
  faFilter,
  faSearch,
  faSort,
  faTimes,
  faTimesCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import TableHeader from "../../components/tableHeader";
import TableBody from "../../components/tableBody";
import { usePathname, useSearchParams } from "next/navigation";
import NavTop from "../../components/navTop";

const page = () => {
  const module = {
    api: "/api/contact/get-contacts",
    title: "Contacts",
  };
  const path = usePathname();
  const defaultFilters = {
    search: "",
    createdAtFrom: [],
    createdAtTo: [],
    status: "",
  };
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState(defaultFilters);
  const [listing, setListing] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = (id) => {
    setSelectedIds({...selectedIds, id});
  }

  const getListing = async () => {
    let url = new URL(getUrl(module.api));
    let frontendUrl = new URL(path, window.location.origin);

    for (let key in filters) {
      if (filters[key] != "") {
        url.searchParams.set(key, filters[key]);
        frontendUrl.searchParams.set(key, filters[key]);
      }
    }

    history.pushState({}, "", frontendUrl);

    const data = await getApi(url);
    setListing(data.status ? data.data : []);
  };

  const setUrl = () => {
    for (let key in filters) {
      setFilters({
        ...filters,
        [key]: searchParams.get(key) ? searchParams.get(key) : "",
      });
    }
  };

  useEffect(() => {
    getListing();
  }, [filters]);

  useEffect(() => {
    setUrl();
  }, []);

  return (
    <>
      <NavTop title={module.title}>
        <Dropdown show={show}>
          <Dropdown.Toggle id="dropdown-basic">
            <div className="btn_area">
              <div className="back_btn" onClick={() => setShow(true)}>
                <span className="filter_icon">
                  <FontAwesomeIcon icon={faFilter} />
                </span>{" "}
                Filter
              </div>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="cross_icon" onClick={() => setShow(false)}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            <Dropdown.Item as={"div"}>
              <div className="date_area">
                <div className="left_side">
                  <Form.Group className="form-group">
                    <Form.Label>Created On</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          createdAtFrom: e.target.value,
                        })
                      }
                      value={filters.createdAtFrom}
                    />
                  </Form.Group>
                </div>
                <div className="right_side">
                  <Form.Group className="form-group">
                    <Form.Control
                      required
                      type="date"
                      onChange={(e) =>
                        setFilters({ ...filters, createdAtTo: e.target.value })
                      }
                      value={filters.createdAtTo}
                    />
                  </Form.Group>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item as={"div"}>
              <div className="select_area">
                <Form.Check
                  type={"radio"}
                  label="All"
                  name="status"
                  onChange={(e) => setFilters({ ...filters, status: "" })}
                />
                <Form.Check
                  type={"radio"}
                  label="Publish"
                  name="status"
                  onChange={(e) => setFilters({ ...filters, status: "publish" })}
                  checked={filters.status == "publish"}
                />
                <Form.Check
                  type={"radio"}
                  label="UnPublish"
                  name="status"
                  onChange={(e) =>
                    setFilters({ ...filters, status: "unpublish" })
                  }
                  checked={filters.status == "unpublish"}
                />
              </div>
            </Dropdown.Item>
            <div className="btn_main">
              <div className="btn_area">
                <div
                  className="btn btn-primary reset_btn"
                  onClick={() => setFilters(defaultFilters)}
                >
                  Reset
                </div>
              </div>
              {/* <div className="btn_area" onClick={() => setShow(false)}>
                <div className="btn btn-primary">Submit</div>
              </div> */}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </NavTop>
      <TableCom top_spacing="top_spacing">
        <TableHeader title={module.title}>
          <div className="actions">
            <div className="actions_left">
              <Form.Group className="form-group">
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    aria-describedby="inputGroupPrepend"
                    onChange={(e) =>
                      setFilters({ ...filters, search: e.target.value })
                    }
                    value={filters.search}
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="actions_right">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <FontAwesomeIcon icon={faEllipsisV} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <span className="publish"></span> Publish
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <span className="publish unpublish"></span> UnPublish
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <span className="cross">
                      <FontAwesomeIcon icon={faTimes} />
                    </span>{" "}
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </TableHeader>
        <TableBody>
          <Table>
            <thead>
              <tr>
                <th>
                  <Form.Check/>
                </th>
                <th>
                  ID <FontAwesomeIcon icon={faSort} />
                </th>
                <th>
                  Date <FontAwesomeIcon icon={faSort} />
                </th>
                <th>
                  Fullname <FontAwesomeIcon icon={faSort} />
                </th>
                <th>
                  Email <FontAwesomeIcon icon={faSort} />
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listing.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>
                      <Form.Check onClick={() => handleSelect(item._id)}/>
                    </td>
                    <td>
                      {item._id.slice(0, 4)}...{item._id.slice(-6)}
                    </td>
                    <td>{formatDate(item.created_at)}</td>
                    <td>{item.fullname}</td>
                    <td>{item.email}</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">
                            <span className="edit">
                              <FontAwesomeIcon icon={faEdit} />
                            </span>{" "}
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <span className="view">
                              <FontAwesomeIcon icon={faEye} />
                            </span>{" "}
                            View
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <span className="delete">
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </span>{" "}
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableBody>
      </TableCom>
    </>
  );
};

export default page;
