import React from 'react'
import LocationBar from './LocationBar'
import SubContainer from './SubContainer'
import { Button } from './ui/button'

const Main = () => {
  return (
    <div className='bg-yellow-50 p-2 '>
        <LocationBar/>
        <SubContainer/>
        
    </div>
  )
}

export default Main