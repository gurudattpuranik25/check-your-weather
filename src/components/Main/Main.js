import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TempData from "./TempData";
// import ScriptTag from "react-script-tag";
// import { Helmet } from "react-helmet";

function Main() {
  const [inputVal, setInputVal] = useState("");
  const [tempData, setTempData] = useState("");
  const apiKey = process.env.REACT_APP_API_ID;

  const fetchData = (x) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${x}&APPID=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setTempData(data));
  };
  console.log(tempData);

  const formHandler = (inputVal) => {
    inputVal === "" ? alert("Please enter a city") : fetchData(inputVal);
    setInputVal("");
  };

  return (
    <div>
      <main>
        <Header />
        <div className=" mt-14 flex flex-col items-center m-auto justify-center">
          <div className="flex items-center ">
            <i className="fa-solid fa-magnifying-glass absolute pl-3"></i>
            <input
              type="text"
              className="w-[30rem] pl-10 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-gray-600 focus:outline-offset-2 bg-gray-200"
              placeholder="Name your city"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" px-4 py-1 my-4 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition duration-150"
            onClick={() => formHandler(inputVal)}
          >
            Get Data
          </button>
        </div>
        <TempData tempData={tempData} />
        <Footer />
        {/* <Helmet></Helmet> */}
      </main>
    </div>
  );
}

export default Main;
