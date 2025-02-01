import React from "react";
import { FaTemperatureHigh, FaPowerOff, FaMusic } from "react-icons/fa";
import { WiDayCloudy, WiStrongWind, WiRaindrop } from "react-icons/wi";
import { BsSpeedometer2 } from "react-icons/bs";
import img from "./assets/img.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/music.png";
import img6 from "./assets/img6.png";


const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white p-4">
      {/* Sidebar */}
{/* Sidebar */}
{/* Sidebar - Optimized for Screen Fit */}
{/* Sidebar */}
<aside className="w-1/4 bg-gray-800 p-6 rounded-2xl flex flex-col gap-6 shadow-lg border-l-4 border-purple-500">
  <h1 className="text-3xl font-bold text-purple-400">sync</h1>

  {/* Weather Widget */}
  <div className="bg-gray-700 p-6 rounded-xl shadow-md flex flex-col items-center">
    <WiDayCloudy size={50} className="text-yellow-300" />
    <p className="text-xl font-semibold mt-2">16°C</p>
    <p className="text-sm">Sunday Morning</p>

    <div className="flex gap-4 mt-4 text-xs">
      <div className="flex items-center gap-2">
        <WiStrongWind className="text-blue-300" />
        <p>Wind: 30 km/h</p>
      </div>
      <div className="flex items-center gap-2">
        <BsSpeedometer2 className="text-red-300" />
        <p>Pressure: 720 hPa</p>
      </div>
      <div className="flex items-center gap-2">
        <WiRaindrop className="text-blue-400" />
        <p>Rain: 60%</p>
      </div>
    </div>

    <div className="mt-4 text-xs text-gray-400 flex justify-between w-full">
      <p>⬆ +6 km/h</p>
      <p>⬇ -20 hPa</p>
      <p>⬇ -12%</p>
    </div>

    <button className="mt-3 text-sm text-purple-300 hover:text-purple-500">See all</button>
  </div>

  {/* Power Consumption */}
  <div className="bg-gray-700 p-6 rounded-xl shadow-md">
    <h2 className="text-lg font-bold text-purple-300">Power Consumption</h2>

    <div className="flex justify-between items-center mt-2">
      <div className="bg-purple-500 px-4 py-2 rounded-lg text-white">48KWh Today</div>
      <div className="bg-blue-500 px-4 py-2 rounded-lg text-white">680KWh This Month</div>
    </div>

    <ul className="mt-4 text-sm space-y-2">
      <li className="flex justify-between"><span>Lamps</span> <span>78 KWh (10 devices)</span></li>
      <li className="flex justify-between"><span>Smart TV</span> <span>180 KWh (1 device)</span></li>
      <li className="flex justify-between"><span>Coffee Machine</span> <span>110 KWh (1 device)</span></li>
      <li className="flex justify-between"><span>Printer</span> <span>40 KWh (1 device)</span></li>
      <li className="flex justify-between"><span>Washing Machine</span> <span>133 KWh (1 device)</span></li>
      <li className="flex justify-between"><span>Wi-Fi Router</span> <span>30 KWh (2 devices)</span></li>
    </ul>
  </div>

 
  

  {/* To-Do List */}
  <div className="bg-gray-700 p-6 rounded-xl shadow-md">
    <h2 className="text-lg font-bold text-purple-300">To-Do List</h2>
    <ul className="mt-3 text-sm space-y-2">
      <li className="flex items-center gap-2">
        <input type="checkbox" className="accent-purple-500" />
        Check Air Humidifier Filter
      </li>
      <li className="flex items-center gap-2">
        <input type="checkbox" className="accent-purple-500" />
        Reduce TV Brightness for Energy Saving
      </li>
      <li className="flex items-center gap-2">
        <input type="checkbox" className="accent-purple-500" />
        Schedule Coffee Machine Maintenance
      </li>
    </ul>
  </div>

  {/* User Profile */}
  <div className="flex items-center gap-4 bg-gray-700 p-4 rounded-xl shadow-md">
  <img src={img6} alt="img6" className="w-8 h-8 rounded-full" />
    <div>
      <p className="text-sm font-semibold">Ann Doe</p>
      <p className="text-xs text-gray-400">Home Owner</p>
    </div>
  </div>
</aside>



      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-4xl font-bold">Hi Ann!</h2>
        {/* Room Tabs */}
        <div className="flex gap-4 mt-4 bg-gradient-to-br from-blue-900 to-gray-900 p-3 rounded-xl shadow-lg backdrop-blur-md">
  {["Living Room", "Kitchen", "Bathroom", "Bedroom", "Backyard", "Terrace"].map((room) => (
    <button
      key={room}
      className="relative px-6 py-3 rounded-lg bg-gradient-to-br from-blue-700 to-gray-800 
                 text-gray-200 font-semibold uppercase tracking-wide transition-all duration-300 
                 hover:bg-yellow-500 hover:text-white hover:shadow-lg hover:shadow-yellow-400/50 
                 active:scale-95"
    >
      <span className="absolute inset-0 bg-yellow-500 opacity-10 blur-lg rounded-lg"></span>
      {room}
    </button>
  ))}
</div>

        <div
  className="mt-6 bg-gray-700 p-4 rounded-xl flex items-center gap-4 w-auto h-1/2 relative"
  style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
>
  {/* Weather Overlay */}
  <div className="absolute top-4 left-4 flex flex-col gap-2 bg-gray-900 bg-opacity-50 p-3 rounded-lg shadow-md">
    <div className="flex items-center gap-2 text-white">
      <WiDayCloudy size={24} className="text-yellow-300" /> <span>16°C</span>
    </div>
    <div className="flex items-center gap-2 text-white">
      <FaTemperatureHigh size={20} className="text-red-400" /> <span>Feels Like 18°C</span>
    </div>
    <div className="flex items-center gap-2 text-white">
      <WiRaindrop size={20} className="text-blue-400" /> <span>Rain: 60%</span>
    </div>
  </div>
 {/* Weather & Music Section */}

 

  {/* 🎵 Music Player Overlay */}
  <div className="absolute left-4 bottom-4 bg-gray-800/80 backdrop-blur-lg text-white px-4 py-2 rounded-xl flex items-center w-80 h-20 shadow-lg">
    {/* Album Cover */}
    {/* 🎵 Music Player Overlay (Properly Aligned) */}

  {/* Album Cover */}
  <img src={img5} alt="Album Cover" className="w-14 h-14 rounded-lg mr-3 object-cover" />

  {/* Song Details + Progress Bar (Flex Column) */}
  <div className="flex-1 flex flex-col justify-center">
    <p className="text-start font-semibold leading-tight">Oops! I did it again</p>
    <p className="text-xs text-gray-400">BRITNEY SPEARS</p>

    {/* Progress Bar */}
    <div className="relative mt-1">
      <input 
        type="range" 
        min="0" 
        max="100" 
        value="40" 
        className="w-full h-1 rounded bg-gray-600 accent-white"
      />
      <div className="flex justify-between text-xs mt-1 text-gray-300">
        <span>1:31</span>
        <span>3:02</span>
      </div>
    
  </div>

  {/* Music Icon (Aligned Right) */}
 
</div>

</div>

</div>

        {/* Device Containers */}
        <div className="mt-6 grid grid-cols-3 gap-4">
  {[
    { img: img4, name: "Living Lamp" },
    { img: img3, name: "Homepod" },
    { img: img2, name: "Air Humidifier" },
  ].map((device, index) => (
    <div
      key={index}
      className="relative p-6 bg-gray-800 rounded-2xl shadow-xl text-center 
                 w-auto h-80 flex flex-col justify-end items-center 
                 transition-transform duration-300 hover:scale-105"
      style={{
        backgroundImage: `url(${device.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>

      {/* Device Name */}
      <p className="relative z-10 text-lg font-semibold text-white mb-4">
        {device.name}
      </p>

      {/* Stylish Power Button */}
      <button
        className="relative z-10 bg-gradient-to-r from-gray-900 to-gray-700 
                   text-white px-6 py-3 rounded-lg w-full flex justify-center items-center 
                   shadow-lg border border-gray-600 hover:border-purple-400 
                   transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
      >
        <span className="absolute inset-0 bg-purple-500 opacity-10 blur-xl rounded-lg"></span>
        <FaPowerOff size={24} className="text-purple-400 drop-shadow-lg" />
        <span className="ml-2 text-sm font-semibold text-gray-300">
          Power Off
        </span>
      </button>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
