import React from "react";
import SubTitle from "../Utility/SubTitle";
import ProfilCard from "./ProfilCard";
import ProfilPassword from "./ProfilPassword";

const ProfilContainer = () => {
  return (
    <div className="min-h-96 max-w-2xl">
      <SubTitle title={"الملف الشخصي"} />
      <ProfilCard />
      <ProfilPassword />
    </div>
  );
};

export default ProfilContainer;
