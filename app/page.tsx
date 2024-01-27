"use client";

import Header from "@/components/organisms/Header/Header";
import Board from "../components/organisms/Board/Board";

export default function Home() {
  return (
    <main className="p-4 xl:h-screen">
      <Header />
      <Board />
    </main>
  );
}
