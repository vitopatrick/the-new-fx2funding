import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";

const Form = () => {
  // FORM STATES
  const [bankNumber, setBankNumber] = useState<string | number>("");
  const [phoneNumber, setPhoneNumber] = useState<string | number>("");
  const [bankAddress, setBankAddress] = useState<string>("");
  const [routingNumber, setRoutingNumber] = useState<string | number>("");
  const [Amount, setAmount] = useState<string | number>("");
  const [AccountNumber, setAccountNumber] = useState<string | number>("");
  const [AccountName, setAccountName] = useState<string | number>("");

  // USER CONTEXT
  const { user: state }: any = useContext(UserContext);

  // ROUTER
  const router = useRouter();

  // FUNCTION TO WITHDRAW
  async function sendWithdrawal(e: any) {
    e.preventDefault();
    if (!bankNumber || !phoneNumber || !bankAddress || !routingNumber) {
      toast("Please fill the form properly", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      return;
    }
    try {
      // get the collection Ref
      const depositRef = collection(
        store,
        "/clients",
        `/${state.email}`,
        "/withdraw"
      );
      await addDoc(depositRef, {
        amount: Amount,
        date: serverTimestamp(),
        approved: false,
        remarks: "",
        address: bankAddress,
        bank_number: bankNumber,
        phone_number: phoneNumber,
        routing_number: routingNumber,
        account_number: AccountNumber,
        account_name: AccountName,
        coin: "bank Transfer",
      });

      router.push("/dashboard");
    } catch (e: any) {
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  }

  return (
    <section>
      <div className="md:w-[80%] mx-auto p-3 my-8">
        <form className="space-y-4">
          {/*  */}
          <div className="flex md:flex-row flex-col gap-4 md:items-center">
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="bank number">Bank Number</label>
              <input
                type="text"
                name="bank_numnber"
                value={bankNumber}
                onChange={(e) => setBankNumber(e.target.value)}
                className="bg-bg rounded p-3 outline-none"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="phone number">Phone Number</label>
              <input
                type="text"
                name="phone_number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-bg rounded p-3 outline-none"
              />
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex md:flex-row flex-col gap-4 md:items-center">
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="bank address">Bank Address</label>
              <input
                type="text"
                name="address"
                value={bankAddress}
                onChange={(e) => setBankAddress(e.target.value)}
                className="bg-bg rounded p-3 outline-none"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="routing number">Routing Number</label>
              <input
                type="text"
                name="routing_number"
                value={routingNumber}
                onChange={(e) => setRoutingNumber(e.target.value)}
                className="bg-bg rounded p-3 outline-none"
              />
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex md:flex-row flex-col gap-4 md:items-center">
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="Amount">Amount</label>
              <input
                type="text"
                name="amount"
                value={Amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-bg rounded p-3 outline-none"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="account number">Bank Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={AccountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="bg-bg rounded p-3 outline-none"
              />
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex md:flex-row flex-col gap-4 md:items-center">
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="account name">Bank Account Name</label>
              <input
                type="text"
                name="account_name"
                value={AccountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="bg-bg rounded p-3 outline-none"
              />
            </div>
          </div>
          {/*  */}
          <button className="bg-bg px-4 py-2 rounded" onClick={sendWithdrawal}>
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
