const hre = require("hardhat");

async function main() {
  console.log("Deploying LaunchpadNFT...");

  const LaunchpadNFT = await hre.ethers.getContractFactory("LaunchpadNFT");

  const nft = await LaunchpadNFT.deploy();

  await nft.waitForDeployment();

  console.log("==================================");
  console.log("NFT berhasil di deploy!");
  console.log("Contract Address:");
  console.log(await nft.getAddress());
  console.log("==================================");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});