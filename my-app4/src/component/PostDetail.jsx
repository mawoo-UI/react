import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Spinner, Alert, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostDetail = () => {
  const {id} = useParams();
  const [post, setPost] = useState([]); // 데이터
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러

  useEffect(() => {
    const get = async () => {
      try {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(resp.data);
        // console.log(post);
      }
      catch(err) {
        console.log(err);
        setError(err);
      }
      finally {
        setLoading(false);
      }
    }
    get();
  }, [id, post]);

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

  return (
    <>
      <Container>
        <h1>Post Detail</h1>
        <Card className='mt-3'>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{post.userId}</Card.Subtitle>
            <hr />
            <Card.Text>
            {post.body}
            </Card.Text>
            <div className='text-end'>
              <Button as={Link} to="/posts" variant='dark'>To List</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default PostDetail;