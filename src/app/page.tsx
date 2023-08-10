import { CmdK } from "@/components/CmdK";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[rgba(0,0,0,0.40)] rounded-lg">
      <div className="min-h-screen flex items-center justify-center">
        <CmdK />
      </div>
    </main>
  );
}
