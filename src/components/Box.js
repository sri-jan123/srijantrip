import React from 'react'
import Internalbar from './Internalbar'
import Textbox from './Textbox'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
function Box() {

  return (
    <div className='box'>
         <Internalbar showTopButtons={true}/>
         <Textbox/>

         <Leftbar/>
         
    </div>
  )
}

export default Box
