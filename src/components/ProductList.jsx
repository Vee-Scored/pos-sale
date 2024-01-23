import React, { useContext, useEffect, useState } from "react";
import { productApi } from "../api/product";
import { DataContext } from "../contexts/DataContextProvider";

const ProductList = () => {
    
    const {productStored,setProductStored} = useContext(DataContext)

    
    const [ready,setReady] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const res = await productApi.get("/");
      setProductStored(res.data)
      console.log(productStored)
      setReady(true)
    };

    fetchData();
  }, []);
  return (
    <div className="overflow-x-scroll hideScrollbar">
      <table className="table-auto  border-separate border-spacing-[3px] w-full">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="px-4 py-2">Code</th>
            <th className="px-4 min-w-48 py-2">Description</th>
            <th className="px-4 py-2">Qty</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Disc</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          { ready && productStored.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-4 py-2">{item.stockId}</td>
              <td className="px-4 py-2">{item.description}</td>
              <td className="px-4 py-2 text-right">{item.quantity}</td>
              <td className="px-4 py-2 text-right">{item.price}</td>
              <td className="px-4 py-2 text-right">{item.discount}</td>

              <td className="text-right">
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
