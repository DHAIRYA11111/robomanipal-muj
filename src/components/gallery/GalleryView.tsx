"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/gallery";
import { cn } from "@/lib/utils";

const layoutClasses = {
  wide: "md:col-span-8 md:row-span-2",
  standard: "md:col-span-4 md:row-span-1",
  portrait: "md:col-span-4 md:row-span-2",
  panorama: "md:col-span-8 md:row-span-1",
};

export default function GalleryView() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  }, []);
  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % GALLERY_IMAGES.length,
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showNext, showPrevious]);

  const activeImage = activeIndex === null ? null : GALLERY_IMAGES[activeIndex];

  return (
    <>
      <section className="container-wide py-16 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-cotton/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Field notes / 2024—2025</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
              Inside the <span className="text-cherry-glow">work.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-cotton/55 md:text-right">
            Ten frames from workshops, demonstrations, events and the moments
            between them.
          </p>
        </div>

        <div className="grid auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[20rem]">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative overflow-hidden rounded-sm border border-cotton/10 bg-noir-800 text-left",
                layoutClasses[image.layout],
              )}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.65, delay: (index % 3) * 0.06 }}
              aria-label={`Open image: ${image.title}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 767px) 100vw, 66vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-noir-900/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-cotton/20 bg-noir-900/40 text-cotton opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cherry-glow">
                    Frame {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-tight md:text-2xl">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeImage && activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[9000] flex items-center justify-center bg-noir-900/95 p-4 backdrop-blur-xl md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-cotton/15 bg-noir-900/60 text-cotton transition-colors hover:border-cherry-glow md:right-8 md:top-8"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute bottom-6 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-cotton/15 bg-noir-900/60 text-cotton transition-colors hover:border-cherry-glow md:bottom-auto md:left-8 md:top-1/2 md:-translate-y-1/2"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <motion.div
              key={activeImage.src}
              className="relative h-[72vh] w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            <div className="pointer-events-none absolute inset-x-20 bottom-5 z-10 text-center md:bottom-6">
              <p className="font-display text-lg font-bold uppercase tracking-tight md:text-xl">
                {activeImage.title}
              </p>
              <p className="mt-1 hidden text-sm text-cotton/55 sm:block">
                {activeImage.caption}
              </p>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute bottom-6 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-cotton/15 bg-noir-900/60 text-cotton transition-colors hover:border-cherry-glow md:bottom-auto md:right-8 md:top-1/2 md:-translate-y-1/2"
              aria-label="Next image"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
