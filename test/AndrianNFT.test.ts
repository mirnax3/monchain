import { expect } from "chai";
import { ethers } from "hardhat";
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("MonchainNFT", function () {
  async function deployTokenFixture() {
    const [recipient] = await ethers.getSigners();
    const token = await ethers.deployContract("MonchainNFT");

    await token.waitForDeployment();

    return { token, recipient };
  }

  describe("Deployment", function () {
    it("Should set the right contract name and symbol", async function () {
      const { token } = await loadFixture(deployTokenFixture);

      expect(await token.name()).to.equal("MonchainNFT");
      expect(await token.symbol()).to.equal("AND");
    });
  });

  describe("Minting", function () {
    it("Should mint a new NFT and assign it to the recipient", async function () {
      const { token, recipient } = await loadFixture(deployTokenFixture);
      const tokenURI = "https://example.com/nft";
      const tokenId = 1;

      await token.mintNFT(recipient.address, tokenURI);

      expect(await token.ownerOf(tokenId)).to.equal(recipient.address);
      expect(await token.tokenURI(tokenId)).to.equal(tokenURI);
    });
  });
});
