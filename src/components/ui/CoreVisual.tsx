import { cn } from "@/lib/utils";

/**
 * Animated "robotics core" — concentric rotating rings, orbiting nodes,
 * a pulsing reactor hexagon and a sweeping scan arc. Pure SVG/CSS, no assets.
 */
export default function CoreVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("h-full w-full", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B81818" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#821010" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#821010" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="scanArc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B81818" stopOpacity="0" />
          <stop offset="100%" stopColor="#B81818" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* central glow */}
      <circle cx="200" cy="200" r="120" fill="url(#coreGlow)" />

      {/* outer dashed ring + ticks (slow spin) */}
      <g
        className="animate-spin-slow"
        style={{ transformOrigin: "200px 200px" }}
      >
        <circle
          cx="200"
          cy="200"
          r="178"
          stroke="rgba(237,233,221,0.18)"
          strokeWidth="1"
          strokeDasharray="2 8"
        />
        {Array.from({ length: 60 }).map((_, i) => (
          <line
            key={i}
            x1="200"
            y1="14"
            x2="200"
            y2={i % 5 === 0 ? 26 : 20}
            stroke="rgba(237,233,221,0.28)"
            strokeWidth="1"
            transform={`rotate(${i * 6} 200 200)`}
          />
        ))}
      </g>

      {/* mid ring (reverse spin) with orbit nodes */}
      <g
        className="animate-spin-mid-rev"
        style={{ transformOrigin: "200px 200px" }}
      >
        <circle
          cx="200"
          cy="200"
          r="138"
          stroke="rgba(237,233,221,0.22)"
          strokeWidth="1"
        />
        <circle cx="200" cy="62" r="4" fill="#B81818" />
        <circle cx="338" cy="200" r="3" fill="rgba(237,233,221,0.7)" />
        <circle cx="200" cy="338" r="3" fill="rgba(237,233,221,0.7)" />
        <circle cx="62" cy="200" r="3" fill="rgba(237,233,221,0.7)" />
      </g>

      {/* scan arc */}
      <g
        className="animate-spin-fast"
        style={{ transformOrigin: "200px 200px" }}
      >
        <path
          d="M200 92 A108 108 0 0 1 308 200"
          stroke="url(#scanArc)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* inner ring */}
      <circle
        cx="200"
        cy="200"
        r="100"
        stroke="rgba(237,233,221,0.12)"
        strokeWidth="1"
      />

      {/* crosshair */}
      <line x1="40" y1="200" x2="360" y2="200" stroke="rgba(237,233,221,0.07)" />
      <line x1="200" y1="40" x2="200" y2="360" stroke="rgba(237,233,221,0.07)" />

      {/* reactor hexagon */}
      <g className="animate-pulse-slow">
        <path
          d="M200 150 243 175v50L200 250 157 225v-50z"
          stroke="#B81818"
          strokeWidth="1.5"
          fill="rgba(130,16,16,0.18)"
        />
        <path
          d="M200 168 227 184v32L200 232 173 216v-32z"
          stroke="rgba(237,233,221,0.5)"
          strokeWidth="1"
        />
        <circle cx="200" cy="200" r="6" fill="#EDE9DD" />
      </g>
    </svg>
  );
}
