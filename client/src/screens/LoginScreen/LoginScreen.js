import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { Button, Form, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import reg1 from '../../images/reg2.jpg';
import {Link} from 'react-router-dom'
function LoginScreen() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
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
    <div className="registration container  pt-3 mx-4  " >
    <div className="row">
      
      <div className="col-md-6 pt-5 firstcol">
          
          <Form className="form-container pt-5" onSubmit={loginHandler}>
          {error && (
            <ErrorMessage variant="danger">{userLogin.error}</ErrorMessage>
          )}
            {loading && <Loading />}
            <Form.Group className="mb-3 px-4 py-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 px-4" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

           <div>
           <Button rounded className="m-4 px-4" variant="outline-success button-block" type="submit">
              SIGN IN
            </Button>
            <Link to='/'>
            <Button className="px-4" rounded variant="outline-secondary button-block" >
              CANCEL
            </Button>
            </Link>
            <h className="mt-3 pl-4 font-weight-bold text-light  fw600">
              New ?
              <a
                href="/register"
                className="text-decoration-none pr-4 pl-1  font-weight-bold fw600"
              >
                SIGN UP
              </a>
            </h>
           </div>
          </Form>
        </div>
        <div className='col-md-6 secondcol p-0 m-0'>
            <Image src={reg1} alt='registration'></Image>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
