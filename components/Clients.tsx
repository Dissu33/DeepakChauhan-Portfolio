"use client";

import React from "react";

import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="techstack" className="py-20">
      <h1 className="heading">
        Technologies I <span className="text-purple">work with</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-black-200 rounded-lg border border-white/10 p-3">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white-200 text-sm md:text-base">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
