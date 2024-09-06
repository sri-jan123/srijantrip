import React from 'react'

function Downbutton({label1,style, onClick}) {
  return (
    <div className='downbtn'>
      <button onClick={onClick} style={style}>{label1}</button>
    </div>
  )
}

export default Downbutton
