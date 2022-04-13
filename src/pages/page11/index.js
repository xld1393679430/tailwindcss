import React, { useState, useEffect } from "react";

const Page = () => {
  const [state, setState] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <p>Page</p>
      <div className="colums-2">
        <p>Well, let me tell you something, Well, let me tell you something,</p>
        <p className="break-after-column">
          Sure, go ahead, laugh Well, let me tell you something,
        </p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <hr />
      <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
        Hello
        <br />
        World
      </span>
      <hr />
      <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
        Hello
        <br />
        World
      </span>

      <hr />
      <div className="flex items-center justify-center">
        <img src="http://placehold.it/60x60" alt="" />
        <div className="ml-2">
          <strong>title</strong>
          <p>address</p>
        </div>
      </div>
      <hr />
      <div className="flex items-center">
        <img src="http://placehold.it/60x60" alt="" />
        <div className="ml-[5px]">
          <strong>Andrew Alfred</strong>
          <p>Technical advisor</p>
        </div>
      </div>
      <hr />
      <p>
        Today I spent most of the day researching ways to ...
        <span className="inline-flex items-baseline">
          <img
            src="http://placehold.it/60x60"
            alt=""
            className="self-center w-5 h-5 rounded-full mx-1"
          />
          <span>Kramer</span>
        </span>
        keeps telling me there is no way to make it work, that ...
      </p>
      <hr />
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <span className="bg-slate-400">01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
      </div>

      <hr />
      <span className="inline-grid grid-cols-3 gap-4">
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
      </span>
      <span className="inline-grid grid-cols-3 gap-4">
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
      </span>
      <hr />
      <div className="hidden">hidden</div>

      <hr />

      <div className="w-[800px]">
        <img className="float-right w-40 ml-2 mb-2 border-4" src="http://placehold.it/160x110" alt="" />
        <img className="float-left w-32 mr-2 mb-2" src="http://placehold.it/128x85" alt="" />
        <p className="text-justify">1也许我们可以没有图书馆，像你我这样的人。或许。当然，我们太老了，不能改变世界，但是那个孩子现在坐下来打开一本书，在当地图书馆的一个分馆里，在猫身上找到小便和小便的图画呢？帽子和中国五兄弟？他不应该得到更好的吗？看。如果你认为这是关于逾期罚款和丢失书籍，你最好再想一想。这是关于那个孩子读一本书而不让他的思想扭曲的权利！或者：也许这会让你兴奋，宋飞；也许这就是你踢球的方式。你和你的好朋友。宋飞；也许这就是你踢球的方式。你和你的好朋友。宋飞；也许这就是你踢球的方式。你和你的好朋友。宋飞；也许这就是你踢球的方式。你和你的好朋友。</p>
      </div>

      <hr />
      <div className="w-2 isolate"></div>
      <hr />
      <div className="bg-indigo-300 w-fit">
        <img className="w-96 h-48 object-scale-down" src="http://placehold.it/300x300" alt="" />
      </div>
    </div>
  );
};

export default Page;
