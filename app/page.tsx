export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #00e599 0%, rgba(0,229,153,0.15) 45%, transparent 70%)",
        }}
      />

      <h1 className="relative z-10 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
        neon{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg, #00e599, #00a878)",
          }}
        >
          branches
        </span>
      </h1>
    </main>
  );
}
