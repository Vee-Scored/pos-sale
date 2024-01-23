import React, { useContext } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { DataContext } from "../contexts/DataContextProvider";

const Details = () => {
  const {setCashierName} = useContext(DataContext)
  return (
    <div className="items-center  mt-3 lg:mt-0 grid grid-cols-2 xl:grid-cols-4 text-black">
      <div>
        Date: <span>01/01/2024</span>
      </div>
      <div>
        Slip: <span>2</span>
      </div>
      <div>
        Counter : <span>C0040</span>
      </div>
      <div className="flex text-nowrap   items-center">
        Sales Person :{" "}
        <Select onValueChange={(val)=>{
          setCashierName(val)
        }}>
          <SelectTrigger className="max-w-[200px]  text-sm">
            <SelectValue placeholder={"Cashier-Name"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cashier-name-a">Cashier-Name-A</SelectItem>
            <SelectItem value="cashier-name-b">Cashier-Name-B</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Details;
