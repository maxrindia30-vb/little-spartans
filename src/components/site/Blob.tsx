export function Blob({ className = "", color = "var(--color-sun)" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M43.7,-63.2C56.1,-53.4,64.7,-39.3,69.8,-24.1C74.9,-8.9,76.5,7.4,71.5,21.4C66.6,35.5,55,47.3,41.6,55.9C28.2,64.4,13,69.6,-2.4,72.9C-17.9,76.2,-35.8,77.5,-47.9,69.4C-60,61.3,-66.4,43.7,-70.5,26.5C-74.6,9.3,-76.4,-7.5,-71.4,-22C-66.4,-36.5,-54.6,-48.7,-41.1,-58.3C-27.5,-67.8,-13.8,-74.7,1.5,-77C16.7,-79.2,31.3,-73.1,43.7,-63.2Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Burst({ className = "", color = "var(--color-sun)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        fill={color}
        d="M50 0l7 20 20-10-6 22 22 6-20 10 6 22-22-6-6 22-10-20-22 6 10-20-22-10 22-6-10-22 22 10z"
      />
    </svg>
  );
}
