import React from 'react';
import Form from "react-bootstrap/Form";

export default ()=>{
return <div className="w-50">
    <h3 className="display-4">Sign up</h3>
    <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control name="username" type="text"></Form.Control>
    </Form.Group>
</div>
};