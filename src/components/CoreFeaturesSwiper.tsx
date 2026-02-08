"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const slides = [
  {
    src: "/swiper_asset_1.jpg",
    title: "Online Appointments",
    description: "Let customers book anytime from your website.",
  },
  {
    src: "/swiper_asset_2.jpg",
    title: "Customer Management",
    description: "Manage your customer base and bookings in one place.",
  },
  {
    src: "/swiper_asset_3.jpg",
    title: "Reports & Analytics",
    description: "Insights and reports that drive growth.",
  },
  {
    src: "/swiper_asset_4.jpg",
    title: "Staff & Slot Management",
    description: "Assign staff, manage shifts, and avoid overlaps.",
  },
  {
    src: "/swiper_asset_5.jpg",
    title: "Smart Notifications",
    description: "Automatic reminders to reduce missed appointments.",
  },
];

export default function CoreFeaturesSwiper() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section id="features" className="relative overflow-hidden bg-[#f0eef5] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header: title + nav arrows */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 sm:mb-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            <span className="text-gray-800">Core</span>{" "}
            <span className="text-[#6753FF] italic">Features</span>
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => swiperInstance?.slidePrev()}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-900 text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => swiperInstance?.slideNext()}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-900 text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
          touchEventsTarget="container"
          grabCursor
          onSwiper={setSwiperInstance}
          className="!overflow-visible"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-full overflow-hidden bg-gray-900 shadow-xl">
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-16">
                  <h3 className="text-lg font-semibold text-transparent sm:text-xl">{slide.title}</h3>
                  <p className="mt-1 text-sm text-transparent">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
