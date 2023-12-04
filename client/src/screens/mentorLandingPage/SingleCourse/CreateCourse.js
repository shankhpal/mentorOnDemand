import React, { useEffect, useState } from "react";
import MainScreen from "../../../components/MainScreen";
import { Button, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createCourseAction } from "../../../actions/coursesActions";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";
import "../../../bootstrap.min.css"
import { useHistory, Link } from "react-router-dom";
import '../viewCourses/Courses.css'
import course3 from '../../../images/course-3.jpg'

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const history = useHistory()
  const dispatch = useDispatch();

  const courseCreate = useSelector((state) => state.courseCreate);
  const { loading, error} = courseCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
    history.push("/");
  }

  
  }, [
  
    userInfo,
    history,
   

  ]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createCourseAction(title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    history.push("/unpublished");
  };



  return (
    <div>
    
      <h2 className='createcourseheader py-4 text-center text-light'><strong>EXPLORE YOUR KNOWLEDGE</strong></h2>
      <MainScreen>
      <div className='row'>
        <div className='col-md-6  m-0 p-0'>
      <Card className='createcoursepage'>
        <Card.Header>CREATE A NEW COURSE</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Course Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown className='text-dark'>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group controlId="content">
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
          <div className='my-0'>
          <Button type="submit" variant="primary">
              CREATE
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="warning">
              RESET
            </Button>
            <Link to="/unpublished">
            <Button variant='danger' className="me-2 ms-1" >
              CANCEL
            </Button>
      </Link>
      </div>
          </Form>
        </Card.Body>

       
      </Card>
      </div>
      <div className='col-md-6  m-0 p-0'>
          <Image className='createcourseimage' src={course3} alt='newim'></Image>
        </div>
      
      </div>
    </MainScreen>
    </div>
  );
}

export default CreateCourse;
