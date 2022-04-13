import React from "react";
import throttle from "lodash/throttle";

function throttle3(func, delay) {
    let previous = 0
    return () => {
        let now = +new Date();
        let context = this
        let args = arguments
        if (now - previous > delay) {
            func(context, args)
            previous = now
        }
    }
}

class Test extends React.Component {
  //   handleScroll = throttle(() => {
  //     console.log("handleScroll");
  //   }, 200);

  handleScroll = () => {
    console.log("handleScroll");
  };

  throttle2 = (fn, context, delay, text) => {
    clearTimeout(fn.timeoutId);
    fn.timeoutId = setTimeout(function () {
      fn.call(context, text);
    }, delay);
  };

  componentDidMount() {
    window.addEventListener("scroll", throttle3(this.handleScroll, 200));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return <div style={{ height: 1000 }}>Test页面</div>;
  }
}

export default Test;
