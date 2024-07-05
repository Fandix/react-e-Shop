import './App.css';
import { Route, HashRouter, Routes, Link } from 'react-router-dom';
import HomeComponent from './uilitility/home/homeComponent';
import LoginComponent from './component/loginComponent/login.component';
import SignUpComponent from './component/signup/signup.component';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index path='/' element={<HomeComponent />}></Route>
          <Route element={<LoginComponent />} path='/login'></Route>
          <Route element={<SignUpComponent />} path='/signUp'></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
