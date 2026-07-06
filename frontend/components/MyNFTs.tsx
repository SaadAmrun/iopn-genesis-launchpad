"use client";

import { useEffect, useState } from "react";
import { getContract } from "../lib/contract";

type Props = {
  wallet: string;
};

export default function MyNFTs({ wallet }: Props) {
  const [myNFTs, setMyNFTs] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadNFTs() {
    if (!wallet) return;

    try {
      setLoading(true);

      const contract = await getContract();

      const totalMinted = Number(await contract.totalMinted());

      const owned: number[] = [];

      for (let i = 0; i < totalMinted; i++) {
        try {
          const owner = await contract.ownerOf(i);

          if (owner.toLowerCase() === wallet.toLowerCase()) {
            owned.push(i);
          }
        } catch (err) {}
      }

      setMyNFTs(owned);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNFTs();
  }, [wallet]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-white">

      <h2 className="mb-10 text-center text-5xl font-bold">
        My NFTs
      </h2>

      {loading && (
        <p className="text-center">
          Loading NFTs...
        </p>
      )}

      {!loading && myNFTs.length === 0 && (
        <p className="text-center text-slate-400">
          You don't own any Genesis NFTs yet.
        </p>
      )}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {myNFTs.map((id) => (
          <div
            key={id}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >

            <img
              src="/images/genesis.png"
              alt="Genesis NFT"
              className="rounded-2xl"
            />

            <h3 className="mt-4 text-xl font-bold">
              Genesis #{id}
            </h3>

            <p className="mt-2 text-slate-400">
              Token ID : {id}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}