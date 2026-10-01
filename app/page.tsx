"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import NotesGrid from "@/components/NotesGrid";
import NoteModal from "@/components/NoteModal";
import { loadNotes, saveNotes } from "@/lib/storage";
import type { Note } from "@/types/Notes";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const isFirstRender = useRef(true);

  // Load once on mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNotes(loadNotes());
  }, []);

  // Save on change (skip first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    saveNotes(notes);
  }, [notes]);

  const handleSave = (note: Note) => {
    setNotes((prev) => {
      const exists = prev.some((n) => n.id === note.id);
      return exists
        ? prev.map((n) => (n.id === note.id ? note : n))
        : [note, ...prev];
    });
  };

  const handleDelete = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const handleEdit = (note: Note) => {
    setEditingNote(note);
    setModalOpen(true);
  };

  const handleNewNote = () => {
    setEditingNote(null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingNote(null);
  };

  const filteredNotes = notes.filter((n) => {
    const q = search.toLowerCase();
    return (
      n.title.toLowerCase().includes(q) ||
      n.content.toLowerCase().includes(q)
    );
  });

  return (
    <main className="min-h-screen bg-[#fdfbf5] p-6">
      <Navbar
        onNewNote={handleNewNote}
        search={search}
        onSearchChange={setSearch}
      />

      <div className="mt-8">
        <h1 className="font-serif text-4xl font-semibold text-[#3d2f1f]">
          Your Sticky Notes
        </h1>
        <p className="mt-2 font-garamond text-[#8b6f47]">
          Create, organize, and search your notes.
        </p>
      </div>

      <div className="mt-8">
        <NotesGrid
          notes={filteredNotes}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      {modalOpen && (
        <NoteModal
          note={editingNote}
          onSave={handleSave}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
}