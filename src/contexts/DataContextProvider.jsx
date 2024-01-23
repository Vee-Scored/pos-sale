import exp from "constants";
import { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [inventoryRun, setInventoryRun] = useState(false);
  const [cashierName, setCashierName] = useState();
  const [pageToggle, setPageToggle] = useState("Sale");
  const [productStored,setProductStored] = useState([])
  const addProduct =(newProduct)=>{
    setProductStored(
        [...productStored,newProduct]
    )
}
  const [soldRecord, setSoldRecord] = useState([]);

  const addNewRecord = (newRecord) => {
    setSoldRecord([...soldRecord, newRecord]);
  };

  const updateRecordQty =(code,qty) => {
    setSoldRecord(
      soldRecord.map(record => record.stockId == code ? {...record,quantity : parseInt(record.quantity) + parseInt(qty),amount :parseInt(record.amount) + parseInt(record.price) } : record )
    )
  }

  const replaceRecordQty =(code,qty) => {
    setSoldRecord(
      soldRecord.map(record => record.stockId == code ? {...record,quantity :  parseInt(qty),amount :parseInt(qty) * parseInt(record.price) } : record )
    )
  }
 

  const toggleInventory = () => {
    setInventoryRun(!inventoryRun);
  };

  return (
    <DataContext.Provider
      value={{
        inventoryRun,
        toggleInventory,
        cashierName,
        setCashierName,
        pageToggle,
        setPageToggle,
        addProduct,
        productStored,
        setProductStored,
        addNewRecord,
        soldRecord, 
        setSoldRecord,
        updateRecordQty,
        replaceRecordQty
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
