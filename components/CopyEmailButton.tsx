"use client";

import { useState } from "react";
import { site } from "@/content/site";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: open mailto if clipboard API unavailable
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <button onClick={handleClick} className="primary-button">
      {copied ? "✓ Copied!" : "Send an email"}
    </button>
  );
}
