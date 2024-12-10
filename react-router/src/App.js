import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './Layout'
import Home from './Home'
import Blogs from './Blogs'
import Contact from './Contact'
import NoPage from './NoPage'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/nopage" element={<NoPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
