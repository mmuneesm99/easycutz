"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

const items = [
  "Online appointment booking",
  "Walk-in customer management",
  "Staff schedule tracking",
  "WhatsApp / SMS notifications",
  "Reports & analytics",
  "Payment tracking",
];

const AUTO_SCROLL_SPEED = 1;
const AUTO_SCROLL_INTERVAL = 30;

export default function FeaturesStripSwiper() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const id = setInterval(() => {
      el.scrollLeft += AUTO_SCROLL_SPEED;
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0620D8] py-8 sm:py-10">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-6 overflow-x-auto overflow-y-hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {[...items, ...items].map((label, index) => (
            <div
              key={index}
              className="flex min-w-0 flex-shrink-0 items-center gap-4 rounded-xl px-2 "
            >
              <p className="text-center max-w-[150px] text-sm font-medium leading-snug text-white sm:text-base">
                {label}
              </p>
              <div className="h-12 w-12 flex-shrink-0 sm:h-14 sm:w-14">
                <Image
                  src="/visual.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
