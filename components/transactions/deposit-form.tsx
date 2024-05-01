import { addresses } from "../../lib/wallet-address";
import { useContext, useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const DepositForm = () => {
  const [selectedCoin, setSelectedCoin] = useState<any | null | undefined>({});
  const [coin, setCoin] = useState<string>("bnb");
  const [amount, setAmount] = useState<string | number | any>("");

  const findCoin = () => {
    const selected = addresses.find((address) => address.network == coin);
    setSelectedCoin(selected);
  };

  useMemo(() => {
    findCoin();
  }, [coin]);

  const router = useRouter();

  // user context
  const { user: state }: any = useContext(UserContext);

  const depositCoin = async () => {
    try {
      // get the collection Ref
      const depositRef = collection(
        store,
        "/clients",
        `/${state.email}`,
        "/deposits"
      );

      await addDoc(depositRef, {
        amount: parseInt(amount),
        date: serverTimestamp(),
        coin: selectedCoin.sym,
        approved: false,
      });

      // navigate to the deposit
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
    <div className="mx-3 font-main my-4">
      {/* barcode image */}
      {!selectedCoin && <div />}
      {selectedCoin && (
        <div className="my-2 text-white font-main">
          <div className="w-[40%]  md:w-[20%] mx-auto">
            <img src={selectedCoin.img} alt="" />
          </div>
          <div className="w-full md:w-[50%] mx-auto bg-bg rounded p-2 mt-3">
            <p className="text-sm">{selectedCoin.name} deposit address</p>
            <h3 className="font-semibold">{selectedCoin.address}</h3>
          </div>
          <div className="w-full md:w-[50%] mx-auto my-4 bg-bg rounded p-2">
            <p className="text-sm text-text_min">Network</p>
            <h3 className="text-text_main font-semibold">
              {selectedCoin.name}
            </h3>
          </div>
        </div>
      )}
      {/* form */}
      <div className="text-white font-main">
        {/* header */}
        <div>
          <h4 className="font-main text-center py-2 capitalize text-lg">
            Deposit your cryptocurrency
          </h4>
        </div>
        {/* form to fill */}
        <section>
          <form className="flex  md:items-center justify-between py-2  lg:w-1/2 mx-auto  flex-col gap-3">
            {/* choose coin to deposit in */}
            <div className="flex-1 w-full">
              <label htmlFor="coin" className="text-sm">
                Choose Currency
              </label>
              <div className="w-full bg-neutral-300 py-2 rounded">
                <select
                  name="coin"
                  id="coin"
                  className="bg-transparent w-full text-bg outline-none"
                  value={coin}
                  onChange={(e) => setCoin(e.target.value)}
                >
                  {addresses.map((address) => (
                    <option key={address.id} value={address.network}>
                      {address.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* enter amount to deposit */}
            <div className="flex-1 w-full">
              <label htmlFor="amount" className="text-sm">
                Enter Amount to deposit
              </label>
              <div className="w-full bg-neutral-300 py-2 rounded">
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-transparent w-full outline-none text-bg px-2"
                />
              </div>
            </div>
            {/* button to send request */}
          </form>
          <button
            onClick={depositCoin}
            className="bg-blue-500 block py-2 rounded px-3 shadow lg:w-1/2 mx-auto  my-2"
          >
            Deposit
          </button>
        </section>
        {/* end of form to fill */}
      </div>
    </div>
  );
};

export default DepositForm;
