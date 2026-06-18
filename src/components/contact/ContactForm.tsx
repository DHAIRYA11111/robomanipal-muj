"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { SITE } from "@/data/site";

const INTERESTS = [
  "Robotics Team",
  "Research Team",
  "Development Team",
  "Sponsorship / Collaboration",
  "General Enquiry",
];

const fieldClass =
  "w-full border border-cotton/15 bg-noir-800/60 px-4 py-3.5 text-sm text-cotton placeholder:text-cotton/30 transition-colors focus:border-cherry-glow/60 focus:outline-none";
const labelClass =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-cotton/50";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: INTERESTS[0],
    message: "",
  });

  const update =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[RoboManipal] ${form.interest} — ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nInterest: ${form.interest}\n\n${form.message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center border border-cherry-glow/30 bg-noir-800/40 p-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cherry-glow/50 text-cherry-glow">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight">
          Your mail is ready
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-cotton/60">
          We opened your email client with the message pre-filled. Hit send and
          we&apos;ll get back to you. No client opened?{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-cherry-glow underline"
          >
            Email us directly
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn btn-ghost mt-8"
        >
          Write another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-cotton/10 bg-noir-800/40 p-7 md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="interest">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          value={form.interest}
          onChange={update("interest")}
          className={`${fieldClass} appearance-none`}
        >
          {INTERESTS.map((it) => (
            <option key={it} value={it} className="bg-noir-900">
              {it}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us what you're building or what you'd like to know…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-7 w-full sm:w-auto">
        Send Message <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
