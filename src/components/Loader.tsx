"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const MIN_DISPLAY_MS = 800;
const FADE_OUT_MS = 300;

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let mounted = true;
    const start = Date.now();

    const hide = () => {
      if (!mounted) return;
      const elapsed = Date.now() - start;
      const delay = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => {
        if (!mounted) return;
        setIsVisible(false);
        setTimeout(() => {
          if (mounted) setIsMounted(false);
        }, FADE_OUT_MS);
      }, delay);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
      return () => {
        mounted = false;
        window.removeEventListener("load", hide);
      };
    }
    return () => {
      mounted = false;
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#e6e6fa] transition-opacity duration-300 ease-out"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/Logo.png"
          alt="Eazy Cutz"
          width={160}
          height={52}
          className="h-14 w-auto animate-pulse sm:h-16"
          priority
        />
      </div>
    </div>
  );
}
