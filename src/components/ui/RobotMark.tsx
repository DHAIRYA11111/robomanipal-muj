export default function RobotMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 2.5 35 11.25v17.5L20 37.5 5 28.75v-17.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <rect
        x="12.5"
        y="15"
        width="15"
        height="11.5"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="16.8" cy="20.75" r="1.5" fill="currentColor" />
      <circle cx="23.2" cy="20.75" r="1.5" fill="currentColor" />
      <path d="M20 11v4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="9.3" r="1.6" fill="currentColor" />
      <path d="M9 20h-3M34 20h-3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
