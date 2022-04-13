import React, { useState, useEffect } from "react";
import Test from "./test";

const Page = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {}, []);

  return (
    <div style={{ height: 1000 }}>
      <p>Page</p>
      <div>
        <a href="./a.html">A页面</a>
        <a href="test.html">Awwww页面</a>
      </div>
      <button onClick={() => setShow(!show)}>切换Test组件</button>
      {show ? <Test /> : null}
    </div>
  );
};

export default Page;
