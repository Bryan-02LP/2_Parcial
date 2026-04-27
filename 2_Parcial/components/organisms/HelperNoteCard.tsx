import NoteHeader from "@/components/molecules/NoteHeader";
import NoteBody from "@/components/molecules/NoteBody";

export type NoteVariant = "active" | "future" | "completed";

export interface HelperNoteCardProps {
  number: number;
  topic: string;
  issueId: string;
  description: string;
  lastUpdated: string;
  variant: NoteVariant;
}

export default function HelperNoteCard({
  number,
  topic,
  issueId,
  description,
  lastUpdated,
  variant,
}: HelperNoteCardProps) {
  return (
    <div className="w-[344px] rounded-xl shadow-md overflow-hidden">
      <NoteHeader
        number={number}
        topic={topic}
        issueId={issueId}
        variant={variant}
      />
      <NoteBody
        description={description}
        lastUpdated={lastUpdated}
        muted={variant === "completed"}
      />
    </div>
  );
}
