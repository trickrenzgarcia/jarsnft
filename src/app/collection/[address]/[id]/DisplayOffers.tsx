"use client"

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MdOutlineLocalOffer } from "react-icons/md";

export default function DisplayOffers() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="border px-4 rounded-md bg-card">
          <div className="flex gap-2 items-center">
            <MdOutlineLocalOffer className="text-xl"/>
            <span>Offers</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 border pt-4 rounded-b-md">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
)
}
