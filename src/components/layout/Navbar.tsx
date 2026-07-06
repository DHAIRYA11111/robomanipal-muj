"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/ui/Magnetic";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change + manage scroll lock
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[8000] transition-all duration-500",
          scrolled
            ? "border-b border-cotton/10 bg-noir-900/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="container-wide relative flex h-20 items-center justify-between md:h-28">
          <Link
            href="/"
            className="group hidden w-56 items-center justify-center md:flex"
            aria-label={`${SITE.name} home`}
          >
            <Image
              src="/robomanipal-muj-mark.png"
              alt=""
              width={170}
              height={170}
              priority
              className="h-[95px] w-[95px] object-contain transition-transform duration-500 group-hover:rotate-[30deg]"
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center md:hidden"
          >
            <Image
              src="/robomanipal-muj-mark.png"
              alt=""
              width={170}
              height={170}
              priority
              className="h-16 w-16 object-contain"
            />
          </button>

          {/* desktop links */}
          <ul className="hidden flex-1 items-center justify-evenly px-4 xl:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "link-underline font-mono text-xs uppercase tracking-[0.18em] transition-colors",
                    isActive(pathname, link.href)
                      ? "text-cherry-glow"
                      : "text-cotton/70 hover:text-cotton",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Magnetic className="hidden xl:block">
              <Link
                href="/contact"
                data-cursor="Contact"
                className="btn btn-primary !px-5 !py-2.5"
              >
                Contact Us <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-cotton/15 text-cotton transition-colors hover:border-cherry-glow/60 md:flex xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* mobile / overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[7999] flex flex-col bg-noir-900/97 px-6 pb-10 pt-24 backdrop-blur-xl xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
            <ul className="relative flex flex-1 flex-col justify-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-baseline gap-4 py-1 font-display text-4xl font-bold uppercase tracking-tight transition-colors sm:text-5xl",
                      isActive(pathname, link.href)
                        ? "text-cherry-glow"
                        : "text-cotton hover:text-cherry-glow",
                    )}
                  >
                    <span className="font-mono text-xs text-cotton/30">
                      0{i + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-cotton/40">
              <span>ACM SIGBED · MUJ</span>
              <a href={SITE.socials.instagram} className="hover:text-cotton">
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
