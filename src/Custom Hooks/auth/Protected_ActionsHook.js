import Protected_RouteHook from './Protected_RouteHook';

const Protected_ActionsHook = () => {
  const [isUser, isAdmin] = Protected_RouteHook();
  const CheckLogged = (role) => {
    if (role === "user") { if (isUser === true) return true; }
    if (role === "user") { if (isUser === false) return false; }
    if (role === "admin") { if (isAdmin === true) return true; }
    if (role === "admin") { if (isAdmin === false) return true; }
  };
  return [CheckLogged];
};
export default Protected_ActionsHook;
