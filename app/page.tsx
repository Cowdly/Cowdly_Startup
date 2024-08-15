"use client";
import React from "react";
import Project from "../components/project";
import ContactUs from "../components/contactUs";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Project />
      <ContactUs />
    </main>
  );
}
