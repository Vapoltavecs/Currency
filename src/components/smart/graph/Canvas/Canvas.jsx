import { object } from "prop-types";

const Canvas = ({ ref }) => {
  return <canvas ref={ref}></canvas>;
};

Canvas.propTypes = {
  ref: object,
};

export { Canvas };
