import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages/Pages";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Image gallery styles
import "react-image-gallery/styles/css/image-gallery.css";
function App() {
  return (
    <div className="App bg-stone-50 overflow-hidden">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;