import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-2 bg-gradient-to-r from-violet-500 via-rose-500 to-black">
        {/* Left Start */}
        <div className="">
          <div className="m-28 flex flex-row items-center justify-center p-24">
            <div>
              <Image
                src="/assets/Jarsu.png"
                width={100}
                height={100}
                className="animate-bounce"
                alt="jars"
              />
            </div>
            <div>
              <p className="font-press-start animate-pulse text-2xl">
                jarsAdmin
              </p>
            </div>
          </div>

          <div className="align-center flex flex-col items-center gap-5">
            <div>
              <Input type="username" placeholder="Username" />
            </div>
            <div>
              <Input type="password" placeholder="Password" />
            </div>
            <div>
              <Button variant="secondary" className="font-press-start">
                Login
              </Button>
            </div>
          </div>
        </div>
        {/* Left End  */}

        {/* Right Start */}
        <div className="min-h-screen p-24">
          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            className="w-full rounded-lg border-4 border-violet-500"
            height="100%"
            id="AssetMedia--frame"
            sandbox="allow-scripts"
            src="https://regen.asunaverse.com/0000/embed.html"
            style={{ minHeight: "100px" }}
          ></iframe>
        </div>
        {/* Right End */}
      </div>
    </div>
  );
};

export default page;
