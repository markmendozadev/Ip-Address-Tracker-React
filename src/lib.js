import axios from "axios";
export const getIpAddress = async (ipAddress) => {
  const parameters = ipAddress ? { ipAddress: ipAddress } : {};
  const response = await axios("https://geo.ipify.org/api/v2/country,city", {
    params: {
      apiKey: "at_coQ3FTupGaKnWVtDlc9bxWorjHw0I",
      ...parameters,
    },
  });
  const data = await response.data;
  return data;
};
