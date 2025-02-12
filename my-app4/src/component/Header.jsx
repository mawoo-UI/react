import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  console.log(location);
  
  return (
    <div>
      {/* 
        Router의 Link 컴포넌트는 직접적 페이지 이동 담당
        path relative : ../ ./ / 와 같은 상대 경로 지정 가능
      */}

      {/* <a href='/'>Home</a>
      <a href='/posts'>Post</a> 얘를 */}
      
      {/* <Link to="/">Home</Link>
      <Link to="/posts">  Post</Link> 이렇게 표현한다 */}

      <Navbar expand="lg" className='mb-4' sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to="/">React Sample Post</Navbar.Brand> 

          <Nav variant="pills" activeKey={location.pathname} className='me-auto'defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/posts" eventKey="/posts" >Post</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;