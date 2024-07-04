import { useState } from "react";
import HeaderComponent from "../../uilitility/HeaderComponent/HeaderComponent";
import { Form, Button, Alert } from "react-bootstrap";
import './login.component.scss';

function LoginComponent() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => { }

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
                  value={inputUsername}
                  placeholder="Email"
                  onChange={(e) => setInputUsername(e.target.value)}
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
                <a href="/signUp">Create Your Account</a>
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