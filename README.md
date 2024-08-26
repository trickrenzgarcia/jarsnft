# JarsNFT

A web3 NFT marketplace is designed and developed to allow artists to gain monetary funds from their artworks through the buying and selling of NFTs. This also aims to develop a decentralized NFT marketplace that will
solve the problems pertaining to the _trading of NFTs_**, _NFT authenticity_**, and _fees_**, with a focus on enhancing intuitiveness, transparency, and design. The system will help artists and collectors to have a comfortable environment in which they can seamlessly interact and transact. Developed using React, nextJS, nodeJS, and the Web3 Technology. 

**An MOR / Thesis Project by Alrae, Patrick, Jeffrey, Rigor**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```bash
npx depcheck --detailed
#Generate a report of all the unused packages in the project and any missing dependencies

ncu -u
#Generate a list of all the packages the project that can be updated

npm prune
#Removes the packages that are no longer listed in package.json file and are not in use.

npx npm-check-updates -u -a --prune
#Will automatically update all the packages and remove the unnecessary packages.
```

```
cmds:
[both]
git pull
npm i

[back-end]
npx prisma db pull
npx prisma generate

[node]
npm run dev

[using bun]
bun run dev:bun
```
