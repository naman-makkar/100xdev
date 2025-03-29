import React, { createContext } from "react";

export const CountContext = React.createContext({
    count: 0, // default value for count
  setCount: () => {}, 
});