"use client";

import React, { useEffect, useRef } from "react";

export const PizzaLogo: React.FC<{ width?: number; height?: number }> = ({
  width = 73,
  height = 70,
}) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      path.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], {
        duration: 7000,
        iterations: Infinity,
        easing: "ease-in-out",
      });
    }
  }, []);

  return (
    <svg
      viewBox="0 0 150 145"
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
    >
      <path
        ref={pathRef}
        d="M116.9,43c-20.8-1.6-17.7-17.3-17.7-17.3s-3.5,3.8-13.7,3.5S75,19,75,19S50.6,24.4,59,11.4c12.2-18.7,55.7-3.8,55.7-3.8
        s42.7,14.6,26.2,33c-12.4,13.8-18.8,2.5-16.4-5.7c3.8-13.2,39.7-7.9,9.6,21.1C97,91.6,60.3,66.7,81,51.8c21.1-15.1,40,8.4,18.1,27
        c-19.5,16.7-21,19.4-24.2,22.3s-6.7-1.9-11.1,1.3s2.2,20-4.1,21.6c-6.4,1.6-1.9-14.3-9.2-15s-3.5,10.8-7.6,11.5s-2.2-3.8-7.6-4.5
        S8.7,138.6,4.9,136.7c-3.8-1.9-6.3-13.6,8.6-41S65.8,69,47.8,88.6C23,115.7,21.2,76.1,32,57.7C42.9,39,72.4,39.5,59.3,52.3
        C43.2,68,40.2,39,56.5,26.7"
        fill="none"
        stroke="#e3a208"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
