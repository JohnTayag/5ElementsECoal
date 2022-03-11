import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useCookies, withCookies } from 'react-cookie';

function FormSignup(props) {


    return (
        <div className='container border border-secondary mt-5 pt-3'>
            <form onSubmit={props.onSignup}>
                <div className="mt-1 mb-4">
                    <label className="form-label">Username:</label>
                    <input className="form-control" type="text" id="username" autoComplete="off" ref={props.usernameRef} />
                </div>
                <div className="mt-1 mb-4">
                    <label className="form-label">Password:</label>
                    <input className="form-control" type="password" name="password" autoComplete="off" ref={props.passwordRef} />
                </div>
                <div className="mt-1 mb-4">
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="email" name="email" required="on" ref={props.emailRef} />
                </div>
                <div className="mt-1 mb-4 text-center">
                    <button className="btn btn-dark" type="submit" name="signup">Sign Up</button>
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
            }
        } catch (err) {
            console.error(err)
        }
    }

    if (cookies.login && cookies.login.token) {
        return <button id="disconnect" onClick={disconnect}>disconnect</button>;
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