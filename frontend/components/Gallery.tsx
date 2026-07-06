type GalleryProps = {
  minted: number;
};

export default function Gallery({
  minted,
}: GalleryProps) {
  return (
    <section
      id="gallery"
      className="mx-auto max-w-7xl px-6 py-24 text-white"
    >
      <h2 className="mb-12 text-center text-5xl font-bold">
        Genesis Collection
      </h2>

      {minted === 0 ? (
        <p className="text-center text-slate-400">
          No NFTs minted yet.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: minted }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:scale-105 hover:border-blue-500"
            >
              <img
                src="/images/genesis.png"
                alt="Genesis NFT"
                className="aspect-square w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">
                  Genesis #{index}
                </h3>

                <p className="mt-2 text-slate-400">
                  IOPN Genesis NFT
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}