"use client";
import React from "react";
import Project from "../components/project/project";
import ContactUs from "../components/contactUs";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Project />
      <ContactUs />
    </main>
  );
}
