import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/Header'

import Main from './components/Main'
import Body from './components/Body'
import { DataContext } from './contexts/DataContextProvider'
import InventoryPage from './components/InventoryPage'


function App() {
  
const {inventoryRun,pageToggle} = useContext(DataContext)

  return (
    <div className='overflow-hidden min-h-screen '>
      
      {pageToggle == 'inventory' ? <InventoryPage/> : <>
      <Header/>
      <Main/>
      <Body/>
      </>}
    </div>
  )
}

export default App
