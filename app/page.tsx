"use client";
import React from "react";
import Project from "../components/project/project";
import Institution from "../components/institution/Institution";
import Team from "../components/team/team";
import Hero from "../components/header/Hero";
import Blog from "../components/blog/Blog";
import ContactUs from "../components/contactUs/ContactUs";
export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      <Institution />
      <Project />
      <Team />
      <Blog />
      <ContactUs />
    </main>
  );
}
