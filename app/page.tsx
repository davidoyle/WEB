export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="relative z-10 mx-auto max-w-5xl space-y-8 px-6 text-center text-foreground md:text-left">
        <h1 className="text-6xl font-extrabold md:text-8xl">You&apos;re not the only one.</h1>
        <p className="text-xl text-muted md:text-2xl">
          A living archive of stories + practical tools for injured workers in BC navigating
          WorkSafeBC.
        </p>
        <div className="flex gap-4">
          <button className="rounded-full bg-accent px-6 py-3 text-background hover:bg-yellow-600">
            Read stories
          </button>
          <a
            href="/how-to-use"
            className="rounded-full border border-foreground px-6 py-3 hover:bg-foreground/10"
          >
            How to use this →
          </a>
        </div>
      </div>
    </div>
  );
}
