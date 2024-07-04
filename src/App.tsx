import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import HomeComponent from './uilitility/home/homeComponent';
import LoginComponent from './component/loginComponent/login.component';
import SignUpComponent from './component/signup/signup.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<HomeComponent />}></Route>
        <Route element={<LoginComponent />} path='/login'></Route>
        <Route element={<SignUpComponent />} path='/signUp'></Route>
      </Routes>
    </div>
  );
}

export default App;
