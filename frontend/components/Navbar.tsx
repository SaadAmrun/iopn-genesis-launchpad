import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-blue-500/20 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="IOPN Logo"
            width={42}
            height={42}
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              IOPN Genesis
            </h1>

            <p className="text-xs text-slate-400">
              NFT Launchpad
            </p>
          </div>
        </div>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#" className="transition hover:text-white">
            Home
          </a>

          <a href="#" className="transition hover:text-white">
            Collection
          </a>

          <a href="#" className="transition hover:text-white">
            Roadmap
          </a>

          <a href="#" className="transition hover:text-white">
            FAQ
          </a>
        </div>

      </div>
    </nav>
  );
}