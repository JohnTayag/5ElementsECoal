import './Home.css';
import React from 'react';
import {useCookies} from 'react-cookie';

export default function Home() {
    const [cookies] = useCookies(['login']);
    const msg = cookies.login && cookies.login.username ? "connection OK" : "no connection";
    
    return (
        <>
        <h1 className="Home_title">
            5 Elements Newspaper !!
        </h1>
        <p>{msg}</p>
        <div className='last_article'>
            <div className='last_article_text'> <h1>When the Sun goes, Drink comes</h1></div>
            <img src='/coktail1.jpg'/>
            <button>See more</button>
        
        </div>
        <div className='popular_arcticle'>
            <h1>Popular Articles</h1>
            <div className='first' ><img src='/green_cocktail.jpg' /><h2>Free cocktail at the IUT</h2></div>
            <div className='seconde' ><img src='/cocktails2.jpg'/><h2>Winter is comming !!
</h2></div>
            <div className='third' ><img src='/coktail1.jpg'/><h2>When the sun goes,Drinks comes</h2></div>
            <div className='fourth' ><img src='/cocktails.jpg'/><h2>Coktail from Abroad</h2></div>
            </div>
        </>

    );
}
