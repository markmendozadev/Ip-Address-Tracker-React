import { createContext, useEffect, useState } from "react";
import { getIpAddress } from "../lib";

export const IpContext = createContext({
  data: null,
  getIpAddress: (data) => {},
});

const IpProvider = (props) => {
  const [state, setIpData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getIpAddress();
      setIpData(data);
    };
    fetchData();
  }, []);
  const addIpAddress = async (data) => {
    setIpData(data);
  };
  const ipContext = {
    data: state,
    addIpAddress,
  };
  return (
    <IpContext.Provider value={ipContext}>{props.children}</IpContext.Provider>
  );
};

export default IpProvider;
