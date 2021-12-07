import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { componentMap } from "./components";

const onDOMChange = (nodes) => {
  console.log(nodes);
  document.querySelectorAll(Object.keys(componentMap).join(',')).forEach((domRef) => {
    if (!domRef.getAttribute("bootstraped")) {
      const Component = componentMap[domRef.nodeName.toLowerCase()].component;
      const attr = domRef.attributes;

      const props = {};

      for (let i = 0; i < attr.length; i++) {
        let val = attr[i].nodeValue;

        try {
          val = JSON.parse(attr[i].nodeValue);
        } catch (error) {
          // attribute value was not a JSON
        }

        props[attr[i].name] = val;
      }

      domRef.setAttribute("bootstraped", true);

      ReactDOM.render(
        <React.StrictMode>
          <Component {...props} />
        </React.StrictMode>,
        domRef
      );
    }
  })
};

const observer = new MutationObserver(onDOMChange);

observer.observe(document.getElementsByTagName("body")[0], {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
});

console.log('im testing it here');
export default function test () {
  console.log('testing again');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
