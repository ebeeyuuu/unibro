"use client";
import Navbar from "./components/LandingPage/Navbar";
import Hero from "./components/LandingPage/Hero";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <Hero />
    </div>
  );
}
