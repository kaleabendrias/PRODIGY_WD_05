"use client"
import { useEffect, useState } from "react";

export default function Home() {
  let [city, setCity] = useState("")
  const [data, setData]= useState("")
    async function fetchit(
      e: React.FormEvent<HTMLFormElement>
    ): Promise<any> {
      e.preventDefault();
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`
        );
        setCity("");
        const res = await response.json();
        console.log(res);
        setData(res);
      } catch (err) {
        console.log(err);
      }
    }
 
  return (
    <main className=" bg-slate-800 text-slate-200 h-screen">
      <div className=" text-2xl">
        <h1 className="flex flex-col justify-center items-center  bg-slate-900 w-screen h-auto p-6">
          Weather API Implementation
        </h1>
        <div className="flex justify-center items-center my-8">
          <form onSubmit={fetchit}>
            <input
              type="text"
              className="bg-slate-600 p-4 rounded-xl"
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              type="submit"
              className="border rounded-md px-2 mx-2 bg-cyan-800 hover:bg-slate-900"
              onClick={(e) => fetchit(e)}
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          {data ? (
            <div className="mx-4 bg-slate-900 p-8 flex flex-col justify-center items-center">
              <h1 className="p-2">Temp: {data.main.temp}</h1>
              <h1 className="p-2">Name: {data.name}</h1>
              <h1 className="p-2">{data.weather[0].main}</h1>
              <h1 className="p-2">Wind Speed: {data.wind.speed}</h1>
              <h1 className="p-2">Humidity: {data.main.humidity}</h1>
              <h1 className="p-2">Pressure: {data.main.pressure}</h1>
            </div>
          ) : null}
        </div>
      </div>
      <div className="absolute bottom-0 w-screen">
        <div className="flex justify-center items-center bg-slate-950 p-6">
          <a
            href="https://github.com/kaleabendrias"
            className="text-xl font-bold underline hover:text-gray-700"
          >
            Kaleab Endrias
          </a>
        </div>
      </div>
    </main>
  );
}
