import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
export default function ModalEdit({ modalMoodEdit, closeModalEdit, ratingForm, onChange_ReviewComment, onChange_RateStars, onAcceptanceEdit, msgEdit = "" }) {
  const rateStars = {
    size: 20,
    count: 5,
    color: "#5F5F66",
    activeColor: "rgb(250 204 21)",
    value: ratingForm.rating,
    a11y: true,
    isHalf: true,
    emptyIcon: <FaRegStar />,
    halfIcon: <FaStarHalfAlt />,
    filledIcon: <FaStar />,
    onChange: (newValue) => {
      onChange_RateStars(newValue);
    },
  };
  return (
    <Dialog open={modalMoodEdit} onClose={closeModalEdit} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex items-center gap-5">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-blue-600" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900 float-start">
                    تعديل التقييم
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 clear-both">
                      {msgEdit}
                    </p>
                  </div>
                </div>
              </div>
              <div className='pt-2'>
                <ReactStars {...rateStars} />
                <textarea
                  value={ratingForm.review}
                  onChange={onChange_ReviewComment}
                  className="bg-stone-100 w-full rounded-lg mt-2 border outline-none pr-2 text-neutral-600"
                  rows={3}
                ></textarea>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-5">
              <button
                type="button"
                onClick={onAcceptanceEdit}
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              >
                تعديل
              </button>
              <button
                type="button"
                data-autofocus
                onClick={closeModalEdit}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                إلغاء
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}