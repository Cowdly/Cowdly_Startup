"use client";
import React from "react";
import Project from "../components/project/project";
import Content from "../components/institution/Content";
import Team from "../components/team/team";
   export default function Home() {
  return (
    <main className="overflow-hidden">
      <Content />
      <Project />
      <Team/>
    </main>
  );
}
