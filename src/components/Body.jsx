
import React from 'react'
import Table from './Table'
import CheckOut from './CheckOut'

const Body = () => {
  return (
    <div className='p-3 h-full  lg:flex gap-3'>
        <Table/>
        <CheckOut/>
    </div>
  )
}

export default Body