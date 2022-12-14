import React from "react";
import { Oval } from "react-loader-spinner";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <Oval
        height={80}
        width={80}
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="white"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </div>
  );
}

export default LoadingSpinner;
