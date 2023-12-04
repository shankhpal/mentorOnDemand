import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import { Button, Form, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import reg1 from "../../images/reg2.jpg"
import {Link} from 'react-router-dom'
import './RegisterScreen.css'
function RegisterScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
);
const [picMessage, setPicMessage] = useState(null);
  const roles = ["User", "Mentor"];

  const roleOptions = roles.map((role, key) => (
    <option value={role} key={key}>
      {role}
    </option>
  ));

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const registerHandler = (e) => {
    e.preventDefault();
    setMessage("");
    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password, pic, role));

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setRole("");
  };
  const postDetails = (pics) => {
    if (
        pics ===
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
        return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg") {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "mentorondemand");
        data.append("cloud_name", "dankjst08");
        fetch("https://api.cloudinary.com/v1_1/dankjst08/image/upload", {
            method: "post",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                setPic(data.url.toString());
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        return setPicMessage("Please Select an Image");
    }
};

  useEffect(() => {
    if (userInfo) {
      if (userInfo.role === "Admin") {
        history.push("/admindashboard");
      }
      if (userInfo.role === "User") {
        history.push("/viewcourse");
      }
      if (userInfo.role === "Mentor") {
        history.push("/unpublished");
      }
    }
  }, [userInfo, history]);
  return (

    <div className="registration container p-4 mx-4" >
      <div className="row">
        
        <div className="col-md-6 pt-4 firstcol">
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {message && (<ErrorMessage variant="danger">{message}</ErrorMessage>)}
          {picMessage && (<ErrorMessage variant="danger">{picMessage}</ErrorMessage>)}
          {loading && <Loading />}
          <Form className="form-container" onSubmit={registerHandler}>
            <Form.Group className="reginp px-4 mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="reginp px-4 mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="reginp px-4 mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="reginp px-4 mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={confirmpassword}
                placeholder="Confirm Your Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="reginp px-4 mb-3" controlId="pic">
            <Form.File
              onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="image/png"
              label="Upload Profile Picture"
              custom
            />
          </Form.Group>
            <Form.Group controlId="role">
              <div className="field">
                <div className="control px-4">
                  <Form.Control
                    name="role"
                    as="select"
                    value={role}
                    className="form_input px-4"
                    onChange={(event) => setRole(event.target.value)}
                  >
                    <option value={""}>Select a role</option>
                    {roleOptions}
                  </Form.Control>
                </div>
              </div>
            </Form.Group>
           <p>
           <Button className="mx-4 px-4" variant="outline-success button-block" type="submit">
                SIGN UP
            </Button>
            <Link to='/'>
            <Button className="px-4" rounded variant="outline-secondary button-block" >
              CANCEL
            </Button>
            </Link>
            <h className="font-weight-bold pl-3  text-light fw600">
              Already ?
              <a
                href="/login"
                className="text-decoration-none pl-1 pr-4  font-weight-bold fw600"
                variant='success'
              >
                SIGN IN
              </a>
            </h> 
           {/* 
            <Link to='/'>
            <Button className="px-4" rounded variant="outline-secondary button-block" >
              CANCEL
            </Button>
            </Link>
            <h6 className="mt-3 font-weight-bold  text-light fw600">
              Already have an account ?
              <a
                href="/login"
                className="text-decoration-none pl-1  font-weight-bold fw600"
                variant='success'
              >
                SIGN IN
              </a>
            </h6> */}
           </p>

          </Form>
        </div>
        <div className='col-md-6 secondcol p-0 m-0'>
            <Image src={reg1} alt='registration'></Image>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
