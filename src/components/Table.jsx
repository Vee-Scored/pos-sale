import React, { useContext, useEffect, useRef, useState } from "react";
import RecordRow from "./RecordRow";
import { Axios } from "axios";
import { recordApi } from "../api/records";
import { productApi } from "../api/product";
import { DataContext } from "../contexts/DataContextProvider";

const Table = () => {
  // const [data, setData] = useState([])
  const { soldRecord, setSoldRecord, updateRecordQty, addNewRecord } =
    useContext(DataContext);

  // Example action handler
  const handleAction = (item) => {
    // Implement your action logic here
    console.log("Action clicked for item:", item);
  };

  const requestRef = useRef();

  const requestHandler = async (event) => {
    if (event.key === "Enter") {
      const inputCode = requestRef.current.value;

      if (inputCode) {
        const existingRecordIndex = soldRecord.findIndex(
          (item) => item.stockId == inputCode
        );

        if (existingRecordIndex != -1) {
          updateRecordQty(inputCode, 1);
        } else {
          try {
            const res = await productApi.get(`?stockId=${inputCode}`);
            const matchedItem = res.data;

            if (res.status < 200 || res.status >= 300) {
              if (res.status === 404) {
                alert("Data not found");
              } else {
                alert("Something's wrong!");
              }
            } else {
              const item = matchedItem[0];
              addNewRecord({
                ...item,
                quantity: 1,
                discount: 0,
                amount: item.price,
              });
            }
          } catch {
            alert("Data not found!");
          }
        }
      } else {
        return;
      }

      requestRef.current.value = null;
    }
  };

  return (
    <div className="overflow-hidden  border p-3 rounded-md basis-3/4">
      <div className="">
        <div className="flex mb-3">
          <div className="relative w-full">
            <input
              ref={requestRef}
              onKeyUp={requestHandler}
              type="search"
              id="search-dropdown"
              className="block   p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md  border-2  border-gray-300  focus:border-gray-300  outline-gray-300  dark:bg-gray-700   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-4 text-sm font-medium h-full text-white bg-blue-900 rounded-e-lg border  hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-scroll hideScrollbar">
        <table className="table-auto  border-separate border-spacing-[3px] w-full">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Qty</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Disc</th>
              <th className="px-4 py-2">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {soldRecord &&
              soldRecord.map((item, index) => (
                <RecordRow
                  handleAction={handleAction}
                  key={index}
                  item={item}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
