export default function Roadmap() {
  const items = [
    {
      phase: "Phase 1",
      title: "Genesis Launch",
      desc: "Deploy smart contract, launch website, and open Genesis NFT mint."
    },
    {
      phase: "Phase 2",
      title: "Community Growth",
      desc: "Expand the community, host events, and reward early supporters."
    },
    {
      phase: "Phase 3",
      title: "Marketplace",
      desc: "Enable NFT trading and strengthen the IOPN ecosystem."
    },
    {
      phase: "Phase 4",
      title: "Future Utility",
      desc: "Introduce staking, exclusive benefits, and governance features."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-white" id="roadmap">
      <h2 className="mb-12 text-center text-5xl font-bold">
        Roadmap
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.phase}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-blue-500/50"
          >
            <span className="text-blue-400 font-semibold">
              {item.phase}
            </span>

            <h3 className="mt-3 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-4 text-slate-300 leading-7">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}