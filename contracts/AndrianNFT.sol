// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MonchainNFT is ERC721URIStorage {
    uint256 private _nextTokenId;
    event NFTMinted(uint256 indexed tokenId, address recipient);

    constructor() ERC721("MonchainNFT", "AND") {
        _nextTokenId = 1;
    }

    function mintNFT(address recipient, string memory tokenURI)
        public
        returns (uint256)
    {
         uint256 tokenId = _nextTokenId++;
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);

        emit NFTMinted(tokenId, recipient);

        return tokenId;
    }
}
