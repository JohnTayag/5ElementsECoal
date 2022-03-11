import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useCookies, withCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import './Register.css';

function FormSignup(props) {


    return (
        <div className='container border border-secondary mt-5 pt-3'>
            <h1 class="titre">Register</h1>
            <form onSubmit={props.onSignup}>
                <div className="mt-1 mb-4 email">
                    <input className="form-control user" placeholder='UserName' type="text" id="username" autoComplete="off" ref={props.usernameRef} />
                </div>
                <div className="mt-1 mb-4 mdp">
                    <input className="form-control pass" placeholder='PassWord' type="password" name="password" autoComplete="off" ref={props.passwordRef} />
                </div>
                <div className="mt-1 mb-4 mail">
                    <input className="form-control user" placeholder='Email' type="email" name="email" required="on" ref={props.emailRef} />
                </div>
                <div className="mt-1 mb-4 text-center">
                    <button className="btn btn-dark button" type="submit" name="signup"><span>Send</span></button>
                </div>
            </form>
        </div>
    );
}

function Signup() {
    const [cookies, setCookie, removeCookie] = useCookies(['login']);
    const usernameRef = React.createRef();
    const passwordRef = React.createRef();
    const emailRef = React.createRef();
    let navigate = useNavigate();
    function disconnect() {
        removeCookie('login');
    }

    async function onSignup(e) {
        e.preventDefault();
        console.log("error");
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,

        };
        try {
            console.log("signup");
            const p = (await axios.post('http://localhost:8000/signup', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('login', user, '/');
                navigate("/");

            }
        } catch (err) {
            console.error(err)
        }
    }

    if (cookies.login && cookies.login.token) {
        return <button  className="disconnect" id="disconnect" onClick={disconnect}>disconnect</button>;
    }
    return <FormSignup onSignup={onSignup} usernameRef={usernameRef} passwordRef={passwordRef} emailRef={emailRef} />
}

function LocalProtectedRoute({ children, ...rest }) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.username && rest.allCookies.login.token) {
        return (
            React.cloneElement(children, { username: rest.allCookies.login.username, token: rest.allCookies.login.token })
        )
    }
    return <></>
}


/**
 * @return {null}
 */
function LocalProtectedLink({ ...rest }) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.username && rest.allCookies.login.token) {
        return <Link className={rest.className} to={rest.to}>cities</Link>
    } else {
        return null;
    }
}

const ProtectedRoute = withCookies(LocalProtectedRoute);
const ProtectedLink = withCookies(LocalProtectedLink);

export { ProtectedRoute, ProtectedLink };
export default Signup;


