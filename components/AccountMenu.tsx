import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {

  const { data } = useCurrentUser();

  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-40 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full ">
          <img
            className="w-8 rounded-md"
            src="/images/profile-blue.jpg"
            alt=""
          ></img>
          <p className="text-white text-sm group-hover/item:underline">
            {data?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-1" />
        <div onClick={()=>signOut()} className="px-4 text-left text-white text-sm hover:underline">
          Logout
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
