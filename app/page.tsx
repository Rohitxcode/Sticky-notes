import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9E6] p-6">
      <div className="mx-auto max-w-7xl">
        <Navbar />

        <section className="mt-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Your Sticky Notes
          </h1>

          <p className="mt-2 text-gray-600">
            Create, organize, and search your notes.
          </p>

          {/* Notes Grid will go here in the next step */}
        </section>
      </div>
    </main>
  );
}