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
          <Route index element={<Submitted />} />
          <Route path="submit" element={<Submitted />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
