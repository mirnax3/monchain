import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { AndrianNFT__factory } from "../../typechain-types";

const router = Router();
// const contractAddress = "YOUR_CONTRACT_ADDRESS";
// const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

// const contract = AndrianNFT__factory.connect(contractAddress, signer);

// Add validation middleware before your route handler
router.post(
  "/mint",
  body("recipient").isEthereumAddress(),
  // tokenURI validation

  async (req: Request, res: Response) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    // const { recipient, tokenURI } = req.body;
    // try {
    //   const tx = await contract.mintNFT(recipient, tokenURI);
    //   await tx.wait();
    //   res.send({ success: true, transaction: tx });
    // } catch (error) {
    //   res.status(500).send({ success: false, error: error.message });
    // }
  }
);

export default router;
