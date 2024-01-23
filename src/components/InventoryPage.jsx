import React, { useContext, useEffect, useRef, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { Button } from "./ui/button";
import { DataContext } from "../contexts/DataContextProvider";
import ProductList from "./ProductList";
import { productApi } from "../api/product";

const InventoryPage = () => {
  const { addProduct } = useContext(DataContext);
  const { setPageToggle } = useContext(DataContext);
  const [openList, setOpenList] = useState("inventory");

  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    const newProduct = {
      stockId: formData.get("stockId"),
      description: formData.get("description"),
      quantity: formData.get("quantity"),
      price: formData.get("price"),
    };

    const fetchData = async () => {
      const res = await productApi.post("/", newProduct);
      // addProduct(res.data);
      console.log(res.data);
      addProduct(res.data);
      formRef.current.reset();
    };
    fetchData();
  };

  return (
    <div className="max-w-3xl mx-auto px-5">
      <Button
        onClick={() => {
          setPageToggle("sale");
        }}
        className="bg-white border-2 text-slate-400  leading-10  absolute"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill=""
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </Button>
      <div className="my-5 ">
        <h3 className="text-3xl mb-5 font-semibold text-center ">Inventory</h3>
        <Select
          onValueChange={(val) => {
            setOpenList(val);
          }}
        >
          <SelectTrigger className="max-w-[200px]  text-lg">
            <SelectValue placeholder={"Inventory"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inventory">Inventory</SelectItem>
            <SelectItem value="productList">Product List</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {openList != "inventory" ? (
        <ProductList />
      ) : (
        <form onSubmit={handleSubmit} ref={formRef} id="createForm">
          <div className="mb-3 min-h-64 flex flex-col justify-evenly ">
            <div className="flex justify-between">
              <p className="basis-1/3 text-lg font-semibold">Stock Id</p>
              <div className=" basis-2/3 border rounded-md ">
                <input
                  required
                  name="stockId"
                  placeholder="Required 8-digit"
                  className="h-full text-sm  py-2 bg-yellow-50 w-full outline-none px-3"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <p className="basis-1/3 text-lg font-semibold">Description</p>
              <div className=" basis-2/3 border rounded-md ">
                <input
                  required
                  name="description"
                  placeholder="Description"
                  className="h-full text-sm py-2 bg-yellow-50 w-full outline-none px-3"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <p className="basis-1/3 text-lg font-semibold">Price</p>
              <div className=" basis-2/3 border rounded-md ">
                <input
                  required
                  name="price"
                  placeholder="Price"
                  className="h-full text-sm py-2 bg-yellow-50 w-full outline-none px-3"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <p className="basis-1/3 text-lg font-semibold">Quantity</p>
              <div className=" basis-2/3 border rounded-md ">
                <input
                  required
                  name="quantity"
                  placeholder="Quantity"
                  className="h-full text-sm py-2  bg-yellow-50 w-full outline-none px-3"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button 
              
              className={"w-28"}
            >
              Add
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default InventoryPage;
