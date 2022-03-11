import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Articles.css";


export default function Articles() {

  const [data, setData] = useState( [] );

  async function getArticles() {
    const data = (await axios.get('http://localhost:8000/articles')).data;
    setData(data);
  }



   useEffect(() => {
    getArticles()
   }, []);

   function displayMedia(type, url) {
     return <img src={"http://localhost:8000/media/" +url} />
   }

   function filterContent(data, searchTerm) {
    const result = data.filter((data) => data.title.toLowerCase().includes(searchTerm)
    //    movie.runtime.toString().includes(searchTerm)
    //    movie.year.toString().includes(searchTerm)
    //  || movie.genres.sort().includes(searchTerm)
    );

    setData(result); 
    } 

    function handleTextSearch  (e) {
    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get(`http://localhost:8000/articles`).then(res => {
            if(res.data) {
                filterContent(res.data, searchTerm);
            }
        });
    }
    return (
       <>
        <h1>
            Articles !!
        </h1>

        <input
                        type="text"
                        class="searchTerm"
                        placeholder="Search..."
                        onChange={handleTextSearch} />

          {data.map( x =>  <article key={x.id}>
                              <h1 className="Article_title">{x.title}</h1>
                              <section dangerouslySetInnerHTML={{__html: x.content}}></section>
                              {displayMedia(x.mediaType,x.thumbnailURL)}
                           </article>
           )}
      </>
    );
}
