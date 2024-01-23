import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../contexts/DataContextProvider'

const RecordRow = ({item,handleAction}) => {
    const {soldRecord,replaceRecordQty} = useContext(DataContext)

    const [quantity, setQuantity] = useState(item.quantity)

    useEffect(()=>{
      setQuantity(item.quantity)
    },[soldRecord])
    const inputChange =(event)=>{

        event.target.children[0].disabled = false;
        event.target.children[0].focus();
        
    }

  return (
    <tr  className="border-b border-gray-200">
                <td  className="px-4 py-2"><input disabled  className="w-24 pointer-events-none  border rounded  px-2 py-1" value={item.stockId} onChange={()=>{
                    
                }
                } type="text"  /></td>
                <td className="px-4 py-2"><input disabled className="border rounded px-2 py-1 " onChange={()=>{}} type="text" value={item.description} /></td>
               
                <td onDoubleClick={inputChange} className="px-4 py-2"><input disabled className="  pointer-events-none border w-12 rounded px-2 py-1 text-right" onChange={(event)=>{
                    setQuantity(event.target.value);

                }} onBlur={(event)=>{
                  const code = item.stockId;
                  replaceRecordQty(code,quantity)
                }} type="text" value={quantity} /></td>
               
                <td className="px-4 py-2"><input disabled  className="w-20 border rounded text-right px-2 py-1" onChange={()=>{}} type="text" value={item.price} /></td>
               
                <td className="px-4 py-2"><input disabled className="w-20 text-right border rounded px-2 py-1" onChange={()=>{}} type="text" value={item.discount} /></td>
                
                <td className="px-4  py-2"><input disabled className="w-20 border text-right rounded px-2 py-1" onChange={()=>{}} type="text" value={item.amount} /></td>
               
                <td>
                  <button
                    className="px-2 py-1 rounded"
                    onClick={() => handleAction(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
  )
}

export default RecordRow