"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "What is IOPN Genesis NFT?",
      a: "IOPN Genesis NFT is the first official NFT collection built for the IOPN ecosystem."
    },
    {
      q: "How much does it cost?",
      a: "Each Genesis NFT costs 0.01 OPN."
    },
    {
      q: "How many NFTs are available?",
      a: "Only 1,000 Genesis NFTs will ever exist."
    },
    {
      q: "Which wallet can I use?",
      a: "You can use MetaMask connected to the IOPN Testnet or Mainnet."
    }
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-5xl px-6 py-24 text-white"
    >
      <h2 className="mb-12 text-center text-5xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="space-y-5">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="flex w-full items-center justify-between p-6 text-left text-xl font-semibold"
            >
              {item.q}

              <span>
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-slate-300 leading-7">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}