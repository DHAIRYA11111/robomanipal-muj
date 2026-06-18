import clsx, { type ClassValue } from "clsx";

/** Conditional className helper. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/** Zero-pad a number for the cinematic counters (e.g. 7 -> "07"). */
export function pad(n: number, width = 2): string {
  return String(n).padStart(width, "0");
}
