import {Route, Link, Routes} from "react-router-dom"
import Home from "./home/Home";
import Articles from "./articles/Articles";
import './App.css'
import Login, {ProtectedRoute} from "./Login/Login";

function App() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">News</Link>
      <Link to="/Login">Login</Link>
    </nav>
    <img src="5elements.png"></img>
      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/articles" element={<ProtectedRoute><Articles/></ProtectedRoute>}/>
        <Route path="*" element={() => <p>Page Not Found</p>} />
        <Route exact={true} path="/Login" element={<Login/>}/>
      </Routes>
    </>
);
}

export default App;
