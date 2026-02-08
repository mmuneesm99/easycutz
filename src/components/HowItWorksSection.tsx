import Image from "next/image";

const steps = [
  {
    image: "/step_1.jpg",
    step: 1,
    title: "Salon signs up",
    description:
      "Create your salon account in minutes. No lengthy onboarding just add the basics and get started.",
  },
  {
    image: "/step_2.jpg",
    step: 2,
    title: "Configure services & staff",
    description:
      "Add your services and team. Set availability and let the system manage scheduling automatically.",
  },
  {
    image: "/step_3.jpg",
    step: 3,
    title: "Customers book online",
    description:
      "Customers discover you online and book instantly. Reduce no-shows with automated reminders.",
  },
  {
    image: "/step_4.jpg",
    step: 4,
    title: "Manage & grow your business",
    description: "Use insights to optimize operations and scale with confidence.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="text-gray-800">How It</span>{" "}
          <span className="text-[#6753FF] italic">Works</span>
        </h2>

        <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:gap-10">
          {steps.map((item) => (
            <article
              key={item.step}
              className="flex flex-col overflow-hidden  bg-white shadow-sm sm:flex-row"
            >
              {/* Image area - design spec 220×305px on sm+, full width on mobile */}
              <div className="relative w-full flex-shrink-0 bg-[#0d4f4f] aspect-[220/305] sm:h-[305px] sm:w-[220px] sm:aspect-auto">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 220px"
                />
              </div>
              {/* Text content */}
              <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5 lg:p-6">
                <span className="mb-2 inline-flex w-fit rounded-full bg-[#E5FFD2] px-4 py-1.5 text-sm font-bold text-gray-800 sm:px-6 sm:py-2">
                  Step {item.step}
                </span>
                <div className="flex flex-col space-y-2 border-t border-gray-200 pt-3 sm:divide-y sm:divide-gray-300 sm:border-t-0 sm:pt-0">
                  <h3 className="text-base pb-3 font-semibold text-[#000000] sm:text-lg lg:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
