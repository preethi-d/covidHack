import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

export const Discover = (props) => (
    <>
      <br />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="Search" placeholder="Search" />
        </Form.Group>
      </Form>
      <p>Trending flows you may like:</p>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Your first pull-up.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">@fitspo98</Card.Subtitle>
          <Card.Text>
            Achieve your first unassisted pull-up by following this flow!
          </Card.Text>
          <Card.Text className="mb-2 text-muted">98 likes 42 comments</Card.Text>
          <Card.Link href="#">Get flow-y!</Card.Link>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Starting up.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">@ilovebooks</Card.Subtitle>
          <Card.Text>
            Start from the basics, and read your way to first start-up!
          </Card.Text>
          <Card.Text className="mb-2 text-muted">154 likes 40 comments</Card.Text>
          <Card.Link href="#">Get flow-y!</Card.Link>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Dessert Master.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">@yummmm_</Card.Subtitle>
          <Card.Text>
            Master the art of making desserts - cakes, ice-cream, muffins!
          </Card.Text>
          <Card.Text className="mb-2 text-muted">104 likes 29 comments</Card.Text>
          <Card.Link href="#">Get flow-y!</Card.Link>
        </Card.Body>
      </Card>

      </CardDeck>
    </>

)