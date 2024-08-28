import React from "react";
import ImageGallery from "react-image-gallery";
import mobile from "../../assets/images/mobile.png";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
export default function ProductGallery() {
  const images = [
    { original: mobile },
    { original: mobile },
    { original: mobile },
  ];
  return (
    <div
      className="flex justify-center items-center pt-2 w-80 rounded-3xl bg-white xl:col-span-1 mx-auto mb-4"
      style={{ height: "auto" }}
    >
      {/* {style={{ height: "472px" }}} */}
      <ImageGallery
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