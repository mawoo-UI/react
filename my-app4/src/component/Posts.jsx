import axios from 'axios';
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
export default Posts;