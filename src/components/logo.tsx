import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
      role="img"
      aria-label="AFH logo"
    >
      <path
        d="M20 2.5L35 9v11c0 10-6.5 15.8-15 17.5C11.5 35.8 5 30 5 20V9l15-6.5Z"
        stroke="url(#afh-gradient)"
        strokeWidth="1.6"
        fill="rgba(59,130,246,0.06)"
      />
      <path d="M13 24.5 18 15l4 7 3-5 3 4" stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="13" cy="24.5" r="1.7" fill="#3b82f6" />
      <circle cx="22" cy="22" r="1.7" fill="#6366f1" />
      <circle cx="28" cy="17" r="1.7" fill="#22d3ee" />
      <defs>
        <linearGradient id="afh-gradient" x1="5" y1="2.5" x2="35" y2="37.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}
