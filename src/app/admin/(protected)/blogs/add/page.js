"use client";

import FormCom from "@/app/admin/components/Form";
import NavTop from "@/app/admin/components/navTop";
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import useEditorJS from "@/app/admin/components/Editor";
import { useState } from "react";
import { handleInputChange, postApi } from "@/frontend/helpers";

const Dashboard = () => {
    const [data, setData] = useState({
        title: "",
        description: {},
    });

    const handleEditorChange = (value) => {
        setData({
            ...data,
            description: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let res = await postApi("/api/blog/add");
    }
    
    useEditorJS("editorjs-container", handleEditorChange);
  return (
        <>
            <NavTop title="Blog" />
            <FormCom top_spacing="top_spacing" title="Blog">
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Form.Group className='form-group'>
                        <Form.Label>Title <span>*</span></Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Title"
                            name="title"
                            onChange={(e) => handleInputChange(e, data, setData)}
                        />
                        </Form.Group>
                    </Col>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Form.Group className='form-group'>
                        <Form.Label>Description <span>*</span></Form.Label>
                        <div className="border">
                            <div id="editorjs-container"></div>
                        </div>
                        </Form.Group>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Form.Group className='form-group'>
                        <Form.Label>Image <span>*</span></Form.Label>
                        <Form.Label htmlFor="file-upload" className='upload'>Upload Image</Form.Label>
                        <Form.Control
                            type="file"
                            id="file-upload"
                            placeholder="Upload Image"
                        />
                        {/* after upload --------- */}
                        {/* <div className='upload_img_area'>
                            <div className='img_area'>
                            <span className='cross_icon'>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                            <Image
                                src={profileImg3}
                                alt='...'
                                priority="low"
                            />
                            </div>
                        </div> */}
                        </Form.Group>
                    </Col>
                    <div className='btn_area'>
                        <Button type="submit" >Submit</Button>
                    </div>
                    </Row>
                </Form>
            </FormCom>
        </>
    )
}

export default Dashboard;