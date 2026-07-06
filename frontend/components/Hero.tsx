type HeroProps = {
  wallet: string;
  status: string;
  connectWallet: () => void;
  mintNFT: () => void;
};

export default function Hero({
  wallet,
  status,
  connectWallet,
  mintNFT,
}: HeroProps) {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center text-white">

      <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
        IOPN Genesis NFT
      </h1>

      <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg lg:text-2xl">
        Mint the first Genesis NFT on the IOPN Network.
      </p>

      <div className="mt-10">
        <img
          src="/images/genesis.png"
          alt="IOPN Genesis NFT"
          className="mx-auto w-64 rounded-3xl border border-blue-500/30 shadow-2xl sm:w-80 lg:w-[420px]"
        />
      </div>

      <div className="mt-10 flex w-full max-w-md flex-col gap-4">

        <button
          onClick={connectWallet}
          className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500"
        >
          {wallet ? "✅ Wallet Connected" : "Connect Wallet"}
        </button>

        <button
          onClick={mintNFT}
          className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold transition hover:bg-green-500"
        >
          Mint NFT
        </button>

      </div>

      <div className="mt-8 w-full max-w-xl">

        <p className="break-all text-sm text-slate-300 sm:text-base">
          {wallet || "Wallet belum terhubung"}
        </p>

        <p className="mt-3 text-green-400">
          {status}
        </p>

      </div>

    </section>
  );
}