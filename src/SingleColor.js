import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {

  const [hexAlert,setHexAlert] =useState(false);
  const [rgbAlert,setRgbAlert] =useState(false);
  const bcg=rgb.join(',');
  console.log(bcg);
  const hex=rgbToHex(...rgb);


  useEffect(()=>{

    const timeout = setTimeout(()=>{
      setHexAlert(false);
      setRgbAlert(false);
    },2000);

    return () => clearTimeout(timeout);

  },[hexAlert,rgbAlert])



  return (

    <article  className= { `color 
                          ${
                              index>10 && 
                              'color-light'
                            }
                          ${
                            index===10 &&
                            'color-base'
                            }
                            
                        `}
              style={
                { 
                  backgroundColor:`rgb(${bcg})`
                }
              }
    >
      
    <div className="cover">
      
      {index<10 &&
      <p className="percent-value">
        {100+weight}% 
      </p>
      }

      {index>10 &&
      <p className="percent-value">
       {100-weight}% 
      </p>
      }

      {index===10 &&
      <p className="percent-value">
       {100}% 
      </p>
      }

      <p  className="hex-value"
          onClick={()=>{
            setHexAlert(true);
            navigator.clipboard.writeText(hex);
          }}>
        {hex}
      </p>

      <p  className="rgb-value"
          onClick={()=>{
            setRgbAlert(true);
            navigator.clipboard.writeText(`rgb(${bcg})`);
          }}>
        rgb({bcg})
      </p>

      {hexAlert===true &&
        <p className="alert">Hex value copied</p>
      }
      {rgbAlert===true &&
        <p className="alert">RGB value copied</p>
      }
      
    </div>

    </article>
  );
}

export default SingleColor
