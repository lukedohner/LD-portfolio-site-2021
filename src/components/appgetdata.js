// Base code from https://www.robinwieruch.de/react-hooks-fetch-data
import React, { Fragment, useState, useEffect } from 'react';
//import { useStaticQuery, graphql } from "gatsby"
import axios from 'axios';
 
function Appgetdata() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("redux");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=redux`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


 
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

     try { 
      const result = await axios(url);
 
      setData(result.data);
    } catch (error) {
      setIsError(true);
    }

      setIsLoading(false);
    };
 
    fetchData();
  }, [url]);
 
 

  return (
    <Fragment>
    <h3>Getting that data</h3>
      <input
        type="text"
        aria-label="input"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />

      <button type="button" onClick={() => setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)}>
       Search
      </button> 

      {isError && <div>Something whent wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
    ) : (
    <div>
    <p>Some data from Hacker Noon changes.</p>
    <ul>

      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
          <p>{item.created_at}</p>
        </li>
      ))}
    </ul>
    </div>
    )}
    </Fragment>
  );
}
 
export default Appgetdata;
