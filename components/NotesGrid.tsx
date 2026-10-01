import type { Note } from "@/types/Notes";
import NoteCard from "./NoteCard";

interface NotesGridProps {
  notes: Note[];
  onDelete: (id: string) => void;
  onEdit: (note: Note) => void;
}

export default function NotesGrid({ notes, onDelete, onEdit }: NotesGridProps) {
  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="font-serif text-2xl italic text-[#8b6f47]">
          No notes yet.
        </p>
        <p className="font-garamond mt-2 text-[#a89a7a]">
          Click &ldquo;New Note&rdquo; to start your collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}