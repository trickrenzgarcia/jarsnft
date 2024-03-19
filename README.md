MOR / Thesis Project by Alrae, Patrick, Jeffrey, Rigor  

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


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
