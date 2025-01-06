import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header =() => {
  return (
    <>
      {/*Router의 Link컴포넌트는 직접적 페이지 이동을 담당
      path relative: .././/상대 경로 지정가능
      */}
      <h1>React Sample Post</h1>
      {/*<a href="/">Home</a> */}
      {/*<a href="/posts">Post</a> */}
     
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} >React Sample Post</Navbar.Brand>
          <Nav variant="pills" defaultActiveKey="link-0" className="me-auto">
            <Nav.Item>
          <Nav.Link as={Link} to="/" eventKey="link-0">Home</Nav.Link>
            </Nav.Item>
          <Nav.Item>
            < Nav.Link as={Link} to="/posts"  eventKey="link-1">Post</Nav.Link>
          </Nav.Item>
          </Nav>
        </Container>
    </Navbar>
    </>
  )
}
export default Header;