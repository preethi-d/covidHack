import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Create = () => (
    <>
      <h2>Show your flow!</h2>
      <p>Create your own new flow.</p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="Flow Name" placeholder="Flow Name" />
          <Form.Text className="text-muted">
            Name your flow something intuitive!
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="Description" placeholder="Description" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Zen" />
          <Form.Check type="checkbox" label="Focused" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Design Flow!
        </Button>
      </Form>
    </>
)