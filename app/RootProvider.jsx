"use client";

import { ThemeProvider } from "next-themes";

import Script from "next/script";
import { useEffect, useState } from "react";
import { Footer, Navbar } from "./components";

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <ThemeProvider
      attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
      <Script
        src="https://kit.fontawesome.com/95c7aa42a2.js"
        crossOrigin="anonymous"
      />
    </ThemeProvider>
  );
};

export default Providers;
