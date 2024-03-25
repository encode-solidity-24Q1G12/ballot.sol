# Short summary
A smart contract deployed on Sepolia testnet for users to cast votes on their favorite drinks: 0 Chocolate, 1 Soy, 2 Tea.  

# Project purpose
Practice deploying smart contracts with Viem on public testnets and writing typescripts to interact with them.  

# Transaction details
## 1. Contract creation - DeployWithViem.ts
Contract address: `0x69366F47e7B958dc60fCCDB6dd09a9902EE0cc0B`  
Transaction hash: `0xa2e536e3cbde4a8e5196293645eccff12a3d4fc99827b2897ecfb6009f93b372`  
Status: success

## 2. Give right to vote - GiveRightToVote.ts
1. Add voter 0xf989CA835FE863907E0CCce67dD4E08ac6Dd7E5f  
Transaction hash: `0x1397516545fe830976b636fd8cae9284816e0bfdaf81f85b536b2b33b9cffe24`  
Status: success

2. Add voter 0xD6e0613A2cAEa9227e6E7eB2Bbe56F6E99EC08bb  
Transaction hash: `0x765ea07ae83ff905f268f06fcdf9e58599fd7317dca3890984158430705d83d4`  
Status: success

3. Add voter 0x445e82fbc39897Db65e80A198742Bb175a6D5E0E  
Transaction hash: `0xad43147dd90b1b064abb5802456cd9926a0bc7eb7ef2724fd13caa5f0b2e9893`  
Status: success

## 3. Vote - CastVote.ts
1. Voter 0xD1De8Ee3EdAB47d7320bae397093f3FB35a44b44  
Transaction hash: `0x63d88d482f45ac4bd17e852f2af0d6a8c426199b5bf42f339fbb780dc950ad8f`  
Status: success

2. Voter 0x445e82fbc39897Db65e80A198742Bb175a6D5E0E  
Transaction hash: `0x984f69c5a2c5df059aabe0f576d0003df5403352a752577efcac2a9dfd91a523`  
Status: success

3. Voter 0xf989CA835FE863907E0CCce67dD4E08ac6Dd7E5f  
Transaction hash: `0x79166016047c854671a79445718d7d8998b332979d7f06c0156973b762a72a96`  
Status: success

4. Voter 0x7976b09CC24530ecfC0691f34bd0a7A6A7A32163  
Status: failed, Execution reverted with reason: Has no right to vote.  

## 4. Give right to vote - GiveRightToVote.ts

4. Voter 0x7976b09CC24530ecfC0691f34bd0a7A6A7A32163

