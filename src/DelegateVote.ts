// import { abi, bytecode } from "../artifacts/contracts/Ballot.sol/Ballot.json";
// import { createPublicClient, http, formatEther, createWalletClient, toHex, hexToString, getContract } from "viem";
// import { sepolia } from "viem/chains";
// import { privateKeyToAccount } from "viem/accounts";
// import * as dotenv from "dotenv";
// dotenv.config();

// const providerApiKey = process.env.ALCHEMY_API_KEY || "";
// const deployerPrivateKey = process.env.PRIVATE_KEY || "";


// async function main() {
//     const parameters = process.argv.slice(2);
//     if (!parameters || parameters.length < 2)
//       throw new Error("Parameters not provided");
//       const publicClient = createPublicClient({
//         chain: sepolia,
//         transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
//       });
    
//     const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
//     const contractAddress = parameters[0] as `0x${string}`;

//     const deployer = createWalletClient({
//         account,
//         chain: sepolia,
//         transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
//       });

//     if (!contractAddress) throw new Error("Contract address not provided");
//     if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
//       throw new Error("Invalid contract address");
//     const voterAddress = parameters[1];
//     if (!voterAddress) throw new Error("Voter address not provided");

//     const hash = await deployer.writeContract({
//         address: contractAddress,
//         abi,
//         functionName: "giveRightToVote",
//         args: [voterAddress],
//       });
//       console.log("Transaction hash:", hash);
//       console.log("Waiting for confirmations...");
//       const receipt = await publicClient.waitForTransactionReceipt({ hash });
//       console.log("Transaction confirmed");


//       const walletClient = createWalletClient({
//         chain: sepolia,
//         transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
//       });

//       const contractAsOtherAccount = await getContract({
//         address: contractAddress,
//         abi: abi,
//       }
//       );
//     //   const hash2 = await deployer.writeContract({
//     //     address: contractAddress,
//     //     abi,
//     //     functionName: "giveRightToVote",
//     //     args: [voterAddress],
//     //   });

//     //   const proposal = (await publicClient.({
//     //   address: contractAddress,
//     //   abi,
//     //   functionName: "proposals",
//     //   args: [BigInt(proposalIndex)],
//     //   })) as any[];
//     //   const name = hexToString(proposal[0], { size: 32 });
//     //   console.log("Voting to proposal", name);
  
//     //   const stdin = process.openStdin();
//     //   stdin.addListener("data", async function (d) {
//     //   if (d.toString().trim().toLowerCase() != "n") {
//     //     const hash = await voter.writeContract({
//     //       address: contractAddress,
//     //       abi,
//     //       functionName: "vote",
//     //       args: [BigInt(proposalIndex)],
//     //     });
//     //     console.log("Transaction hash:", hash);
//     //     console.log("Waiting for confirmations...");
//     //     const receipt = await publicClient.waitForTransactionReceipt({ hash });
//     //     console.log("Transaction confirmed");
//     //   } else {
//     //     console.log("Operation cancelled");
//     //   }
  
//     //   console.log("Transaction hash:", hash);
//     //   console.log("Waiting for confirmations...");
//     //   const receipt = await publicClient.waitForTransactionReceipt({ hash });
//     //   console.log("Transaction confirmed");


//     process.exit();

// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });