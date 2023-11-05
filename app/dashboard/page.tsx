import React from "react";
import { PiGraphLight } from "react-icons/pi";

const page = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between ">
          <div className="flex bg-primaryDark p-2 rounded-md gap-5">
            <div>
              <h1 className="font-bold text-lg items-center justify-center">
                10000<span>CFA</span>
              </h1>
              <p>Budget</p>
            </div>
            <div className="flex items-center">
              <PiGraphLight className="text-5xl items-center justify-center font-thin" />
            </div>
          </div>
          <div className="flex bg-primaryDark p-2 rounded-md gap-5">
            <div>
              <h1 className="font-bold text-lg items-center justify-center">
                10000<span>CFA</span>
              </h1>
              <p>Expense</p>
            </div>
            <div className="flex items-center">
              <PiGraphLight className="text-5xl items-center justify-center font-thin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
