import { createPublicClient, http, createWalletClient, formatEther, toHex, hexToString } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi, bytecode } from "../artifacts/contracts/Ballot.sol/Ballot.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

async function main() {
  const parameters = process.argv.slice(2);
  if (!parameters || parameters.length < 2)
    throw new Error("Parameters not provided");
  const contractAddress = parameters[0] as `0x${string}`;
  if (!contractAddress) throw new Error("Contract address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  const newVoter = parameters[1] as `0x${string}`;
  if (!newVoter) throw new Error("Contract address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(newVoter))
    throw new Error("Invalid voter address");
  console.log("New voter to be added: ", newVoter);
  // console.log("Confirm? (Y/n)");
  // const stdin = process.openStdin();
  // stdin.addListener("data", async function (d) {
  //   if (d.toString().trim().toLowerCase() != "n") {
  //     const hash = await voter.writeContract({
  //       address: contractAddress,
  //       abi,
  //       functionName: "vote",
  //       args: [BigInt(proposalIndex)],
  //     });
  //     console.log("Transaction hash:", hash);
  //     console.log("Waiting for confirmations...");
  //     const receipt = await publicClient.waitForTransactionReceipt({ hash });
  //     console.log("Transaction confirmed");
  //   } else {
  //     console.log("Operation cancelled");
  //   }
  //   process.exit();
  // });

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
  const voter = createWalletClient({
    account,
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  const hash = await voter.writeContract({
    address: contractAddress,
    abi,
    functionName: "giveRightToVote",
    args: [newVoter],
  });

  console.log("Transaction hash:", hash);
  console.log("Waiting for confirmations...");
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  console.log("Transaction confirmed");
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
