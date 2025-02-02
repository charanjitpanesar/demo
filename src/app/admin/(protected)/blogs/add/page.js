"use client";
import { useState } from "react";
import React from 'react';
import Editor from 'react-simple-wysiwyg';
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import FormCom from "@/app/admin/components/Form";
import NavTop from "@/app/admin/components/navTop";

import { Button, Col, Form, Row } from 'react-bootstrap';
import { handleImageChange, handleInputChange, postApi } from "@/frontend/helpers";

const Page = () => {
    const [data, setData] = useState({
        title: "",
        description: "",
        status: 1,
        image: null,
    });
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // const formData = new FormData();
        
        // for(let key in data) {
        //     formData.append(key, data[key])
        // }
        
        let res = await postApi("/api/blog/add", data);
        if(res.status) {
            redirect("/admin/blogs");
        } else {
            console.log(res)
        }
    }
    
    return (
        <>
            <NavTop title="Blog" backUrl="/admin/blogs"></NavTop>
            <FormCom top_spacing="top_spacing" title="Blog">
                <Form method="post" onSubmit={handleFormSubmit}>
                    <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Form.Group className='form-group'>
                        <Form.Label>Title</Form.Label>
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
                        <Form.Label>Description</Form.Label>
                        <Editor 
                            value={data.description}
                            name="description"
                            onChange={(e) => handleInputChange(e, data, setData)}
                        />
                        </Form.Group>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Form.Group className='form-group'>
                        <Form.Label>Image</Form.Label>
                        <Form.Label htmlFor="file-upload" className='upload'>Upload Image</Form.Label>
                        <Form.Control
                            type="file"
                            id="file-upload"
                            placeholder="Upload Image"
                            name="image"
                            onChange={(e) => handleImageChange(e, data, setData)}
                        />
                        {/* after upload --------- */}
                        {
                            data.image ? (
                                <div className='upload_img_area'>
                                    <div className='img_area'>
                                    <span className='cross_icon'>
                                        <FontAwesomeIcon icon={faTimes} onClick={() => setData({...data, image: null})} />
                                    </span>
                                    <Image
                                        src={URL.createObjectURL(data.image)}
                                        alt='...'
                                        priority="low"
                                        width={100}
                                        height={100}
                                    />
                                    </div>
                                </div>
                            ) : ""
                        }
                        </Form.Group>
                    </Col>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Form.Group className='form-group'>
                        <Form.Label>Publish</Form.Label>
                        <Form.Group className='form-group'>
                            <Form.Check 
                                type="switch" 
                                defaultChecked={data.status == 1} 
                                name="status"
                                onChange={(e) => handleInputChange(e, data, setData)
                            } />
                        </Form.Group>
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

export default Page;