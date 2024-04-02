import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WavyBackground } from "@/components/ui/wavy-background";

type CardProps = React.ComponentProps<typeof Card>;

const page = () => {
  return (
    <>
      <WavyBackground className="container mb-5 mt-5 min-h-screen w-full">
        <div className="align-items-center grid grid-cols-2 justify-items-center gap-4">
          <div className="m-5 gap-2 place-self-center p-5">
            <h1 className="relative mb-6 max-w-4xl text-left text-3xl font-bold text-zinc-700 dark:text-zinc-100 md:text-7xl">
              What is an NFT?
            </h1>
            <p className="text-xl font-semibold">
              An NFT (non-fungible token) is a unique digital item stored on a
              blockchain. NFTs can represent almost anything, and serve as a
              digital record of ownership. NFTs operate on blockchain
              technology. The blockchain is basically a large, digital, public
              record. The most popular blockchains are distributed across many
              nodes (read: people’s computers), which is why you’ll hear them
              described as “decentralized.”
            </p>
          </div>
          <div className="mt-20 place-self-center">
            <Image
              src="/assets/learnPics/learnNFT.webp"
              width={608}
              height={406}
              alt="hero"
              className="rounded-lg"
            />
          </div>
        </div>
        <h1 className="m-5 ml-5 p-5">Featured</h1>
        <div className="flex flex-row flex-wrap justify-evenly gap-5">
          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/assets/learnPics/card1.png"
                  alt="Card Image"
                  width={384}
                  height={256}
                  className="rounded-lg"
                />
                <CardTitle>What is an NFT?</CardTitle>
                <CardDescription>
                  Jars guide to NFTs. A step-by-step introduction to what <br />
                  you need to know
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/assets/learnPics/createNFT.webp" // Specify the path to your image
                  alt="Card Image" // Provide an appropriate alt text
                  width={384} // Set the width of the image
                  height={256} // Set the height of the image
                  className="rounded-lg"
                />
                <CardTitle>How to Create an NFT?</CardTitle>
                <CardDescription>
                  From art and photography to sports and gaming, creating <br />{" "}
                  an NFT using Jars is easy.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card className="w-full">
              <CardHeader>
                <Image
                  src="/assets/learnPics/card1.png" // Specify the path to your image
                  alt="Card Image" // Provide an appropriate alt text
                  width={384} // Set the width of the image
                  height={256} // Set the height of the image
                  className="rounded-lg"
                />
                <CardTitle>What is an NFT?</CardTitle>
                <CardDescription>
                  Jars guide to NFTs. A step-by-step introduction to what you
                  need to know
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card className="w-full">
              <CardHeader>
                <Image
                  src="/assets/learnPics/card1.png" // Specify the path to your image
                  alt="Card Image" // Provide an appropriate alt text
                  width={384} // Set the width of the image
                  height={256} // Set the height of the image
                  className="rounded-lg"
                />
                <CardTitle>What is an NFT?</CardTitle>
                <CardDescription>
                  Jars guide to NFTs. A step-by-step introduction to what you
                  need to know
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card className="w-full">
              <CardHeader>
                <Image
                  src="/assets/learnPics/card1.png" // Specify the path to your image
                  alt="Card Image" // Provide an appropriate alt text
                  width={384} // Set the width of the image
                  height={256} // Set the height of the image
                  className="rounded-lg"
                />
                <CardTitle>What is an NFT?</CardTitle>
                <CardDescription>
                  Jars guide to NFTs. A step-by-step introduction to what you
                  need to know
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card className="w-full">
              <CardHeader>
                <Image
                  src="/assets/learnPics/card1.png" // Specify the path to your image
                  alt="Card Image" // Provide an appropriate alt text
                  width={384} // Set the width of the image
                  height={256} // Set the height of the image
                  className="rounded-lg"
                />
                <CardTitle>What is an NFT?</CardTitle>
                <CardDescription>
                  Jars guide to NFTs. A step-by-step introduction to what you
                  need to know
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </WavyBackground>
    </>
  );
};

export default page;
