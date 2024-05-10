
import React from "react";
import { createContext } from "react";

const Context = createContext();

const OrderContext = ({children}) => {
const [orderProduct,setOrderProduct] = React.useState({});
const [searchItem,setSearchItem] = React.useState("");
const [show,setShow] = React.useState(false);
const value = {
    orderProduct,
    setOrderProduct,
    searchItem,
    setSearchItem,
    show,
    setShow
}
    return(
        <>
        <Context.Provider value={value}>
         {children}
        </Context.Provider>
        </>
    )
}

export {Context,OrderContext};