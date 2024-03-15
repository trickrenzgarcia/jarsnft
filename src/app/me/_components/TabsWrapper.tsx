"use client";

import { Chip, Tab, Tabs } from "@nextui-org/react";
import React from "react";

export default function TabsWrapper() {
  return (
    <div className="w-full">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d4]",
        }}
      >
        <Tab
          key="owned"
          title={
            <div className="flex items-center space-x-2">
              <span>Owned</span>
              <Chip size="sm" variant="faded">
                0
              </Chip>
            </div>
          }
        >Content</Tab>
        <Tab
          key="collections"
          title={
            <div className="flex items-center space-x-2">
              <span>Collections</span>
              <Chip size="sm" variant="faded">0</Chip>
            </div>
          }
          content="Owned NFTs"
        >

        </Tab>
        <Tab
          key="created"
          title={
            <div className="flex items-center space-x-2">
              <span>Created</span>
              <Chip size="sm" variant="faded">0</Chip>
            </div>
          }
          content="Owned NFTs"
        />
      </Tabs>
    </div>
  );
}
