import { useContext, useState } from "react";
import { getIpAddress } from "../lib";
import { IpContext } from "../store/ip-context";

import logo from "./background.png";
import Card from "./Card";
const Header = () => {
  const ipCtx = useContext(IpContext);
  const [ipAddress, setIpAddress] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await getIpAddress(ipAddress);
    ipCtx.addIpAddress(data);
  };
  return (
    <div
      className="bg-no-repeat bg-cover h-96 md:h-72"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="max-w-screen-1440 m-auto flex flex-col h-full items-center relative">
        <h2 className="text-white text-2xl md:text-4xl font-semibold my-8">
          IP Address Tracker
        </h2>
        <form onSubmit={submitHandler}>
          <div className="h-12 w-full rounded-2xl overflow-hidden">
            <input
              placeholder="Search for any IP address or domain"
              className="w-64 lg:w-custom_width px-4 h-full placeholder:text-sm md:placeholder:text-lg"
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button className="bg-black px-6 h-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </form>
        <Card />
      </div>
    </div>
  );
};

export default Header;
