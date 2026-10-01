"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Note } from "@/types/Notes";

interface NoteModalProps {
  note?: Note | null;
  onSave: (note: Note) => void;
  onClose: () => void;
}

export default function NoteModal({ note, onSave, onClose }: NoteModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  useEffect(() => {
    if (note) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;

    const saved: Note = {
      id: note?.id ?? crypto.randomUUID(),
      title: title.trim() || "Untitled",
      content: content.trim(),
      createdAt: note?.createdAt ?? Date.now(),
    };

    onSave(saved);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3d2f1f]/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="parchment relative w-full max-w-lg rounded-lg p-8"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-[#8b6f47] hover:text-[#3d2f1f] transition"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <h2 className="font-serif text-2xl font-semibold text-[#3d2f1f] parchment-ink mb-6">
          {note ? "Edit Note" : "New Note"}
        </h2>

        {/* Title */}
        <label className="block mb-4">
          <span className="font-garamond text-sm italic text-[#8b6f47]">
            Title
          </span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your note a name…"
            className="mt-1 w-full bg-transparent border-b border-[#d9cba5] px-1 py-2 font-serif text-lg text-[#3d2f1f] outline-none placeholder:italic placeholder:text-[#c9b896] focus:border-[#8b6f47] transition-colors"
            autoFocus
          />
        </label>

        {/* Content */}
        <label className="block mb-6">
          <span className="font-garamond text-sm italic text-[#8b6f47]">
            Note
          </span>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write something worth keeping…"
            rows={6}
            className="mt-1 w-full bg-transparent border border-[#d9cba5] rounded-md px-3 py-2 font-garamond text-base text-[#3d2f1f] outline-none placeholder:italic placeholder:text-[#c9b896] focus:border-[#8b6f47] transition-colors resize-none"
          />
        </label>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="font-garamond px-4 py-2 text-[#8b6f47] hover:text-[#3d2f1f] transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="font-garamond rounded-full bg-[#c9a961] px-5 py-2 text-[#3d2f1f] transition-colors hover:bg-[#b8985a]"
          >
            {note ? "Save Changes" : "Add Note"}
          </button>
        </div>
      </form>
    </div>
  );
}