import { useState } from "react";
import HeaderComponent from "../../uilitility/HeaderComponent/HeaderComponent";
import { Form, Button } from "react-bootstrap";
import './login.component.scss';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { login } from "../../store/slices/auth";
import { Link, useNavigate } from "react-router-dom";

function LoginComponent() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginInfo: { email: string; password: string } = {
      email: inputEmail,
      password: inputPassword
    };
    try {
      setLoading(true);
      const result = await dispatch(login(loginInfo)).unwrap();
      localStorage.setItem("JWT", result);
      navigate('/');
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <div className="login">
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <div className="login-container">
          <div className="login-form">
            <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
              <div className="h4 mb-2 text-center">Sign In</div>
              <Form.Group className="mb-2" controlId="username">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  value={inputEmail}
                  placeholder="Email"
                  onChange={(e) => setInputEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={inputPassword}
                  placeholder="Password"
                  onChange={(e) => setInputPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {!loading ? (
                <Button className="w-100 operation-btn" variant="primary" type="submit">
                  Log In
                </Button>
              ) : (
                <Button className="w-100 operation-btn" variant="primary" type="submit" disabled>
                  Logging In...
                </Button>
              )}

              <div className="signUp-content">
                <Link to="/signUp">Create Your Account</Link>
              </div>
            </Form>
          </div>
          <div className="login-img"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;