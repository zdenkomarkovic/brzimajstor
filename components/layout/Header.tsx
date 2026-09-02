"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF, SERVICES, SITE_NAME } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Početna" },
  ...SERVICES.map((s) => ({ href: `/${s.slug}`, label: s.shortTitle })),
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4  sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt={`${SITE_NAME} logo`}
            width={200}
            height={200}
            priority
            className="h-20 w-20"
          />
          <span className="font-heading text-base font-bold leading-tight text-primary sm:text-lg">
            HausMajstor
            <span className="block text-xs font-medium text-accent-dark sm:text-sm">
              Beograd · 0-24
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary/80 transition hover:text-accent-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-primary-dark shadow-sm transition hover:bg-accent-dark hover:text-white sm:inline-flex"
          >
            📞 {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            aria-label="Otvori meni"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/15 text-primary lg:hidden"
          >
            <span className="sr-only">Meni</span>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-primary hover:bg-primary/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={PHONE_HREF}
                className="mt-2 block rounded-md bg-accent px-3 py-2.5 text-center text-sm font-bold text-primary-dark"
              >
                📞 Pozovite: {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
