import { ethers } from "ethers";

export const CONTRACT_ADDRESS =
  "0x88994f80dE669cE6Ab4b87f6607a45fa59711C81";

export const ABI = [
  "function mint() payable",
  "function MINT_PRICE() view returns(uint256)",
  "function totalMinted() view returns(uint256)",
  "function MAX_SUPPLY() view returns(uint256)",

  "function ownerOf(uint256 tokenId) view returns(address)"
];

export async function getContract() {
  if (!(window as any).ethereum) {
    throw new Error("MetaMask belum terinstall");
  }

  const provider = new ethers.BrowserProvider(
    (window as any).ethereum
  );

  await provider.send("eth_requestAccounts", []);

  const signer = await provider.getSigner();

  return new ethers.Contract(
    CONTRACT_ADDRESS,
    ABI,
    signer
  );
}

export async function getReadContract() {
  if (!(window as any).ethereum) {
    throw new Error("MetaMask belum terinstall");
  }

  const provider = new ethers.BrowserProvider(
    (window as any).ethereum
  );

  return new ethers.Contract(
    CONTRACT_ADDRESS,
    ABI,
    provider
  );
}