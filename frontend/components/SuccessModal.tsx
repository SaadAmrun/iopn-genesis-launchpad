type SuccessModalProps = {
  open: boolean;
  onClose: () => void;
  txHash: string;
};

export default function SuccessModal({
  open,
  onClose,
  txHash,
}: SuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-[430px] rounded-3xl border border-blue-500/30 bg-[#0B1220] p-8 text-center shadow-2xl">

        <div className="text-6xl">
          🎉
        </div>

        <h2 className="mt-4 text-3xl font-bold text-white">
          NFT Minted Successfully!
        </h2>

        <p className="mt-2 text-slate-400">
          Welcome to the Genesis Collection.
        </p>

        <div className="mt-8 flex justify-center">
          <img
            src="/images/genesis.png"
            alt="Genesis NFT"
            className="w-64 rounded-2xl border border-blue-500/30 shadow-xl"
          />
        </div>

        <div className="mt-6 rounded-xl bg-slate-800 p-4">
          <h3 className="text-xl font-bold text-white">
            IOPN Genesis NFT
          </h3>

          <p className="mt-2 text-slate-400">
            Genesis Collection
          </p>
        </div>

        {txHash && (
          <a
            href={`https://testnet.iopn.tech/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white hover:bg-green-500"
          >
            🔗 View on IOPN Explorer
          </a>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-500"
        >
          Close
        </button>

      </div>

    </div>
  );
}