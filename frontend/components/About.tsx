export default function About() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-24 text-white"
      id="about"
    >
      <h2 className="mb-6 text-center text-5xl font-bold">
        About Genesis
      </h2>

      <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-slate-300">
        IOPN Genesis is the first NFT collection built on the IOPN Network.
        Every Genesis NFT represents early community participation and
        supports the future ecosystem through decentralized ownership.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="mb-4 text-2xl font-bold">⚡ Fast</h3>
          <p className="text-slate-300">
            Built on the IOPN blockchain with low fees and fast confirmation.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="mb-4 text-2xl font-bold">🔒 Secure</h3>
          <p className="text-slate-300">
            Powered by audited smart contracts and transparent on-chain data.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="mb-4 text-2xl font-bold">🌍 Community</h3>
          <p className="text-slate-300">
            Join early supporters and help shape the future of the IOPN ecosystem.
          </p>
        </div>

      </div>
    </section>
  );
}