import AmountCard from "../../shared/cards/amount-card";
import { useFetchUser } from "../../hooks/useFetchUser";


const DashboardAccountCards = () => {
  const { userState: user, loading }: any = useFetchUser();

  console.log(user);
  return (
    <section>
      <div className="py-3 px-1 font-main text-white font-semibold text-xl font-db">
        Account Summary
      </div>

      <div className="flex md:flex-row flex-col items-center justify-between gap-3 py-3">
        <AmountCard
          accountType={"Balance"}
          amount={user?.balance}
          loading={loading}
        />
        <AmountCard
          accountType={"Deposited"}
          amount={user?.deposited}
          loading={loading}
        />
        <AmountCard
          accountType={"Bonus"}
          amount={user?.bonus}
          loading={loading}
        />
      </div>
    </section>
  );
};


export default DashboardAccountCards;
