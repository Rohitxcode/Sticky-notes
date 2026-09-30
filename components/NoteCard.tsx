"use client";

import { Trash2 } from "lucide-react";
import type { Note } from "@/types/Notes";

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: NoteCardProps) {
  const date = new Date(note.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="group relative rounded-lg border border-[#e0d5b7] bg-[#fdfbf5] p-4 shadow-[0_2px_8px_rgba(61,47,31,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(61,47,31,0.12)]">
      <h2 className="font-serif text-lg font-semibold text-[#3d2f1f] line-clamp-2">
        {note.title || "Untitled"}
      </h2>

      <p className="font-garamond mt-2 text-sm text-[#5c4a33] line-clamp-4 whitespace-pre-wrap">
        {note.content || "No content"}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-garamond text-xs italic text-[#a89a7a]">
          {date}
        </span>

        <button
          onClick={() => onDelete(note.id)}
          className="opacity-0 transition group-hover:opacity-100 text-[#8b6f47] hover:text-red-600"
          aria-label="Delete note"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}