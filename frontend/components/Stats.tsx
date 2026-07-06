type StatsProps = {
  minted: number;
  maxSupply: number;
};

export default function Stats({
  minted,
  maxSupply,
}: StatsProps) {
  const percent = (minted / maxSupply) * 100;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-white">

      <h2 className="mb-10 text-center text-5xl font-bold">
        Mint Statistics
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h3 className="text-4xl font-bold text-blue-400">
            {minted}
          </h3>

          <p className="mt-3 text-slate-300">
            Minted
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h3 className="text-4xl font-bold text-green-400">
            {maxSupply}
          </h3>

          <p className="mt-3 text-slate-300">
            Max Supply
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h3 className="text-4xl font-bold text-purple-400">
            {percent.toFixed(1)}%
          </h3>

          <p className="mt-3 text-slate-300">
            Mint Progress
          </p>
        </div>

      </div>

      <div className="mt-12">

        <div className="h-5 overflow-hidden rounded-full bg-slate-700">

          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
            style={{
              width: `${percent}%`,
            }}
          />

        </div>

        <p className="mt-4 text-center text-slate-300">
          {minted} / {maxSupply}
        </p>

      </div>

    </section>
  );
}