interface PushPinProps {
  className?: string;
  size?: number;
}

export default function PushPin({ className = "", size = 48 }: PushPinProps) {
  return (
    <div
      className={`relative inline-block select-none pointer-events-none filter drop-shadow-[0_8px_8px_rgba(0,0,0,0.45)] ${className}`}
      style={{ width: size, height: size * 1.2 }}
    >
      <svg
        viewBox="0 0 60 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient
            id="pin-head"
            cx="35%"
            cy="30%"
            r="65%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor="#ff7b7b" />
            <stop offset="45%" stopColor="#e50914" />
            <stop offset="85%" stopColor="#9b0007" />
            <stop offset="100%" stopColor="#550004" />
          </radialGradient>
          <linearGradient
            id="pin-shaft"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="50%" stopColor="#b30006" />
            <stop offset="100%" stopColor="#5e0004" />
          </linearGradient>
          <linearGradient id="pin-needle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e0e0e0" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#888888" />
          </linearGradient>
        </defs>

        {/* Needle */}
        <path
          d="M30 48 L27 70 L33 70 Z"
          fill="url(#pin-needle)"
          stroke="#444"
          strokeWidth="0.5"
        />

        {/* Lower body / skirt */}
        <path
          d="M18 42 C18 48 42 48 42 42 L38 34 L22 34 Z"
          fill="url(#pin-shaft)"
        />

        {/* Waist / narrow connector */}
        <path
          d="M22 34 L38 34 L36 28 L24 28 Z"
          fill="#800005"
        />

        {/* Upper round head */}
        <circle cx="30" cy="20" r="18" fill="url(#pin-head)" />

        {/* Highlight sheen */}
        <ellipse
          cx="25"
          cy="15"
          rx="6"
          ry="3.5"
          transform="rotate(-30 25 15)"
          fill="#ffffff"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
