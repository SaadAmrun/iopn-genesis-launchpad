export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-center text-slate-400">
      <div className="mx-auto max-w-7xl px-6">

        <h3 className="text-2xl font-bold text-white">
          IOPN Genesis NFT
        </h3>

        <p className="mt-3 text-slate-400">
          The Genesis NFT collection built for the IOPN ecosystem.
        </p>

        <div className="mt-8 flex justify-center gap-8">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            X
          </a>

          <a
            href="https://discord.com/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            Discord
          </a>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          © {new Date().getFullYear()} IOPN Genesis NFT. All rights reserved.
        </div>

      </div>
    </footer>
  );
}