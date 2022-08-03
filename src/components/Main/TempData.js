import React from "react";
import "./Main.css";
import { BsSunFill } from "react-icons/bs";
import { BsFillCloudDrizzleFill } from "react-icons/bs";
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import oops from "../../images/oops.jpg";
// import oops2 from "../../images/oops2.jpg";

function TempData({ tempData }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todayDate = new Date();
  const day = todayDate.getDay();
  const date = todayDate.getDate();
  const month = todayDate.getMonth();
  const year = todayDate.getFullYear();

  const dateSuffix = (date) => {
    if (date === 1 || date === 21) {
      return "st";
    } else if (date === 2 || date === 22) {
      return "nd";
    } else if (date === 3 || date === 23) {
      return "rd";
    } else {
      return "th";
    }
  };

  return (
    <div className=" bg-gradient-to-r from-purple-500 to-pink-500 w-[50%] py-4 rounded-tl-3xl rounded-br-3xl m-auto h-[24rem] ">
      {tempData ? (
        <div>
          {/* <h1 className=" text-lg mb-2">
            {days[day]},{" "}
            <span className=" text-2xl font-semibold">
              {date}
              {dateSuffix(date)} {months[month]} {year}
            </span>
          </h1> */}
          {tempData.coord ? (
            <div className=" flex w-full justify-center gap-5">
              <div
                className={`${
                  tempData.weather[0].main === "Clouds" ? "clouds" : "clear"
                } w-[95%] flex flex-col items-center bg-purple-200 p-4 rounded-tl-3xl rounded-br-3xl  `}
              >
                <h1 className=" text-lg mb-2 tracking-wider">
                  {days[day]},{" "}
                  <span className=" text-2xl font-semibold tracking-wider">
                    {date}
                    {dateSuffix(date)} {months[month]} {year}
                  </span>
                </h1>
                <span className=" font-bold text-4xl tracking-wider">
                  {tempData.name}, {tempData.sys.country}
                </span>
                <p className=" text-[7rem] ml-12 my-4">
                  {tempData.weather[0].main === "Clouds" ? (
                    <BsFillCloudDrizzleFill className=" text-sky-400" />
                  ) : (
                    <BsSunFill className=" text-orange-400" />
                  )}
                </p>
                <div className=" flex items-center gap-12">
                  <p className=" w-[8rem] h-[6rem] bg-gray-700 text-white rounded-xl flex items-center justify-center font-bold  ">
                    <span className=" text-5xl">
                      {Math.floor(tempData.main.temp)}
                    </span>
                    <span className=" font-normal text-3xl">°C</span>
                  </p>
                  <div>
                    <p className=" text-md font-semibold tracking-wider">
                      Pressure: {tempData.main.pressure} Pascal
                    </p>
                    <p className=" text-md font-semibold tracking-wider">
                      Humidity: {tempData.main.humidity} g.m-3
                    </p>
                    <p className=" text-md font-semibold tracking-wider">
                      {tempData.weather[0].description}
                    </p>
                  </div>
                  <div>
                    <p className=" text-md font-semibold tracking-wider">
                      Latitude: {tempData.coord.lat}
                    </p>
                    <p className=" text-md font-semibold tracking-wider">
                      Longitude: {tempData.coord.lon}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className=" p-4 flex flex-col gap-8 items-center justify-center">
              <img
                src={oops}
                className=" w-[50%] h-[15rem] rounded-full "
                alt=""
              />
              <span className="text-3xl font-semibold">No Data Found!!</span>
            </div>
          )}
        </div>
      ) : (
        <div className=" flex flex-col gap-8 items-center m-24 ">
          <h1 className=" text-3xl font-semibold">
            Enter your city to get the weather report
          </h1>
          <BsFillHandIndexThumbFill className=" text-[5rem] text-yellow-300" />
        </div>
      )}
    </div>
  );
}

export default TempData;
