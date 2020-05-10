import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Create = () => (
    <>
      <h2>Show us your flow.</h2>
      <p>Design your very own flow!</p>
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
        </Form.Group>
      </Form>
      <p>Start designing!</p>
      <Form.Text className="text-muted">
        Choose a mode for your flow:
      </Form.Text>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="zen" />
        <Form.Check type="checkbox" label="focus" />
      </Form.Group>
      <div>
        <Button variant="info" size="sm">+ new goal</Button>{' '}
        <Button variant="info" size="sm">+ add details of goal</Button>{' '}
        <Button variant="info" size="sm">+ new path</Button>{' '}
      </div>
      <div>
        <Button variant="success" size="lg">Share Flow</Button>{' '}
      </div>
    </>
)