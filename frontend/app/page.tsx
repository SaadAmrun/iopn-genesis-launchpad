"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import SuccessModal from "../components/SuccessModal";
import MyNFTs from "../components/MyNFTs";

import { getContract } from "../lib/contract";

export default function Home() {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [minted, setMinted] = useState(0);
  const [maxSupply, setMaxSupply] = useState(1000);
  const [mintPrice, setMintPrice] = useState("0.01");

  const [showSuccess, setShowSuccess] = useState(false);
  const [txHash, setTxHash] = useState("");

  async function loadData() {
    try {
      const contract = await getContract();

      const total = await contract.totalMinted();
      const max = await contract.MAX_SUPPLY();
      const price = await contract.MINT_PRICE();

      setMinted(Number(total));
      setMaxSupply(Number(max));
      setMintPrice(ethers.formatEther(price));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if ((window as any).ethereum) {
      loadData();
    }
  }, []);

  async function connectWallet() {
    try {
      if (!(window as any).ethereum) {
        alert("Install MetaMask");
        return;
      }

      const provider = new ethers.BrowserProvider(
        (window as any).ethereum
      );

      const accounts = await provider.send(
        "eth_requestAccounts",
        []
      );

      setWallet(accounts[0]);

      await loadData();
    } catch (err) {
      console.log(err);
    }
  }

  async function mintNFT() {
    try {
      setStatus("Mengirim transaksi...");

      const contract = await getContract();

      const tx = await contract.mint({
        value: ethers.parseEther(mintPrice),
      });

      setStatus("Menunggu konfirmasi...");

      await tx.wait();

      setTxHash(tx.hash);

      setStatus("🎉 NFT berhasil di Mint!");

      await loadData();

      setShowSuccess(true);

    } catch (err) {
      console.log(err);
      setStatus("❌ Mint gagal");
    }
  }

  return (
    <>
      <main className="min-h-screen bg-[#050816] text-white">

        <Navbar />

        <Hero
          wallet={wallet}
          status={status}
          connectWallet={connectWallet}
          mintNFT={mintNFT}
        />

        <Stats
          minted={minted}
          maxSupply={maxSupply}
        />

        <About />

        <Roadmap />

        <Gallery
          minted={minted}
        />

        {wallet && (
          <MyNFTs wallet={wallet} />
        )}

        <FAQ />

        <Footer />

      </main>

      <SuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        txHash={txHash}
      />
    </>
  );
}