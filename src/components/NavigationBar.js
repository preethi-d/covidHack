import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    font-size: 1.0em;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 2.5em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
`;
export const NavigationBar = () => (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">flow.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link href="/active">Active</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/completed">Completed</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/create">Create</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/discover">Discover</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
)