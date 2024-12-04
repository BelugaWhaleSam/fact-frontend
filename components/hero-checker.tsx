"use client";

import Image from "next/image";
import Logo from "@/public/images/logo-no-border-center-800.png";
import React from "react";
import YouTube from "react-youtube";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";

export default function Hero() {
  const videoOps = {
    height: "472",
    width: "840",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            {/* On-Chain{" "}
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Zero-Knowledge Proof Framework{" "}
              </p>
              for Verifiable Fact-Checking */}
            <h1 className="text-2xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6ls relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              On-Chain <br />
              <Cover>
                Zero-Knowledge Proof Framework <br />
                for Verifiable Fact-Checking
              </Cover>
            </h1>

            <div className="max-w-3xl mx-auto">
              <div
                className="max-w-xs mx-auto sm:max-w-none mb-4 sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="/more"
                  >
                    Learn More
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="/demo"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="text-center pb-12 md:pb-16">
            <h4
              className="text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-3"
              data-aos="zoom-y-out"
            >
              Watch the demo video below.
            </h4>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <YouTube videoId="Z3zUcAwOs1A" opts={videoOps} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
