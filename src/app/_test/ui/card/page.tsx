import React from "react";

export default function UICard() {
  return (
    <div className="flex p-4">
      <div className="h-[150px] w-fit bg-blue-900">
        <div className="group flex h-full">
          <div className="z-10 h-full w-[150px]">Image card</div>
          <div className="absolute left-0 top-0 z-20 hidden h-full w-[150px] group-hover:flex">
            show when hover the Image card
          </div>
        </div>
      </div>
      <div className="h-[150px] w-fit bg-blue-900">
        <div className="group flex h-full">
          <div className="z-10 h-full w-[150px]">Image card</div>
          <div className="absolute left-0 top-0 z-20 hidden h-full w-[150px] group-hover:flex">
            show when hover the Image card
          </div>
        </div>
      </div>
    </div>
  );
}
