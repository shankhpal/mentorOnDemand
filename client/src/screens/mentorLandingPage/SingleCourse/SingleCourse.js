import React, { useEffect, useState } from "react";
import MainScreen from "../../../components/MainScreen";
import axios from "axios";
import { Button, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateCourseAction } from "../../../actions/coursesActions";
import ErrorMessage from "../../../components/ErrorMessage";
import Loading from "../../../components/Loading";
import "../../../bootstrap.min.css"
import '../viewCourses/Courses.css'
import course3 from '../../../images/course-3.jpg'
import {Link,useParams,useHistory} from 'react-router-dom'

function SingleCourse() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState("");
  const history = useHistory()
  const dispatch = useDispatch();
  const {id}=useParams();
  const courseUpdate = useSelector((state) => state.courseUpdate);
  const { loading, error } = courseUpdate;

  const courseDelete = useSelector((state) => state.courseDelete);
  const { loading: loadingDelete, error: errorDelete } = courseDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;




  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
    const fetching = async () => {
      const { data } = await axios.get(`/api/courses/${id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDate(data.updatedAt);
    };

    fetching();
  }, [id,date ,userInfo,history]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateCourseAction(id, title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    history.push("/unpublished");
  };

  return (
<div>
  
<h2 className='createcourseheader py-3 text-center text-light'><strong>EXPLORE YOUR KNOWLEDGE</strong></h2>
    <MainScreen >
    <div className='row'>
        <div className='col-md-6  m-0 p-0'>
      <Card className='createcoursepage'>
        <Card.Header>EDIT YOUR COURSE</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            <Form.Group controlId="title">
              <Form.Control
                type="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Control
                as="textarea"
                placeholder="Enter the content"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          

            <Form.Group controlId="content">
              
              <Form.Control
                type="content"
                placeholder="Enter the Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <div className='mb-2'>
            <Button variant="success" type="submit">
              UPDATE
            </Button>
           <Link to='/unpublished'>
           <Button
              className="mx-2"
              variant="danger"
            >
              CANCEL
            </Button>
           </Link>
            </div>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Updated on - {date.substring(0, 10)}
        </Card.Footer>
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

export default SingleCourse;
