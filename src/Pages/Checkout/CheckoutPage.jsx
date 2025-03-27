import React, { useEffect } from "react";
import ChooseCheckoutPay from "../../Components/Checkout/ChooseCheckoutPay";
import { ToastContainer } from "react-toastify";
import InternetConnectionHook from "../../Custom Hooks/internet/InternetConnectionHook";
const CheckoutPage = () => {
  const [checkInternet] = InternetConnectionHook();
  useEffect(() => { checkInternet(); }, []);
  return (
    <div style={{ minHeight: "calc(100vh - 72px - 57px)" }}>
      <ToastContainer />
      <div className="container m-auto p-4 xl:px-36">
        <h2 className="text-neutral-600 text-lg font-bold my-4">
          اختر طريقة الدفع
        </h2>
        <ChooseCheckoutPay />
      </div>
    </div>
  );
};

export default CheckoutPage;
