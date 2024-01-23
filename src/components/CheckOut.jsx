import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DataContext } from "../contexts/DataContextProvider";

const CheckOut = () => {
  const { soldRecord } = useContext(DataContext);

  return (
    <div className="basis-1/4 border   rounded-md p-3">
      <div className="mb-3 min-h-64 flex flex-col justify-evenly  ">
        {soldRecord && (
          <>
            <div className="flex justify-between">
              <p className="basis-1/3 text-lg font-semibold">Total Qty.</p>
              <div className="h-8 basis-2/3 border text-right px-2 py-1 rounded-md bg-yellow-50">
                {soldRecord
                  .reduce((pv, cv) => {
                    return pv + cv.quantity;
                  }, 0)
                  .toFixed(2)}
              </div>
            </div>

            <div className="flex justify-between">
              <p className="basis-1/3 text-lg font-semibold">Item Count.</p>
              <div className="h-8 basis-2/3 border text-right px-2 py-1 rounded-md bg-yellow-50">
                {soldRecord.length.toFixed(2)}
              </div>
            </div>

            <div className="flex justify-between">
              <p className="basis-1/3 text-lg font-semibold">Sub Total</p>
              <div className="h-8 basis-2/3 border text-right px-2 py-1 rounded-md bg-yellow-50">
                {soldRecord
                  .reduce((pv, cv) => {
                    return pv + parseInt(cv.amount);
                  }, 0)
                  .toFixed(2)}
              </div>
            </div>

            <div className="flex justify-between">
              <p className="basis-1/3 text-lg font-semibold">Discount</p>
              <div className="h-8 basis-2/3 flex gap-4">
                <div className="border rounded-md bg-yellow-50 text-right px-2 py-1 basis-1/3">
                  0
                </div>{" "}
                %{" "}
                <div className="border  bg-yellow-50 text-right px-2 py-1 basis-2/3 rounded-md">
                  0
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="basis-1/3 text-lg font-semibold">Tax</p>
              <div className="h-8 basis-2/3 flex gap-4">
                <div className="border rounded-md bg-yellow-50 text-right px-2 py-1 basis-1/3">
                  0
                </div>{" "}
                %{" "}
                <div className="border  bg-yellow-50 basis-2/3 text-right px-2 py-1 rounded-md">
                  0
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="basis-1/3 text-lg font-semibold">Total</p>
              <div className="h-8 basis-2/3 border rounded-md text-right px-2 py-1 bg-yellow-50"></div>
            </div>
          </>
        )}
      </div>

      <div>
        <div className="  rounded-md">
          <table className="table-auto w-full border-separate border-spacing-1 ">
            <thead className="bg-blue-900 ">
              <tr>
                <th className="px-3 py-1 text-nowrap text-white">
                  Payment Type
                </th>
                <th className="px-3 py-1 text-white">Amount</th>
                <th className="px-3 py-1 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr>
                <td className="px-4 py-2 ">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Payment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Payment</SelectLabel>
                        <SelectItem value="kbz-pay">KBZ</SelectItem>
                        <SelectItem value="wave-pay">WAVE</SelectItem>
                        <SelectItem value="aya-pay">AYA</SelectItem>
                        <SelectItem value="yoma-pay">YOMA</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </td>
                <td className="px-4 py-2">$100.00</td>
                <td className="px-4 py-2">
                  <button className="bg-white text-blue-900 px-2 py-1 rounded-md">
                    Action
                  </button>
                </td>
              </tr>

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
