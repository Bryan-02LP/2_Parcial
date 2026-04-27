import HelperNotesBoard from "@/components/templates/HelperNotesBoard";
import { HelperNoteCardProps } from "@/components/organisms/HelperNoteCard";

const notes: HelperNoteCardProps[] = [
  {
    number: 1,
    topic: "Agenda/Topic",
    issueId: "SAAS-0000",
    description: "Description of what is done here",
    lastUpdated: "3/8/2020",
    variant: "active",
  },
  {
    number: 1,
    topic: "Agenda/Topic",
    issueId: "SAAS-0000",
    description: "Description of what is done here",
    lastUpdated: "3/8/2020",
    variant: "future",
  },
  {
    number: 1,
    topic: "Agenda/Topic",
    issueId: "SAAS-0000",
    description: "Description of what is done here",
    lastUpdated: "3/8/2020",
    variant: "completed",
  },
];

export default function Home() {
  return <HelperNotesBoard notes={notes} />;
}
