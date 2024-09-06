import React from 'react'
import Internalbar from './Internalbar'
import Topbutton from './Topbutton'
import Downbutton from './Downbutton'
import Leftbar from './Leftbar'
import Images from './Images'
function Box2() {
  return (
    <div className='flexclass'>
    <div className='box2'>
      <Internalbar width="614px" backgroundColor="transparent" boxShadow="none" marginLeft="55px" showTopButton={false} showDownButtons={true} />
      <Leftbar/>
      <div className='flexsrj'>

      </div>
    </div>
    </div>
  )
}

export default Box2
