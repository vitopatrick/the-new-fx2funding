import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useFetchUser } from "../../hooks/useFetchUser";
import Form from "./Form";

const WithdrawalModal = ({ hide, setHide }: any) => {
  return (
    <div
      className={
        hide
          ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-screen h-screen"
          : "hidden"
      }
    >
      <div className="relative md:w-[60%] w-[90%] mx-auto bg-card p-4 rounded-lg mt-10">
        <div className="absolute right-0 top-0 p-3">
          <FaTimes onClick={() => setHide(false)} color="#fff" />
        </div>
        <div>
          <h4 className="text-center text-2xl md:text-4xl font-bold underline p-3">
            Bank Withdrawal Form
          </h4>
          <p className="text-center">fill the form below to withdraw</p>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default WithdrawalModal;
