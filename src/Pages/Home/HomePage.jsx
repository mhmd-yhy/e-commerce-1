import Slider from "../../Components/Utility/Slider";
import Discount from "../../Components/Home/Discount";
import HomeBrands from "../../Components/Home/HomeBrands";
import HomeCategory from "../../Components/Home/HomeCategory";
import HomeProducts from "../../Components/Home/HomeProducts";
import laptops from "../../assets/images/laptops.png";
import { ToastContainer } from "react-toastify";
import InternetConnectionHook from "../../Custom Hooks/internet/InternetConnectionHook";
import { useEffect } from "react";
export default function HomePage() {
  const [checkInternet] = InternetConnectionHook();
  useEffect(() => { checkInternet(); }, []);

  return (
    <div className="home">
      <ToastContainer />
      <Slider />
      <div className="container m-auto p-4 xl:px-36">
        <HomeCategory />
        <HomeProducts title={"الأكثر مبيعاً"} link={"/products"} />
        <Discount title={"خصم يصل حتى 30% على أجهزة اللابتوب"} img={laptops} />
        <HomeProducts title={"أحدث الأزياء"} link={"/products"} />
        <HomeBrands />
      </div>
    </div>
  );
}
