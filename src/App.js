import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {

  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList]= useState(new Values('#40E0D0').all(10));

  const handleSubmit=(e)=>{
    e.preventDefault();
    try{
      let colors= new Values(color).all(10);
      setList(colors);
    }
    catch(error){
      setError(true);
      console.log(error);
      alert("You must enter a hex color code.");
      window.location.reload();
    }
  }

  return(
    <React.Fragment>

    <section className="top-container">

      <h1>Tints 'n Shades</h1>  
      <h3>Generates 10 Tints and Shades of a color you want</h3>
      <form onSubmit={handleSubmit}>
        <input  type="text" 
                value={color}
                onChange={(e)=>setColor(e.target.value)}
                placeholder="#40E0D0"
                ></input>
        <button type="submit" className="btn" id="submit-btn">Let's Go</button>
      </form>
                <h4>click on the color format you want to copy!</h4>

    </section>

    
    <section className="colors">
    
      {list.map((color,index)=>{
        
        console.log(color);
        return <SingleColor key={index} {...color} index={index}/>

      })}
    </section>

    <section className="footer">
      &nbsp;
    </section>
    </React.Fragment>
  );

}

export default App
