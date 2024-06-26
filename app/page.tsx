import Image from "next/image";
import { TopBar } from "./components/TopBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TopBar />
    </main>
  );
}
