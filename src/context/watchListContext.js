import React, { createContext, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState([
    "bitcoin",
    "ethereum",
    "ripple",
    "dai",
  ]);

  const handleDelete = (coin) =>{
    setWatchList(watchList.filter(el=>{
      return el!==coin
    }))
  }

  return (
    <WatchListContext.Provider value={{ watchList , handleDelete}}>
      {props.children}
    </WatchListContext.Provider>
  );
};
