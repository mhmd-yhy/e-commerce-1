import React from "react";
import SubTitle from "../Utility/SubTitle";
import ProfilCard from "./ProfilCard";
import ProfilPassword from "./ProfilPassword";
import ViewUserProfileHook from "../../Custom Hooks/profile/ViewUserProfileHook";

const ProfilContainer = () => {
  const [profile] = ViewUserProfileHook();
  return (
    <div className="min-h-96 max-w-2xl">
      <SubTitle title={"الملف الشخصي"} />
      <ProfilCard profileData={profile} />
      <ProfilPassword />
    </div>
  );
};

export default ProfilContainer;
