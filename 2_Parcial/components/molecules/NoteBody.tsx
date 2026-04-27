import NoteLabel from "@/components/atoms/NoteLabel";
interface NoteBodyProps {
  description: string;
  lastUpdated: string;
  muted?: boolean;
}
export default function NoteBody({ description, lastUpdated, muted = false }: NoteBodyProps) {
  return (
    <div className="px-4 pt-4 pb-4 bg-white rounded-b-xl flex flex-col gap-3">
      <p className={`text-base ${muted ? "text-gray-400" : "text-gray-800"}`}>
        {description}
      </p>

      <hr className="border-gray-200" />

      <div className="flex items-center justify-between">
        <NoteLabel text="Last Updated" muted={muted} />
        <NoteLabel text={lastUpdated} align="right" muted={muted} />
      </div>
    </div>
  );
}
