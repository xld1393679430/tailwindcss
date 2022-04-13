import React, { useState, useEffect } from "react";
import "./index.css";

const Page = () => {
  const [state, setState] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <p>Page</p>
      <p className="text-gold">页面</p>
      <hr />
      <article className="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
      <hr />
      <hr />
      <form action="">
        <label htmlFor="">
          <select name="" id="" className="px-4 py-3 rounded-full">
            <option value="1">1</option>
          </select>
        </label>

        <label htmlFor="">
          <input type="checkbox" className="rounded text-pink-500" />
        </label>
      </form>

      <hr />

      <p className="x-line-clamp-3">
        Et molestiae hic earum repellat aliquid est doloribus delectus. Enim
        illum odio porro ut omnis dolor debitis natus. Voluptas possimus
        deserunt sit delectus est saepe nihil. Qui voluptate possimus et quia.
        Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut
        molestiae fugit.
      </p>
      <p className="line-clamp-3">
        Et molestiae hic earum repellat aliquid est doloribus delectus. Enim
        illum odio porro ut omnis dolor debitis natus. Voluptas possimus
        deserunt sit delectus est saepe nihil. Qui voluptate possimus et quia.
        Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut
        molestiae fugit.
      </p>

      <hr />
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="xx"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
