import './Home.css';
import React from 'react';
import {useCookies} from 'react-cookie';

export default function Home() {
    const [cookies] = useCookies(['login']);
    const msg = cookies.login && cookies.login.username ? "Connected in your account" : "Not connected ";
    
    return (
        <>
        <h1 className="Home_title">
            My Online Newspaper !!
        </h1>
        <p>{msg}</p>
        
        </>

    );
}
