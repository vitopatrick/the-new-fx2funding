import { UserType } from "../../hooks/useFetchUser";
import { SkeletonCircle, SkeletonText } from "../../shared/skeleton/Skeleton";

const UsersName = ({
  user,
  loading,
}: UserType | null | {} | undefined | any) => {
  return (
    <div className="mt-4 mb-10 px-3 font-main">
      {/* parent flex container */}
      <div className="flex gap-4 items-center">
        {loading && <SkeletonCircle height={60} width={60} />}
        {!loading && (
          <div className="text-bg flex items-center justify-center w-[60px] uppercase h-[60px] rounded-full bg-neutral-300 text-4xl font-bold font-sec">
            {user.name.slice(0, 2)}
          </div>
        )}

        <div>
          {loading && <SkeletonText height={5} width={200} />}
          {!loading && (
            <h1 className="font-bold text-xl text-white capitalize">
              {user.name}
            </h1>
          )}
          {loading && <SkeletonText height={5} width={200} />}
          {!loading && (
            <h2
              className={
                user.verfied
                  ? "text-sm font-semibold capitalize text-teal-600"
                  : "text-sm font-semibold text-red-400 capitalize"
              }
            >
              {user.verified ? "Verified" : "Not Verified"}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersName;
