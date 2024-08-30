import React from "react";
import ImageGallery from "react-image-gallery";
import mobile from "../../assets/images/mobile.png";
import mobile1 from "../../assets/images/mobile1.png";
import mobile2 from "../../assets/images/mobile2.png";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
export default function ProductGallery() {
  const images = [
    { original: mobile },
    { original: mobile1 },
    { original: mobile2 },
  ];
  return (
    <div
      className="flex justify-center items-center pt-2 w-80 rounded-3xl bg-white xl:col-span-1 mx-auto mb-4"
      style={{ height: "auto" }}
    >
      {/* {style={{ height: "472px" }}} */}
      <ImageGallery
        style={{ height: "472px !important" }}
        items={images}
        defaultImage={mobile}
        showFullscreenButton={false}
        isRTL={true}
        showBullets={true}
        showPlayButton={false}
        showThumbnails={false}
        showIndex={false}
        renderRightNav={ButtonRight}
        renderLeftNav={ButtonLeft}
      />
    </div>
  );
}
