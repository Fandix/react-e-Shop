import { useState } from "react";
import HeaderComponent from "../../uilitility/HeaderComponent/HeaderComponent"
import './signup.component.scss'
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { register } from "../../store/slices/auth";
import { AppDispatch } from '../../store';
import { useNavigate } from "react-router-dom";

export default function SignUpComponent() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputName, setInputName] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signUpInfo: { name: string; email: string; password: string } = {
      name: inputName,
      email: inputEmail,
      password: inputPassword
    };

    try {
      const result = await dispatch(register(signUpInfo)).unwrap();
      if (result === 200) {
        navigate('/login');
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="signUp">
      <HeaderComponent></HeaderComponent>
      <div className="signUp_content">
        <div className="signUp-container">
          <div className="signUp-img"></div>
          <div className="signUp-form">
            <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
              <div className="h4 mb-2 text-center">SignUp</div>
              <Form.Group className="mb-2" controlId="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  value={inputName}
                  placeholder="Name"
                  onChange={(e) => setInputName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="email">
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

              <Button className="w-100 operation-btn" variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}