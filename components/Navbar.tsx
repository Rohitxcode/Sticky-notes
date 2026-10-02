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
    <nav className="flex items-center gap-3 rounded-2xl border border-[#e0d5b7] bg-[#fdfbf5] px-4 py-3 shadow-[0_2px_10px_rgba(61,47,31,0.08)] sm:px-6 sm:py-4">

      {/* Brand */}
      <div className="flex shrink-0 items-center gap-2">
        <StickyNote className="h-7 w-7 text-[#8b6f47]" />
        <h1
          className="
            overflow-hidden whitespace-nowrap
            font-serif text-xl font-semibold tracking-tight text-[#3d2f1f]
            max-w-[200px] opacity-100 ml-0
            transition-all duration-300 ease-out
            max-[600px]:max-w-0 max-[600px]:opacity-0 max-[600px]:-ml-2
          "
        >
          Sticky Notes
        </h1>
      </div>

      {/* Search */}
      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[#e0d5b7] bg-[#f5f0e1] px-3 py-2 sm:px-4">
        <Search className="h-5 w-5 shrink-0 text-[#8b6f47]" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search notes..."
          className="w-full min-w-0 bg-transparent font-garamond text-[#3d2f1f] outline-none placeholder:italic placeholder:text-[#a89a7a]"
        />
      </div>

      {/* New Note button */}
      <MagneticButton
        onClick={onNewNote}
        className="
          flex shrink-0 items-center gap-2 rounded-full bg-[#c9a961]
          px-5 py-2 font-garamond text-[#3d2f1f]
          transition-colors hover:bg-[#b8985a]
          max-[600px]:px-3
        "
      >
        <Plus className="h-5 w-5" />
        <span
          className="
            overflow-hidden whitespace-nowrap
            max-w-[120px] opacity-100
            transition-all duration-300 ease-out
            max-[600px]:max-w-0 max-[600px]:opacity-0
          "
        >
          New Note
        </span>
      </MagneticButton>
    </nav>
  );
}