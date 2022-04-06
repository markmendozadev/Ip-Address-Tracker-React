import { useContext } from "react";
import { IpContext } from "../store/ip-context";
const Card = () => {
  const ctx = useContext(IpContext);

  return (
    <section className="p-8   absolute -bottom-44 md:-bottom-52 lg:-bottom-24  z-50">
      {!ctx.data && <div>Loading..</div>}
      {ctx.data && (
        <div className="bg-white rounded-xl lg:rounded lg:grid lg:grid-flow-col gap-2 p-8 md:p-4 lg:p-8 shadow-lg">
          <div className="lg:border-r-2 lg:pl-4">
            <p className="text-sm font-bold text-gray-400 lg:mb-2 text-center lg:text-left">
              IP ADDRESS
            </p>
            <h2 className="font-bold text-center text-xl lg:text-left lg:text-2xl lg:mr-12">
              {ctx.data?.ip}
            </h2>
          </div>
          <div className="lg:border-r-2 lg:pl-4 mt-4 lg:mt-0">
            <p className="text-sm font-bold text-gray-400 lg:mb-2 text-center lg:text-left">
              LOCATION
            </p>
            <h2 className="font-bold text-center text-xl lg:text-left lg:text-2xl lg:mr-12">
              {ctx.data.location.city} {ctx.data?.location.country}
            </h2>
          </div>
          <div className="lg:border-r-2 lg:pl-4 mt-4 lg:mt-0">
            <p className="text-sm font-bold text-gray-400 lg:mb-2 text-center lg:text-left">
              TIMEZONE
            </p>
            <h2 className="font-bold text-center text-xl lg:text-left lg:text-2xl lg:mr-12">
              UTC {ctx.data?.location.timezone}
            </h2>
          </div>
          <div className="lg:pl-4 mt-4 lg:mt-0">
            <p className="text-sm font-bold text-gray-400 lg:mb-2 text-center lg:text-left">
              ISP
            </p>
            <h2 className="font-bold text-center text-xl lg:text-left lg:text-2xl lg:mr-12 w-72">
              {ctx.data?.isp}
            </h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default Card;
