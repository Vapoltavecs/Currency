import React, { useRef } from "react";
import Canvas from "./Canvas";

const Chart = ({ data }) => {
  const canvas = useRef();
  console.log(canvas);
  return (
    <div className="drop-shadow-2xl bg-white mt-10 m-1 p-9 rounded-lg w-full">
      <Canvas ref={canvas} />
    </div>
  );
};

export { Chart };
