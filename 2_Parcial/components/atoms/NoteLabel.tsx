interface NoteLabelProps {
  text: string;
  align?: "left" | "right";
  muted?: boolean;
}

export default function NoteLabel({ text, align = "left", muted = false }: NoteLabelProps) {
  return (
    <span
      className={`text-sm ${muted ? "text-gray-400" : "text-gray-400"} ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {text}
    </span>
  );
}
