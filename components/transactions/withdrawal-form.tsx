import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import WithdrawalModal from "./WithdrawalModal";

const coins = ["Ethereum", "Bitcoin", "USDT"];

const WithdrawalForm = () => {
  const [amount, setAmount] = useState<string | number>("");
  const [selectedCoin, setSelectedCoin] = useState<string | number>("");
  const [bankWithdrawalModal, setBankWithdrawalModal] =
    useState<boolean>(false);
  const [remarks, setRemarks] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const { user: state }: any = useContext(UserContext);

  const router = useRouter();

  const sendWithdrawal = async (e: any) => {
    if (!amount || !selectedCoin || !remarks) {
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
        amount,
        date: serverTimestamp(),
        coin: selectedCoin,
        approved: false,
        remarks,
        address,
      });

      router.reload();
    } catch (e: any) {
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <div className="mx-2 text-white font-db">
      <h3 className="font-sec py-3 text-lg md:text-xl font-semibold">
        Withdraw Here
      </h3>
      <p className="text-sm text-text_min font-sec">
        Withdraw your trading profit, staking and other exchange profits
      </p>
      {/* form section */}
      <section className="my-3">
        <form className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          {/* enter amount  */}
          <div className="flex-1">
            <label htmlFor="amount" className="font-sec py-2 text-sm">
              Enter Amount
            </label>
            <div className="w-full bg-neutral-300 py-2 rounded">
              <input
                type="text"
                name="amount"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent text-bg outline-none px-2"
              />
            </div>
          </div>
          {/* enter remarks  */}
          <div className="flex-1">
            <label
              htmlFor="Remarks"
              className="font-sec py-2 text-sm text-text_min"
            >
              Remarks
            </label>
            <div className="w-full bg-neutral-300 py-2 rounded">
              <input
                type="text"
                name="remarks"
                id="remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="bg-transparent text-bg outline-none px-2"
              />
            </div>
          </div>
          {/* end of enter remarks */}
          {/* select coin */}
          <div className="flex-1">
            <label
              htmlFor="coin type"
              className="font-sec py-2 text-sm text-text_min"
            >
              Select coin
            </label>
            <div className="w-full bg-neutral-300 py-2 rounded">
              <select
                name="coin"
                id="coin"
                className="bg-transparent text-bg outline-none"
                value={selectedCoin}
                onChange={(e) => setSelectedCoin(e.target.value)}
              >
                {coins.map((coin) => (
                  <option key={coin} value={coin}>
                    {coin}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* end of select coin */}
          {/* enter amount  */}
          <div className="flex-1">
            <label htmlFor="amount" className="font-sec py-2 text-sm">
              Enter address
            </label>
            <div className="w-full bg-neutral-300 py-2 rounded">
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-transparent text-bg outline-none px-2"
              />
            </div>
          </div>
        </form>
        <div>
          <button
            className=" my-5 px-4 py-3 rounded bg-bg"
            onClick={() => setBankWithdrawalModal(true)}
          >
            Bank Withdrawal
          </button>
        </div>
        <button
          onClick={sendWithdrawal}
          className="bg-bg rounded px-3 py-2 font-sec mt-2 w-full md:w-fit"
        >
          Send Request
        </button>
      </section>
      <WithdrawalModal
        hide={bankWithdrawalModal}
        setHide={setBankWithdrawalModal}
      />
    </div>
  );
};

export default WithdrawalForm;
