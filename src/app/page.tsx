import { CmdK } from "@/components/CmdK";
import { PAGE_ID } from "@/constants/notion";
import {
  fetchChildPagesWithEmojis,
  getBlock,
  getBlocks,
  getPage,
} from "../lib/notion";
import Image from "next/image";

export default async function Home() {
  const pageData = await fetchChildPagesWithEmojis(PAGE_ID);

  return (
    <main className="min-h-screen w-full bg-[rgba(0,0,0,0.40)] rounded-lg">
      <div className="min-h-screen flex items-center justify-center">
        <CmdK data={pageData} />
      </div>
    </main>
  );
}
