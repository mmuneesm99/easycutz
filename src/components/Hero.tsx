"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F6F6F6] px-6 pt-16 pb-16 sm:px-8 sm:pt-20 sm:pb-20 lg:px-10 lg:pt-24 lg:pb-28">
      {/* Single large rounded card (reference: content centered in rounded container) */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#ebe9f5] sm:rounded-[2.5rem]">
        {/* Hero background texture - fills card behind content */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.svg"
            alt=""
            fill
            className="object-cover object-center opacity-90"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>

        <div className="relative z-10 px-6 pt-10 sm:px-8 sm:pt-12 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
          {/* Hero copy + CTA */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-[#171717] sm:text-3xl md:text-4xl lg:text-5xl">
              All-in-One Platform for <br />
              <span className="text-[#6753FF] italic">
                Modern Salons
              </span>
            </h1>
            <p className="mt-5 text-sm text-[#595959] sm:mt-6 sm:text-base md:text-lg lg:mt-6 lg:text-xl">
              Manage bookings, staff, customers, and payments without chaos.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#6753FF] to-[#001CD5] px-8 py-3.5 text-base font-medium text-white shadow-lg transition-opacity hover:opacity-95 sm:mt-10"
            >
              Get for free
            </Link>
          </div>

          {/* Tablet + floating 3D elements */}
          <div className="relative mx-auto mt-10 max-w-4xl sm:mt-14 md:mt-16 lg:mt-20">
            <div className="relative w-full min-h-[120px] sm:min-h-[200px] md:min-h-[320px]">
              {/* Dashboard tablet - floating, dark bezel, rounded */}
              <div className="absolute bottom-0 left-0 h-[75%] w-full sm:h-[80%] lg:h-full">
                <Image
                  src="/dashbord.png"
                  alt="Eazy Cutz Dashboard"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>

              {/* Metallic scissors - left; smaller on mobile, desktop unchanged */}
              <div className="absolute left-5 top-3 h-12 w-12 opacity-95 sm:-left-2 sm:-top-5 sm:h-14 sm:w-14 lg:-left-5 lg:top-[-20%] lg:h-36 lg:w-36">
                <Image
                  src="/scissor.svg"
                  alt=""
                  width={150}
                  height={150}
                  className="h-full w-full object-contain drop-shadow-xl"
                  sizes="(max-width: 640px) 40px, (max-width: 1024px) 56px, 144px"
                />
              </div>

              {/* Glossy blue ring - bottom-left; smaller on mobile */}
              <div className="absolute bottom-[5%] left-5 h-8 w-8 opacity-95 sm:bottom-[8%] sm:-left-5 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:-left-12 lg:h-24 lg:w-24">
                <Image
                  src="/circle.svg"
                  alt=""
                  width={96}
                  height={96}
                  className="h-full w-full object-contain drop-shadow-xl"
                  sizes="(max-width: 640px) 32px, (max-width: 1024px) 80px, 96px"
                />
              </div>

              {/* Iridescent pyramid - top-right, partially behind tablet */}
              <div className="absolute w-10 right-5 top-4 h-10 md:-right-14 z-[-1] md:-top-[18%]  opacity-95 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
                <Image
                  src="/pyramid.svg"
                  alt=""
                  width={146}
                  height={146}
                  className="h-full w-full object-contain drop-shadow-xl"
                />
              </div>

              {/* Metallic trimmer/clippers - bottom-right, angled */}
              <div className="absolute w-12 right-5 bottom-[0%] md:-right-10 -rotate-12 opacity-95 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
                <Image
                  src="/trimmer.svg"
                  alt=""
                  width={195}
                  height={195}
                  className="h-full w-full object-contain drop-shadow-xl rotate-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
