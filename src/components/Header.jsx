import React, { useContext, useRef } from "react";

import { DataContext } from "../contexts/DataContextProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Header = () => {
  const { cashierName,setPageToggle} = useContext(DataContext);
 
  return (
    <header>
      <div className="bg-blue-900 p-3 md:flex justify-between ">
        <div className="flex gap-3 justify-between ">
          <h1 className="text-3xl font-semibold text-white text-nowrap ">
            V6 POS
          </h1>
          <div className="flex gap-2">
            <Select onValueChange={(value)=>{
              setPageToggle(value)
            }}>
              <SelectTrigger className="max-w-[200px] !text-white text-lg">
                <SelectValue placeholder={"Sale"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sale">Sale</SelectItem>
                <SelectItem value="inventory">Inventory</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="max-w-[200px] !text-white text-lg">
                <SelectValue placeholder={"Setup"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="setup">Setup</SelectItem>
                <SelectItem value="promotion">Promotion</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex ">
          <div className="grow"></div>
          <h4 className="text-white font-semibold leading-10 uppercase">{cashierName}</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
