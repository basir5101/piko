import logo from './logo.svg';
import './App.css';
import Login from './views/login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Submitted from './components/Submitted';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="submit" element={<Submitted />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
