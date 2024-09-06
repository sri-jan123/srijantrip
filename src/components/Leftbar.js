import React from 'react'
import { QuestionCircleOutlined} from '@ant-design/icons'
import { InsertRowLeftOutlined } from '@ant-design/icons'
function Leftbar() {
  return (
    <div className='leftbar'>
       <div className='questionicon'>
      <QuestionCircleOutlined />
      </div>
      <div className='row'>
      <InsertRowLeftOutlined />
      </div>
    </div>
  )
}

export default Leftbar
