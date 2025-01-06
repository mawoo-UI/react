import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert,Button,Card,Container, Spinner } from "react-bootstrap";

const PostsDetail = () => {

  const {id} = useParams();
  const [post, setPost] = useState(null); //데이터
  const [loading, setLoading] =useState(true);//로딩
  const [error, setError] =useState(null);//에러
  //ajax 구문
  //axios
  useEffect(()=> {
    const get = async () => {
    try {
      const resp = await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
      console.log(resp.data);
    }
    catch(err) {
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
    get();
  }
  }, [id, post]);
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
  //데이터처리
  return (
    <>
      <Container>
        <h1>Posts Detail</h1>
        <Card>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{post.userID}</Card.Subtitle>
            <hr />
            <Card.Text>
              {post.body}
            </Card.Text>
            <div className="text-end">
              <Button as={Link} to=""></Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
    );
  }
export default PostsDetail;