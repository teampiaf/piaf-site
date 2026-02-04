import React from 'react';
interface PhoneFrameProps {
  children: React.ReactNode;
}
export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
      {/* Notch / Top Bar */}
      <div className="h-[32px] w-full bg-gray-800 absolute top-0 left-0 z-20 flex justify-center">
        <div className="h-[18px] w-[120px] bg-black rounded-b-[1rem] absolute top-0"></div>
      </div>

      {/* Side Buttons */}
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[180px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

      {/* Screen Content */}
      <div className="flex-1 rounded-[2rem] overflow-hidden bg-white relative z-10 w-full h-full">
        {children}
      </div>
    </div>);

}