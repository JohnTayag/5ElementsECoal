import React from 'react';
import {useCookies, withCookies} from 'react-cookie';

export default function ProfilePage() {
    const [cookies] = useCookies(['login']);
    const msg = cookies.login && cookies.login.username ? "connection OK" : "no connection";
    


    
    return (
        <>
        <h1 className="Home_title">
            Profile Page
        </h1>
        <div> <img src='/index1.jpg'/></div>
        <div classname="mt-1 mb-4 email" >
        <input className="form-control user" placeholder='Username' type="text" id="username"/>
        </div>
        <div classname="mt-1 mb-4 email" >
        <input className="user" placeholder='User Email' type="text" id="email"/>
        </div>
        
        
            <div className='popular_arcticle'>
            <h1>Recent Article</h1>
            <div className='first' ><img src='/green_cocktail.jpg' /><h2>Free cocktail at the IUT</h2></div>
            <div className='seconde' ><img src='/cocktails2.jpg'/><h2>Winter is comming !!
</h2></div>
            <div className='third' ><img src='/coktail1.jpg'/><h2>When the sun goes,Drinks comes</h2></div>
            <div className='fourth' ><img src='/cocktails.jpg'/><h2>Coktail from Abroad</h2></div>
            </div>
        </>

    );
}