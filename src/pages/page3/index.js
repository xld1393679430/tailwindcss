import React, { useState, useEffect } from "react";

const Page = () => {
  const [state, setState] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="pb-20">
      <p>Page</p>
      <div className="p-6 max-w-sm max-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img src="http://placehold.it/100x100" alt="" className="w-12 h-12" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You Have a new Message</p>
        </div>
      </div>

      <hr />

      <div className="py-8 px-8 max-w-sm max-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="http://placehold.it/100x100"
          alt=""
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">erin Lindford</p>
            <p className="text-gray-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>

      <hr />

      <button className="rounded-sm text-white-500 bg-gray-600 hover:bg-gray-700">
        Hover Me
      </button>

      <button className="bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300">
        button
      </button>

      <hr />

      <div>
        <ul className="p-6 divide-y divide-gray-200">
          {Array(4)
            .fill(null)
            .map((item, index) => (
              <li
                className="flex py-4 first:pt-0 last:pb-0 odd:bg-white even:bg-gray-100"
                key={index}
              >
                <img
                  className="h-10 w-10 rounded-full"
                  src="http://placehold.it/100x100"
                  alt=""
                />
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-gray-900">张三</p>
                  <p className="text-sm text-gray-500 truncate">
                    139367430@qq.com
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <hr />

      <form>
        <label className="block">
          <span className="block text-sm font-medium text-gray-700">
            Username
          </span>
          <input
            type="email"
            placeholder="请输入"
            // disabled
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
        </label>
      </form>

      <div>
        <a
          href="#"
          className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-gray-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 group-hover:text-white text-sm font-semibold">
              New project
            </h3>
          </div>
          <p className="text-gray-500 group-hover:text-white text-sm">
            Create a new project from a variety of starting templates.
          </p>
        </a>
      </div>

      <div>
        <form>
          <label className="block">
            <span className="block text-sm font-medium text-gray-700">
              Email
            </span>
            <input type="email" className="peer" />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Plaese provide a volid email address
            </p>
          </label>

          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
              Email
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
          </label>
        </form>
      </div>

      <div>
        <blockquote className="text-2xl font-semibold italic text-center text-gray-900">
          When you look
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>
      </div>

      <div>
        <blockquote className="text-2xl font-semibold italic text-center text-gray-900">
          when you look
          <span className="relative">
            <span
              className="block absolute -inset-1 -skew-y-3 bg-pink-500"
              aria-hidden="true"
            ></span>
            <span className="relative text-white">annoyed</span>
          </span>
          All the time, people think that you·re busy
        </blockquote>
      </div>

      <div>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img
              src="http://placehold.it/40x40"
              className="w-5 h-5 fill-gray-300"
              alt=""
            />
          </span>
          <input
            type="text"
            className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            name="search"
          />
        </label>
      </div>

      <div>
        <form className="flex items-center space-x-6">
          <div className="shrink-0">
            <img
              className="h-16 w-16 object-cover rounded-full"
              src="http://placehold.it/100x100"
              alt=""
            />
          </div>

          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-4
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "
            />
          </label>
        </form>
      </div>

      <div>
        <ul
          role="list"
          className="marker:text-sky-400 list-disc pl-5 space-y-3 text-gray-500"
        >
          <li>5 cups chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
      </div>

      <div>
        <div className="selection:bg-fuchsia-300 selection:text-orange-400">
          <p>
            So I started to walk into the water. I won't lie to you boys, I was
            terrified. But I pressed on, and as I made my way past the breakers
            a strange calm came over me. I don't know if it was divine
            intervention or the kinship of all living things but I tell you
            Jerry at that moment, I <em>was</em> a marine biologist.
          </p>
        </div>
      </div>

      <hr />
      <p
        className="first-line:uppercase first-line:tracking-widest
        first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900
        first-letter:mr-3 first-letter:float-left
      "
      >
        好吧，让我告诉你一些事情，有趣的男孩。你知道那个小小的邮票，那个写着"纽约公共图书馆"的邮票吗？嗯，这对你来说可能没有任何意义，但这对我来说意义重大。一个完整的地狱很多。
        当然，继续，如果你愿意，可以笑。我以前见过你的类型：华而不实，制作场景，炫耀传统。是的，我知道你在想什么。这个家伙对图书馆的旧书做了什么大恶痛？好吧，让我给你一个提示，少年。
      </p>

      <p
        className="first-line:uppercase first-line:tracking-widest
        first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900
        first-letter:mr-3 first-letter:float-left
      "
      >
        Well, let me tell you something, funny boy. Y'know that little stamp,
        the one that says "New York Public Library"? Well that may not mean
        anything to you, but that means a lot to me. One whole hell of a lot.
      </p>

      <hr />

      <div className="mb-10"></div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>

      <hr />
      <div className="bg-white dark:bg-gray-900 rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <img
              className="w-6 h-6 text-white"
              src="http://placehold.it/100x100"
              alt=""
            />
          </span>
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
      <hr />
      <div>
        <div className="portrait:hidden">portrait:hidden</div>
        <div className="landscape:hidden">landscape:hidden</div>
      </div>

      <hr />
      <div>
        <article className="print:hidden">
          <h1>My Secret Pizza Recipe</h1>
          <p>This recipe is a secret, and must not be shared with anyone</p>
        </article>
        <div className="hidden print:block">
          Are you seriously trying to print this? It's secret!
        </div>
      </div>

      <hr />
      <div className="group flex items-center">
        <img
          className="shrink-0 w-12 h-12 rounded-full"
          src="http://placehold.it/100x100"
          alt=""
        />
        <div className="ltr:ml-3 rtl:mr-3">
          <p className="text-sm font-medium text-gray-700 group-hover:text-orange-500">
            内啊实打实
          </p>
          <p className="text-sm font-medium text-gray-500 group-hover:text-blue-500">
            12312312
          </p>
        </div>
      </div>

      <hr />
      <div className="max-w-lg mx-auto p-8">
        <details className="open:bg-white dark:open:bg-gray-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
          open
          <summary className="text-sm leading-6 text-gray-900 dark:text-white font-semibold select-none">
            Why do they call it Ovaltine?
          </summary>
          <div className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
            <p>
              The mug is round. The jar is round. They should call it Roundtine.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Page;
