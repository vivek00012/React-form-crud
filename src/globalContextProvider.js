import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [submitCounts, setSubmitCount] = useState(0);

  const addData = (record) => {
    setData([...data, { ...record }]);
  };

  const getTableData = data;

  const removeData = (email) => {
    console.log('functional email', email);
    setData(data.filter((d) => d.email !== email));
    console.log('in api', data);
  };

  const incrementSubmitCount = () => {
    setSubmitCount((v) => v + 1);
  };

  const decrementSubmitCount = () => {
    setSubmitCount((v) => v - 1);
  };

  const getSubmitCount = submitCounts;

  return (
    <GlobalContext.Provider
      value={{
        addData,
        removeData,
        incrementSubmitCount,
        getSubmitCount,
        getTableData,
        decrementSubmitCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
