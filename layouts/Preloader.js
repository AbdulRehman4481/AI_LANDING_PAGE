"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  return (
    <div
      className="preloader_container"
      id="preloader"
      style={{ display: !load ? "none" : "flex" }}
    >
      <div className="spinner" />
    </div>
  );
};
export default Preloader;
