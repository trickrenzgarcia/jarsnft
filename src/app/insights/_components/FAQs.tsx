"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsInsight() {
  return (
    <section>
      <hr />
      <h3 className="my-6 text-xl font-bold">
        Frequently Asked Questions (FAQs)
      </h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Q1. Is it accessible?</AccordionTrigger>
          <AccordionContent>
            {`Yes. It adheres to the WAI-ARIA design pattern.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Q2. Is it styled?</AccordionTrigger>
          <AccordionContent>
            {`Yes. It comes with default styles that matches the other
          components' aesthetic.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Q3. Is it animated?</AccordionTrigger>
          <AccordionContent>
            {`Yes. It's animated by default, but you can disable it if you
          prefer.`}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
