"use client";

import { useState } from "react";
import { Button, Form } from "react-bootstrap";


const page = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    });
  }
    
  return (
    <>
      <Form className="p-5 bg-white" onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" onChange={(e) => setLoginData({ ...loginData, "email": e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setLoginData({ ...loginData, "password": e.target.value })} />
        </Form.Group>
        <Button variant="primary" size="md" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default page;
