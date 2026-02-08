import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="grid min-h-0 w-full grid-cols-1 lg:grid-cols-2"
    >
      {/* Left: visual - tablet/dashboard image on dark background */}
      <div className="relative min-h-[320px] bg-gradient-to-b from-gray-900 to-black lg:min-h-[520px]">
        <Image
          src="/about-hero.png"
          alt="Eazy Cutz dashboard in use"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
      </div>

      {/* Right: content - light lavender, heading, copy, CTA */}
      <div className="flex flex-col justify-center bg-[#EAEEFE] px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-[#000000] sm:text-4xl lg:text-[2.25rem]">
          About <span className="text-[#6753FF] italic">Us</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg">
          We&apos;re building a seamless salon booking experience for both
          customers and salon owners. Our platform removes the friction of
          manual scheduling and phone calls, helping salons operate
          efficiently while giving customers the convenience they expect.
        </p>
        <Link
          href="#contact"
          className="mt-10 inline-flex w-fit items-center justify-center rounded-xl bg-gradient-to-r from-[#6753FF] to-[#001CD5] px-8 py-3.5 text-base font-medium text-white shadow-md transition-opacity hover:opacity-95"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
