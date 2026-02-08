import Image from "next/image";
import Link from "next/link";

export default function SalonProSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#D2DCFF] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="relative mx-auto max-w-5xl">
        {/* Left graphic - star */}
        <div className="absolute -left-4 top-1/2 hidden -translate-y-1/2 sm:block md:-left-8 md:h-32 md:w-32 lg:h-40 lg:w-40">
          <Image
            src="/emojistar.svg"
            alt=""
            width={160}
            height={160}
            className="h-full w-full object-contain drop-shadow-lg"
          />
        </div>

        {/* Right graphic - scissors */}
        <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 sm:block md:-right-8 md:h-32 md:w-32 lg:h-60 -rotate-12 lg:w-60">
          <Image
            src="/scissor.svg"
            alt=""
            width={351}
            height={351}
            className="h-full w-full object-contain drop-shadow-lg"
          />
        </div>

        {/* Central text + CTA */}
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#000000] sm:text-3xl lg:text-4xl">
            Run your salon professionally{" "}
            <span className="bg-gradient-to-r from-[#2E8330] to-[#0CDE13] bg-clip-text text-transparent">and earn more</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-700 sm:text-lg">
            Accept online bookings, handle walk-ins, track staff, and send
            automatic reminders — all from one simple dashboard.
          </p>
          <Link
            href="#contact"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#6753FF] to-[#001CD5] px-8 py-3.5 text-base font-medium text-white shadow-md transition-opacity hover:opacity-95"
          >
            Start Free Today
          </Link>
        </div>
      </div>
    </section>
  );
}
