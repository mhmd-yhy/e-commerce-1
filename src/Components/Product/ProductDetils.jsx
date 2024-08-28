import React from "react";

export default function ProductDetils() {
  return (
    <div className="product-details lg:col-span-2 xl:col-span-3 lg:px-8 xl:px-20">
      <div className="mb-3">
        <h2 className="text-sm text-neutral-400 font-bold mb-1">
          الالكترونيات :
        </h2>
        <p className="text-base text-neutral-600">
          آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم
          أحمر <span className="text-yellow-400 font-bold">4.5</span>
        </p>
      </div>
      <div className="mb-3">
        <h2 className="text-sm text-neutral-400 font-bold mb-1">
          الماركة :{" "}
          <span className="text-lg font-bold text-neutral-600">سامسنوج</span>
        </h2>
        <div className="">
          <span
            className="px-3 py-1 rounded-full border border-neutral-400 ml-2 cursor-pointer"
            style={{ backgroundColor: "red" }}
          ></span>
          <span
            className="px-3 py-1 rounded-full border border-neutral-400 ml-2 cursor-pointer"
            style={{ backgroundColor: "white" }}
          ></span>
          <span
            className="px-3 py-1 rounded-full border border-neutral-400 ml-2 cursor-pointer"
            style={{ backgroundColor: "black" }}
          ></span>
        </div>
      </div>
      <div className="mb-3">
        <h2 className="text-sm text-neutral-400 font-bold mb-1">المواصفات :</h2>
        <p className="text-base text-neutral-600">
          يتميز بوجود بطاقة SIM مزدوجة بطاقة فعلية وبطاقة e-SIM يمكنك فتح قفل
          هاتفك الآيفون وتسجيل الدخول إلى التطبيقات والحسابات وغيرها بسهولة،
          وتعدّ خاصية معرَف الوجه الأسرع والأكثر أماناً للمصادقة عن طريق بصمة
          الوجه يتميز بشريحة A12 بايونيك والتي تعد أذكى وأقوى شريحة في الهواتف
          الذكية شكلت أكثر كاميرات العالم شهرة عصراً جديداً من التصوير
          الفوتوغرافي حيث يعمل جهاز الاستشعار الابتكاري بخاصية ISP والمحرك
          العصبي، ما يمكّنك من التقاط صور لم يسبق لها مثيل كاميرا بعدسة واحدة
          تجعل الأشخاص الموجودين في الأمام في نطاق تركيز دقيق على عكس نطاق
          الخلفية غير الواضح نظرة عامة
        </p>
      </div>
      <div className="mb-3">
        <span className="text-base text-neutral-600 bg-white py-2 px-3 border border-neutral-400 rounded-lg ml-4">
          34000 جنية
        </span>
        <button className="text-base text-white bg-black py-1 px-3 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400">
          اضف للعربة
        </button>
      </div>
    </div>
  );
}
// rafce
