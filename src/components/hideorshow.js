import React, { useState } from 'react';
import Image from "../components/image"

function Hideorshow(props) {
  const [count, setCount] = useState(1);
  const [isare, setIsare] =useState("is");
  const [people, setPeople] = useState("Person")
  const [numberOfGuest, setNumberOfGuest] = useState(1000);
  const [isHidden, setisHidden] = useState(false);

function handleClick(e) { 
  e.preventDefault();
  setNumberOfGuest(numberOfGuest - 1);
  setCount(count + 1);
  setIsare("are")
  setPeople("People")
  setisHidden(!isHidden);
  console.log('///////handleClick(e)////// '+count+numberOfGuest);   
}
//this.handleClick = this.handleClick.bind(this); 

  return (
    <div>
        
          
        <h3>Call Us Now to RSVP!<br /><br />There {isare} {count} {people} coming</h3>
        <h3>{numberOfGuest} Are Not Coming {isHidden}</h3>

        <button className="buttonHideShow" onClick={handleClick}>{isHidden ? <p>SHOW the plant</p> : <p>HIDE the plant</p>}</button>

        {!isHidden && <p>You can Hide or Show this plant</p>}
        {!isHidden && <div style={{ maxWidth: `312px`, marginBottom: `1.45rem`}}>
        <Image />
        </div>}
        {isHidden ? <h3>Truly Hidden</h3> : <h3>Not Hidden</h3>}
       </div>
  )
}
export default Hideorshow