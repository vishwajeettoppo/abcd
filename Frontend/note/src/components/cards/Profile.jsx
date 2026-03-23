import React from "react";
import { getInitials } from "../../utils/helper";

const Profile = ({ userInfo, onLogout }) => {
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-[#efdcfc]">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-[#7416a3] font-semibold bg-[#f6dcfc]">
        {getInitials(userInfo?.fullName)}
      </div>

      <div>
        <p className="text-sm font-medium text-[#690498]">
          {userInfo?.fullName}
        </p>
        <button
          className="text-sm text-[#a50000] hover: underline hover:text-[#6d16a3] transition-colors duration-200 cursor-pointer"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default Profile;