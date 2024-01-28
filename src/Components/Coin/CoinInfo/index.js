import React, { useState } from 'react'
import css from "./styles.css"

function CoinInfo({title,desc}) {
    const[less,setLess]=useState(false);
 
    const shortDesc=desc.slice(0,400)+"<span style='color:var(--blue)'> Read More ...</span>";
    const longDesc=desc+"<span style='color:var(--blue)'> Read Less ...</span>";

  return (
    <div className='grey-wrapper '>
        <h2 className='coin-title'>{title}</h2>
        <p onClick={()=>setLess(!less)}className='coin-info' dangerouslySetInnerHTML={{__html: !less ? shortDesc : longDesc}}></p>
    </div>
  )
}

export default CoinInfo