import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex_col_center overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
