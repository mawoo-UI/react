import axios from 'axios';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Container, Spinner, Alert, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Posts = () => {
  // ajax 구문
  // axios
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러
  useEffect(() => {
    const getList = async () => {
      try {
        const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(resp.data);
      }
      catch(err) {
        console.log(err);
        setError(err);
      }
      finally {
        setLoading(false);
      }
    }
    getList();
  }, []);

  // 로딩
  if(loading) {
    return (
      <>
        <Container className='text-center mt-5'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </Container>
      </>
    );
  }

  // 에러
  if(error) {
    return (
      <>
        <Container className='mt-5'>
          <Alert variant="danger">
            <Alert.Heading>error!</Alert.Heading>
            <p>
              에러가 발생했습니다. <br></br>
              ! {error.name} !
            </p>
            <hr />
            <p className="mb-0">
              {error.message}
            </p>
          </Alert>
        </Container>
      </>
    );
  }

  // 데이터 처리
  return (
    <div>
      <Container>
        <h1>Posts</h1>
        <ListGroup>
          {posts.map(p => <ListGroup.Item action as={Link} to={`/posts/${p.id}`} key={p.id}>{p.title}</ListGroup.Item>)}
        </ListGroup>
      </Container>
    </div>
  );
}

=======
import React, { useEffect } from "react";
import { Container, ListGroup, Spinner } from "react-bootstrap";
import { Link } from 'react-bootstrap/lib/Navbar';

const Posts = () => {
  const [posts, setPosts] = userState([]);
  const [loading, setLoading] =userState(true);
  const [error, setError] =userState(null);
  //ajax 구문
  //axios
  useEffect(()=> {
    const getList = async () => {
    try {
      const resp = await axios.get("http://jsonplaceholder.typicode.com/posts")
      console.log(resp.data);
    }
    catch(err) {
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
    getList();
  }
  }, []);
  if(loading) {
    return(
      <>
        <Container className='text-center mt-5'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      </>
    )
  }
  if (error) {
    return (
      <>
      <Container className='mt-5'>
      <Alert variant="danger">
          <Alert.Heading>error</Alert.Heading>
          <p>
            에러발생:: {error.name}
          </p>
          <hr />
          <p className="mb-0">
            {error.message}
          </p>
      </Alert>

      </Container>
    </>
    );
  }

  return (
    <>
      <Container>
        <h1>Posts</h1>
        <ListGroup>
          {post.map(p=><ListGroup.Item key={p.id} action as={Link} to={`/posts/${p.id}`}> {p.title}</ListGroup.Item>)}
        </ListGroup>
      </Container>
    </>
    );
  }
>>>>>>> refs/remotes/origin/master
export default Posts;