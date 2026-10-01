"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import NotesGrid from "@/components/NotesGrid";
import { loadNotes, saveNotes } from "@/lib/storage";
import type { Note } from "@/types/Notes";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const isFirstRender = useRef(true);

  // Load once on mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNotes(loadNotes());
  }, []);

  // Save whenever notes change, skipping the very first render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    saveNotes(notes);
  }, [notes]);

  const handleDelete = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#fdfbf5] p-6">
      <Navbar />

      <div className="mt-8">
        <h1 className="font-serif text-4xl font-semibold text-[#3d2f1f]">
          Your Sticky Notes
        </h1>
        <p className="mt-2 font-garamond text-[#8b6f47]">
          Create, organize, and search your notes.
        </p>
      </div>

      <div className="mt-8">
        <NotesGrid notes={notes} onDelete={handleDelete} />
      </div>
    </main>
  );
}