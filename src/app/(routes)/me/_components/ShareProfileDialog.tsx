"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RiShare2Line } from "react-icons/ri";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tooltip } from "@nextui-org/react";
import { Copy } from "lucide-react";
import { Profile } from "@/types/users";

type Props = {
  user: Profile;
  copyLink: boolean;
  setCopyLink: React.Dispatch<React.SetStateAction<boolean>>;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export default function ShareProfileDialog({ user, copyLink, setCopyLink, variant = "outline", size = "default" } : Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 p-2 md:flex" size={size} variant={variant}>
          <RiShare2Line className="text-xl" />
          <span className="hidden lg:block">Share</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            You can share your profile link to the other NFT enthusiast.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={`${process.env.NEXT_PUBLIC_APP_URL}/user/${user.address}`}
              readOnly
            />
          </div>
          <Tooltip
            isOpen={copyLink}
            onOpenChange={(open) => setCopyLink(open)}
            content="Copy link"
          >
            <Button
              type="submit"
              size="sm"
              variant="ghost"
              className="px-3"
              onClick={() => {
                navigator.clipboard.writeText(
                  `${process.env.NEXT_PUBLIC_APP_URL}/user/${user.address}`,
                );
              }}
            >
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </Tooltip>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
