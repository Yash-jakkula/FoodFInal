
import React from "react";
import { createContext } from "react";

const Context = createContext();

const OrderContext = ({children}) => {
const [orderProduct,setOrderProduct] = React.useState({});
const value = {
    orderProduct,
    setOrderProduct
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