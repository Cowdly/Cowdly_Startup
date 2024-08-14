"use client";
import Image from "next/image";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import FeaturedContent from "@/components/FeaturedContent";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <FeaturedContent />
    </main>
  );
}
