function OverlayPattern() {
  return (
    <div className="absolute left-0 top-0 z-10 h-[55dvh] w-full">
      <div className="absolute z-10 h-36 w-full bg-gradient-to-t from-transparent to-muted" />
      <div className="absolute bottom-0 z-10 h-36 w-full bg-gradient-to-t from-muted to-transparent" />
      <svg className="h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            height="20"
            id="a"
            patternTransform="scale(2) rotate(0)"
            patternUnits="userSpaceOnUse"
            width="20"
          >
            <rect fill="#2b2b3100" height="100%" width="100%" x="0" y="0" />
            <path
              d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z"
              fill="none"
              stroke="#bab6b6ff"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect fill="url(#a)" height="800%" transform="translate(0,0)" width="800%" />
      </svg>
    </div>
  );
}

export default OverlayPattern;
