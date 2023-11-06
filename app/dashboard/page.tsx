"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { PiGraphLight } from "react-icons/pi";

// Modal.setAppElement("#root");
const page = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div>
      <div>
        <div className="flex justify-between ">
          <div className="flex  bg-primaryDark p-2 rounded-md gap-5">
            <div>
              <h1 className="font-bold text-lg items-center justify-center mobile:max-sm:text-xs font-sarif">
                10000 <span>CFA</span>
              </h1>
              <p className="font-serif">Budget</p>
            </div>
            <div className="flex items-center">
              <PiGraphLight className="text-5xl items-center justify-center font-thin mobile:max-sm:hidden" />
            </div>
          </div>
          <div className="flex bg-primaryDark p-2 rounded-md gap-5">
            <div>
              <h1 className="font-bold text-red-500 text-lg items-center justify-center font-sarif mobile:max-sm:text-sm">
                -8500 <span>CFA</span>
              </h1>
              <p className="font-serif">Expense</p>
            </div>
            <div className="flex items-center">
              <PiGraphLight className="text-5xl items-center justify-center font-thin mobile:max-sm:hidden" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mt-5">
        <div>progress bar</div>
        <button
          className="bg-BGgray text-primary p-2"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          set dairy budget
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(!isModalOpen)}
        >
          <h2>set budget</h2>
        </Modal>
      </div>
    </div>
  );
};

export default page;
