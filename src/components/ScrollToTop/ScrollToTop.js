import React from "react";
import { ReactComponent as Arrow } from "../../svg/chevron-circle-up.svg";

const ScrollToTop = () => {
  return (
    <div className="scroll-to-top d-lg-none position-fixed">
      <a
        className="js-scroll-trigger d-block text-center text-white rounded"
        href="#page-top"
      >
        <Arrow className="icon-white" />
      </a>
    </div>
  );
};

export default ScrollToTop;
