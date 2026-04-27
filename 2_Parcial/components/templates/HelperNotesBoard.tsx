import HelperNoteCard, { HelperNoteCardProps } from "@/components/organisms/HelperNoteCard";

interface HelperNotesBoardProps {
  notes: HelperNoteCardProps[];
}

export default function HelperNotesBoard({ notes }: HelperNotesBoardProps) {
  return (
    <div className="min-h-screen bg-[#E8E8E8] flex flex-col items-center py-12 px-4 gap-8">
      <div className="flex flex-col gap-6 w-full max-w-md">
        {notes.map((note, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <span className="text-xs text-[#7B4FBE] font-medium mb-1">
              helper/note/{note.variant}
            </span>
            <HelperNoteCard {...note} />
          </div>
        ))}
      </div>
    </div>
  );
}
