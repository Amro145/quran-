import React from "react";

function Aya({ number }) {
  return (
    <div className="relative grid place-items-center h-11 w-11 mr-3">
      <span className="text-sm font-semibold">{number}</span>
      <svg
        className="w-15 absolute "
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 1.46451L28.8707 7.7459L29.181 8.07785L29.6351 8.06251L38.2279 7.77211L37.9375 16.3649L37.9221 16.819L38.2541 17.1293L44.5355 23L38.2541 28.8707L37.9221 29.181L37.9375 29.6351L38.2279 38.2279L29.6351 37.9375L29.181 37.9221L28.8707 38.2541L23 44.5355L17.1293 38.2541L16.819 37.9221L16.3649 37.9375L7.77211 38.2279L8.06251 29.6351L8.07785 29.181L7.7459 28.8707L1.46451 23L7.7459 17.1293L8.07785 16.819L8.06251 16.3649L7.77211 7.77211L16.3649 8.06251L16.819 8.07785L17.1293 7.7459L23 1.46451Z"
          stroke="#10B981"
          strokeWidth="2"
        />
      </svg>{" "}
    </div>
  );
}

export default Aya;
