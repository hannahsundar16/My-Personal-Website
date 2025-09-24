import { Linkedin, Send } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import Navbar from './components/header';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen w-screen p-0 m-0 relative bg-pink-aura animate-aura overflow-hidden">
      {/* Animated Pink Aura Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,182,193,0.4)_0%,transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-pink-300 rounded-full blur-3xl opacity-40 animate-float" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-pink-200 rounded-full blur-2xl opacity-30 animate-float-reverse" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-pink-100 rounded-full blur-2xl opacity-20 animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-pink-200 rounded-full blur-2xl opacity-30 animate-float-reverse" />
      </div>

      {/* Top Navbar (centered for desktop) */}
      <div className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 z-50">
        <Navbar />
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden w-full z-50">
        <Navbar />
      </div>

      <main className="flex flex-col gap-6 sm:gap-8 row-start-2 items-center pt-32 p-0 m-0 w-screen grow z-10">
        <section id="home" className="m-0 p-0 w-full">
          <div className="flex flex-col items-center justify-start h-screen w-screen px-6 py-10">

            {/* NAME + TITLE + DESCRIPTION */}
            <div className="text-center max-w-xl animate-fade-in">
              <h1 className="font-bold text-4xl sm:text-5xl text-[#ff4f87] mb-2">
                Hannah Sundar
              </h1>
              <h2 className="text-2xl font-semibold text-[#6cd0d0] mb-3">
                Human-Computer Interaction Engineering Lead
              </h2>
              <p className="text-md sm:text-lg text-gray-700">
                High School Junior based in Atlanta with interests in AI, Machine Learning, and Web Development
              </p>
            </div>

            {/* PROFILE IMAGE */}
            <div className="mt-8 animate-fade-in delay-200">
              <Image
                src="/profile2.jpg"
                alt="Picture of Hannah"
                width={230}
                height={230}
                className="rounded-full border-[6px] border-[#ffb6c1] shadow-[0_0_30px_#ffb6c1] object-cover aspect-square"
              />
            </div>

            {/* CONTACT ICONS */}
            <div className="flex gap-6 mt-8 animate-fade-in delay-300">
              <a href="mailto:hannahsundar2009@gmail.com">
                <Send size={36} className="text-black hover:text-[#ffcbdb] hover:scale-110 transition duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/hannah-sundar-187520216/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={36} className="text-black hover:text-[#6cd0d0] hover:scale-110 transition duration-300" />
              </a>
              <a
                href="https://github.com/hannahsundar16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={36} className="text-black hover:text-[#c0aaff] hover:scale-110 transition duration-300" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
