"use client";

import { Search, Plus, StickyNote } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

interface NavbarProps {
  onNewNote: () => void;
  search: string;
  onSearchChange: (value: string) => void;
}

export default function Navbar({ onNewNote, search, onSearchChange }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between rounded-2xl border border-[#e0d5b7] bg-[#fdfbf5] px-6 py-4 shadow-[0_2px_10px_rgba(61,47,31,0.08)]">

      {/* Brand */}
      <div className="flex items-center gap-2">
        <StickyNote className="h-7 w-7 text-[#8b6f47]" />
        <h1 className="font-serif text-xl font-semibold tracking-tight text-[#3d2f1f]">
          Sticky Notes
        </h1>
      </div>

      {/* Search */}
      <div className="flex w-85 items-center gap-2 rounded-full border border-[#e0d5b7] bg-[#f5f0e1] px-4 py-2">
        <Search className="h-5 w-5 text-[#8b6f47]" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search notes..."
          className="w-full bg-transparent font-garamond text-[#3d2f1f] outline-none placeholder:italic placeholder:text-[#a89a7a]"
        />
      </div>

      {/* New Note button */}
      <MagneticButton
        onClick={onNewNote}
        className="flex items-center gap-2 rounded-full bg-[#c9a961] px-5 py-2 font-garamond text-[#3d2f1f] transition-colors hover:bg-[#b8985a]"
      >
        <Plus className="h-5 w-5" />
        New Note
      </MagneticButton>
    </nav>
  );
}