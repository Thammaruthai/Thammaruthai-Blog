import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <NavBar />
      <HeroSection />
    </>
  );
}

function NavBar() {
  return (
    <>
      <nav className="w-full flex justify-center items-center border-b-2 border-stone-200">
        <div className="flex flex-row justify-between items-center py-4 w-10/12">
          <div className="text-3xl">hh.</div>

          <div className="flex flex-row justify-between items-center gap-4 max-sm:hidden">
            <button className="border-2 border-gray-500 bg-white w-32 h-12 rounded-full">
              Log in
            </button>
            <button className="border-2 border-black bg-[#26231E] w-32 h-12 text-slate-50 rounded-full">
              Sign in
            </button>
          </div>

          <div id="hambarger" className="sm:hidden ">
            <svg
              className="w-5 h-5 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}

function HeroSection() {
  return (
    <>
      <section className="w-full flex justify-center items-center py-8 ">
        <div
          id="heroSectionContent"
          className="w-10/12 flex justify-between items-center gap-14 max-sm:flex-col max-sm:w-11/12"
        >
          <div
            id="preWord"
            className="flex flex-col text-right w-4/12 gap-6 max-sm:w-full max-sm:text-center"
          >
            <div
              id="preWord_head"
              className="text-[#26231E] font-semibold Stay Inspired max-sm:text-[2.5rem]"
            >
              <h2 className="text-5xl">Stay Informed, Stay Inspired</h2>
            </div>

            <div id="preWord_content" className="text-[#75716B] font-medium">
              <h3 className="text-base">
                Discover a World of Knowledge at Your Fingertips. Your Daily
                Dose of Inspiration and Information.
              </h3>
            </div>
          </div>

          <div
            id="profilePic"
            className="w-1/3 h-[529px] overflow-hidden max-sm:w-full"
          >
            <img
              src="./src/img/profilePic.jpg"
              alt="my profile picture"
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>

          <div
            id="about author"
            className="w-4/12 text-[#75716B] max-sm:w-full"
          >
            <div id="author_section">
              <h4 className="text-xs">-Author</h4>
              <h2 className="text-2xl font-semibold text-[#43403B]">
                Thammaruthai W.
              </h2>
            </div>

            <div
              id="author_content"
              className="flex flex-col gap-4 py-4 font-medium"
            >
              <h3 className="text-base">
                I am a pet enthusiast and freelance writer who specializes in
                animal behavior and care. With a deep love for cats, I enjoy
                sharing insights on feline companionship and wellness.
              </h3>
              <h3>
                When i’m not writing, I spends time volunteering at my local
                animal shelter, helping cats find loving homes.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
