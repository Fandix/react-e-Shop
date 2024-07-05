import { Container, Nav, Navbar } from 'react-bootstrap';
import './HeaderComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { logout } from '../../store/slices/auth';
import { useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: any) => state.reducer.userSlice.isLoggedIn);

  const onSignOutClicked = async (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    const token = localStorage.getItem('JWT');
    try {
      await dispatch(logout(token)).unwrap();
      localStorage.removeItem('JWT');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary context">
      <Container>
        <Navbar.Brand href="/">E Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
          <Nav className="me-auto link-container">
            { !isLoggedIn ? <Link to="/login">Login</Link> : null }
            <Link to="/cart">Cart</Link>
            {
              isLoggedIn ?
                <span className='logout_btn' onClick={onSignOutClicked}>Logout</span>
                :
                null
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}