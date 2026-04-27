import NoteNumber from "@/components/atoms/NoteNumber";
import JiraLogo from "@/components/atoms/JiraLogo";

type NoteVariant = "active" | "future" | "completed";

interface NoteHeaderProps {
  number: number;
  topic: string;
  issueId: string;
  variant: NoteVariant;
}
const headerColors: Record<NoteVariant, string> = {
  active:    "bg-[#E05252]",
  future:    "bg-[#7B4FBE]",
  completed: "bg-[#A0A0A0]",
};

export default function NoteHeader({ number, topic, issueId, variant }: NoteHeaderProps) {
  const muted = variant === "completed";

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-t-xl ${headerColors[variant]}`}>
      <NoteNumber number={number} muted={muted} />
      <span className={`flex-1 text-base font-semibold ${muted ? "text-white/70" : "text-white"}`}>
        {topic}
      </span>
      <span className={`text-sm font-medium mr-2 ${muted ? "text-white/60" : "text-white"}`}>
        {issueId}
      </span>
      <JiraLogo muted={muted} />
    </div>
  );
}
