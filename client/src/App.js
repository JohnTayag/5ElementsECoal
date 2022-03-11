import {Route, Link, Routes} from "react-router-dom"
import Home from "./home/Home";
import Articles from "./articles/Articles";
import './App.css'
import Login, {ProtectedRoute} from "./Login/Login";
import Register from "./Register/register";
import AddArticle from "./Components/AddArticle";
import ProfilePage from "./ProfilePage/ProfilePage";



function App() {
  function toggleMenu() {
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger= document.querySelector(".hamburger");
    const closeIcon= document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");
    
    

    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  } 

  return (
    <>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <nav>
    <ul className="menu">
    <li> <Link className="menuItem" onClick={toggleMenu} to="/">Home</Link></li>
    <li> <Link className="menuItem" onClick={toggleMenu} to="/articles">News</Link></li>
    <li> <Link className="menuItem" onClick={toggleMenu} to="/Login">Login</Link></li>
    <li> <Link className="menuItem" onClick={toggleMenu} to="/Register">Register</Link></li>
    <li> <Link className="menuItem" onClick={toggleMenu} to="/AddArticle">AddArticle</Link></li>
    <li> <Link className="menuItem" onClick={toggleMenu} to="/ProfilePage">Profile Page</Link></li>
      </ul>
      <button className="hamburger" onClick={toggleMenu}> 
        <i class="menuIcon material-icons">menu</i>
        <i class="closeIcon material-icons">close</i>
      </button>
    </nav>
<img className="logo_Team" src="/logo_5_elements.png"/>

      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/articles" element={<ProtectedRoute><Articles/></ProtectedRoute>}/>
        <Route path="*" element={() => <p>Page Not Found</p>} />
        <Route exact={true} path="/Login" element={<Login/>}/>
        <Route exact={true} path="/Register" element={<Register/>}/>
        <Route exact={true} path="/AddArticle" element={<AddArticle/>}/>~
        <Route exact={true} path="/ProfilePage" element={<ProfilePage/>}/>
      </Routes>
    </>
);
}

export default App;