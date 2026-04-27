interface NoteNumberProps {
  number: number;
  muted?: boolean;
}

export default function NoteNumber({ number, muted = false }: NoteNumberProps) {
  return (
    <span
      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold flex-shrink-0
        ${muted ? "border-white/50 text-white/70" : "border-white text-white"}`}
    >
      {number}
    </span>
  );
}
