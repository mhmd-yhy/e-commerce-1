import React from "react";
import ImageGallery from "react-image-gallery";
import mobile from "../../assets/images/mobile.png";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
import { useParams } from "react-router";
import ViewProductDetailsHook from "../../Custom Hooks/product/ViewProductDetailsHook";
export default function ProductGallery() {
  const { id } = useParams();
  const [details] = ViewProductDetailsHook(id);
  return (
    <div
      className="flex justify-center items-center pt-2 w-80 rounded-3xl bg-white xl:col-span-1 mx-auto mb-4"
      style={{ height: "auto" }}
    >
      {/* {style={{ height: "472px" }}} */}
      <ImageGallery
        style={{ height: "472px !important" }}
        items={details.images}
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
