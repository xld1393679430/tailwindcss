import React, { useState, useEffect } from "react";

const Page = () => {
  const [state, setState] = useState(null);

  useEffect(() => {}, []);

  const url =
    "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80";

  return (
    <div className="bg-gray-300 p-10">
      <div className="flex bg-white items-center w-80 h-20  m-auto overflow-hidden">
        <img
          className="w-32 h-32 rounded-full"
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          alt=""
        />
        <div className="ml-1">
          <p>安德鲁·阿尔弗雷德</p>
          <p>技术顾问</p>
        </div>
      </div>

      <hr />
      <div className="w-80 h-40 bg-pink-50 overflow-scroll">
        <div className="h-10 mb-4">1</div>
        <div className="h-10 mb-4">2</div>
        <div className="h-10 mb-4">3</div>
        <div className="h-10 mb-4">4</div>
        <div className="h-10 mb-4 bg-blue-100 sticky top-0">5</div>
        <div className="h-10 mb-4">6</div>
        <div className="h-10 mb-4">7</div>
        <div className="h-10 mb-4">8</div>
        <div className="h-10 mb-4">9</div>
        <div className="h-10 mb-4">10</div>
      </div>

      <hr />
      <div className="w-[500px] border-[1px] border-black border-solid flex">
        <div className="flex-none bg-pink-100">1</div>
        <div className="flex-auto w-[300px] bg-blue-100">2</div>
        <div className="flex-auto w-[100px] bg-orange-200">3</div>
      </div>
      <hr />
      <div className="grid grid-cols-9 gap-4 border-[1px] border-black border-solid">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
      <hr />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 bg-pink-100">01</div>
        <div className="col-start-1 col-end-3 bg-blue-100">02</div>
        <div className="col-end-7 col-span-2 bg-orange-100">03</div>
        <div className="col-start-1 col-end-7 bg-black-100">04</div>
      </div>
      <hr />
      <div className="flex flex-col space-y-[10px]">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <hr />
      <div className="text-sm max-w-prose ...">
        <p>
          Oh yeah. It's the best part. It's crunchy, it's explosive, it's where
          the muffin breaks free of the pan and sort of does it's own thing.
          I'll tell you. That's a million dollor idea right there. Just sell the
          tops.
        </p>
      </div>

      <div className="text-base max-w-prose ...">
        <p>
          Oh yeah. It's the best part. It's crunchy, it's explosive, it's where
          the muffin breaks free of the pan and sort of does it's own thing.
          I'll tell you. That's a million dollor idea right there. Just sell the
          tops.
        </p>
      </div>

      <div className="text-xl max-w-prose ...">
        <p>
          Oh yeah. It's the best part. It's crunchy, it's explosive, it's where
          the muffin breaks free of the pan and sort of does it's own thing.
          I'll tell you. That's a million dollor idea right there. Just sell the
          tops.
        </p>
      </div>
      <hr />
      <div className="ordinal">1st</div>
      <div className="ordinal slashed-zero tabular-nums">1234567890</div>
      <hr />
      <div>
        <p>
          我是德里克，一位住在图腾的天文工程师。我喜欢在My Company, Inc建造
          X-Wings 。
          <span className="underline decoration-[#50d71e]">工作之余</span>{" "}
          ，我喜欢看吊舱赛跑和光剑格斗。
        </p>
      </div>

      <hr />
      <div className="w-[500px] h-[300px] bg-cover overflow-y-scroll overscroll-contain m-auto mb-[30px]" 
      style={{backgroundImage: `url(${url})`, backgroundPosition: 'center -80px'}}>
        <div className="mt-[180px]">
          <p className="bg-white p-[20px]">也许我们可以没有图书馆，像你我这样的人。或许。当然，我们太老了，不能改变世界，但是那个孩子现在坐下来打开一本书，在当地图书馆的一个分馆里，在猫身上找到小便和小便的图画呢？帽子和中国五兄弟？他不应该得到更好的吗？
          看。如果你认为这是关于逾期罚款和丢失书籍，你也许我们可以没有图书馆，像你我这样的人。或许。当然，我们太老了，不能改变世界，但是那个孩子现在坐下来打开一本书，在当地图书馆的一个分馆里，在猫身上找到小便和小便的图画呢？帽子和中国五兄弟？他不应该得到更好的吗？
          看。如果你认为这是关于逾期罚款和丢失书籍，你最好再想一想。这是关于那个孩子读一本书而不让他的思想扭曲的权利！或者：也许这会让你兴奋，宋飞；也许这就是你踢球的方式。你和你的好朋友。</p>
        </div>
      </div>

      <hr />
      <div
        className="max-w-lg mx-auto h-80 overflow-y-scroll overscroll-contain bg-cover shadow-lg"
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: "center -80px",
        }}
      >
        <div className="mt-40">
          <div className="bg-white p-4 sm:p-8">
            也许我们可以没有图书馆，像你我这样的人。或许。子读一本书而不让他的思想扭曲的权利！或者：也许这会让你兴奋，宋飞；也许这们可以没有图书馆，像你我这样的人。或许。子读一本书而不让他的思想扭曲的权利！或者：也许这会让你兴奋，宋飞；也许这就是你踢球的方式。你和你的好朋友。
          </div>
        </div>
      </div>

      <hr />
      <div className="w-[200px] h-[100px] bg-pink-200 ring-[4px] ring-offset-2 ring-blue-500">内容</div>


      <hr />
      <input type="checkbox" class="accent-pink-300 md:accent-pink-500" />

    </div>
  );
};

export default Page;
