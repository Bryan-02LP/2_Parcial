interface JiraLogoProps {
  muted?: boolean;
}

export default function JiraLogo({ muted = false }: JiraLogoProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 ${muted ? "opacity-50" : "opacity-100"}`}
    >
      <path
        d="M12 2L22 12L12 22L2 12L12 2Z"
        fill="white"
      />
      <path
        d="M12 6L18 12L12 18L6 12L12 6Z"
        fill={muted ? "#aaa" : "#0052CC"}
      />
    </svg>
  );
}
