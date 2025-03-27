import UseNontification from "../../Components/Utility/UseNontification";

const InternetConnectionHook = () => {
  const checkInternet = () => {
    if (!navigator.onLine) {
      UseNontification("يرجى التحقق من اتصالك بالإنترنت", "error");
      return false;
    }
    return true;
  };
  return [checkInternet];
};

export default InternetConnectionHook;
