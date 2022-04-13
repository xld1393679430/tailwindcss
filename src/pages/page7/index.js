import React, { useState, useEffect } from "react";
import "./index.css";

const Page = () => {
  const [state, setState] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <p>Page</p>
      <div className="select-dropdown">select-dropdown</div>
      <div>
        <button className="btn">btn</button>
      </div>

      <div>
        <div className="card">card</div>
      </div>
      <hr />

      <div className="content-area">111</div>
      <hr />
      <div className="content-area2">222</div>
    </div>
  );
};

export default Page;
