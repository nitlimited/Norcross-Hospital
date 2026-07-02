import { images } from "../data/images.js";

export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5">
      <div className="col-span-2 sm:col-span-1 row-span-2 rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-auto sm:h-full">
        <img src={images.reception} alt="Hospital reception area" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img src={images.laboratory} alt="Hospital laboratory" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img src={images.ward} alt="Patient ward" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
