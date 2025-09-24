'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const ExperienceCarousel = dynamic(() => import('./Carousel'), {
  ssr: false,
});

export const ExperienceSection = () => {
    return (
      <section id="exp">
        <div className="flex items-center justify-center w-full">
          <div id="education" className="bg-gradient-to-r from-[#ffcbdb] to-[#fc9dba] p-3 rounded-lg">
            <h1 className="text-2xl text-center bg-clip-text underline text-black bg-gradient-to-r from-[#ffcbdb] to-[#fbceb1]">
              Recent Experiences
            </h1>
          </div>
        </div>
        <ExperienceCarousel />
      </section>
    );
  };
