import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './uilitility/home/home';
import Login from './component/login/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
          <Route element={<Login />} path='/login'></Route>
      </Routes>
    </div>
  );
}

export default App;
