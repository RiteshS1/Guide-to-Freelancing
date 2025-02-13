"use client";
import React, { useState } from 'react';
import { BackgroundBeams } from "./ui/background-beams";

const Footer = () => {
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:?subject=Suggestion&body=${encodeURIComponent(suggestion)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="Contact">
      <footer className="p-8 bg-black text-white">
        <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
              Contribute to Open Source
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatem nobis consequuntur rem ut facilis fuga ea excepturi ipsa quo cum minus doloribus sequi, commodi, dolorem nam. Temporibus debitis est soluta ex ipsum quasi molestias ipsa possimus, tempore consequuntur. Laudantium recusandae necessitatibus iste rem quod vitae incidunt.
            </p>
            <form onSubmit={handleSubmit} className="relative z-10 mt-4 flex flex-col items-center">
              <input
                type="text"
                placeholder="@delphic_RS"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="rounded-lg p-2 border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700"
              />
              <button
                type="submit"
                className="mt-2 px-4 py-2 text-gray-300 rounded-full bg-gradient-to-b from-neutral-300 to-neutral-600 text-center transition-colors hover:text-black"
              >
                Submit
              </button>
            </form>
          </div>
          <BackgroundBeams />
        </div>
        <div className='text-center'>
          <h2>
            Made with 🤍 by RS
          </h2>
        </div>
      </footer>
    </section>
  );
};

export default Footer;