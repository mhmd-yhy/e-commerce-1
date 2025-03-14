import React, { useEffect, useState } from 'react';

const Protected_RouteHook = () => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (userData !== null) {
      if (userData.role === "user") { setIsUser(true); setIsAdmin(false); }
      else { setIsUser(false); setIsAdmin(true); }
    }
    else { setIsUser(false); setIsAdmin(false); }
  }, []);
  return [userData, isUser, isAdmin];
};

export default Protected_RouteHook;
