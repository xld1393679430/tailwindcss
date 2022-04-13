import React, { useState, useEffect } from "react";

const Page = () => {
  const [state, setState] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <p>Page</p>
      <div className="relative w-full h-20 bg-orange-300 border text-center">
        <div className="absolute top-[10px] lg:top-[20px]">内容</div>
      </div>

      <div className="relative max-w-sm h-20 bg-orange-300 border text-center mt-20">
        <div className="bg-[#ccc] text-[22px] before:content-['Festius']">
          aaa
        </div>
      </div>

      <div class="[mask-type:luminance]">123</div>

      <div className="grid w-full bg-pink-400 grid-cols-[1fr_500px_2fr]">
          <div className="bg-orange-100">1</div>
          <div className="bg-orange-400">2</div>
          <div className="bg-orange-700">3</div>
      </div>

      <div className="gbg-blue-200 w-full">
          <div className="bg-orange-100">1</div>
      </div>
    </div>
  );
};

export default Page;
