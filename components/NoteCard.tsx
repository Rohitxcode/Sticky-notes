"use client";

import { Trash2 } from "lucide-react";
import type { Note } from "@/types/Notes";

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
  onEdit: (note: Note) => void;
}

export default function NoteCard({ note, onDelete, onEdit }: NoteCardProps) {
  const date = new Date(note.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      onClick={() => onEdit(note)}
      className="group parchment relative cursor-pointer rounded-lg p-4 transition hover:-translate-y-0.5"
    >
      <h2 className="font-serif text-lg font-semibold text-[#3d2f1f] line-clamp-2 parchment-ink">
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
          onClick={(e) => {
            e.stopPropagation();
            onDelete(note.id);
          }}
          className="opacity-0 transition group-hover:opacity-100 text-[#8b6f47] hover:text-red-600"
          aria-label="Delete note"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}