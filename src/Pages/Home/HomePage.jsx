import Slider from "../../Components/Utility/Slider";
import Discount from "../../Components/Home/Discount";
import HomeBrands from "../../Components/Home/HomeBrands";
import HomeCategory from "../../Components/Home/HomeCategory";
import HomeProducts from "../../Components/Home/HomeProducts";
import laptops from "../../assets/images/laptops.png";
import { ToastContainer } from "react-toastify";

export default function HomePage() {
  return (
    <div className="home">
      <Slider />
      <div className="container m-auto p-4 xl:px-36">
        <HomeCategory />
        <HomeProducts title={"الأكثر مبيعاً"} link={"/products"} />
        <Discount title={"خصم يصل حتى 30% على أجهزة اللابتوب"} img={laptops} />
        <HomeProducts title={"أحدث الأزياء"} link={"/products"} />
        <HomeBrands />
        <ToastContainer />
      </div>
    </div>
  );
}
