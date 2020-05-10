import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Flow from "./Flow";

const nodes = [
  {
    title: "Hanging",
    desc: "Passive Hangs (15s)\nActive Hangs alternating (10s)",
    name: "hanging",
    type: "root",
    position: {
      x: 200,
      y: 50
    },
    links: ['resistance', 'reverse']
  },
  {
    title: "Resistance",
    desc: "3 sets of 3 aided pull ups",
    name: "resistance",
    type: "node",
    position: {
      x: 100,
      y: 150
    },
    links: ['resistance2']
  },
  {
    title: "Resistance II",
    desc: "5 sets of 3 aided pull ups",
    name: "resistance2",
    type: "node",
    position: {
      x: 100,
      y: 250
    },
    links: ['freepullup']
  },
  {
    title: "Reverse",
    desc: "3 sets of 5 reverse pull ups",
    name: "reverse",
    type: "node",
    position: {
      x: 300,
      y: 150
    },
    links: ['freepullup']
  },
  {
    title: "Free Pull Ups",
    desc: "3 sets of 5 free (unaided) pull ups",
    name: "freepullup",
    type: "goal",
    position: {
      x: 200,
      y: 350
    }
  },
];

export const Create = () => (
    <>
      <div style={{display: "flex"}}>
        <div>
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
        </div>
        <Flow nodes={nodes} width={500} height={600}/>
      </div>
    </>
)
