"use client";
import React from "react";
import Project from "../components/project/project";
import Content from "../components/institution/Content";
import Team from "../components/team/team";
import Hero from "../components/header/Hero";
import Blog from "../components/blog/Blog";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Content />
      <Project />
      <Team />
      <Blog />
    </main>
  );
}
