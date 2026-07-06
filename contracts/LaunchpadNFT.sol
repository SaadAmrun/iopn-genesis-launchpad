// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LaunchpadNFT is ERC721URIStorage, Ownable {

    uint256 public nextTokenId;
    uint256 public constant MAX_SUPPLY = 1000;
    uint256 public constant MINT_PRICE = 0.01 ether;

    string private constant METADATA_URI =
        "ipfs://bafkreid26atw2ohh434vidgravlfsddciwvrgkvjbdklpghnmq7idmp5oe";

    constructor() ERC721("IOPN Genesis NFT", "IGEN") {}

    function mint() public payable {

        require(nextTokenId < MAX_SUPPLY, "Sold Out");
        require(msg.value >= MINT_PRICE, "Mint price is 0.01 OPN");

        uint256 tokenId = nextTokenId;

        _safeMint(msg.sender, tokenId);

        _setTokenURI(tokenId, METADATA_URI);

        nextTokenId++;
    }

    function totalMinted() public view returns (uint256) {
        return nextTokenId;
    }

    function remainingSupply() public view returns (uint256) {
        return MAX_SUPPLY - nextTokenId;
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}