import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages/Pages";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Image gallery styles
import "react-image-gallery/styles/css/image-gallery.css";
// Import Notification 
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App bg-stone-50 ">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
