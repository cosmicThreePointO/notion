import React from "react";
import { CommandItem } from "./ui/command";
import Link from "next/link";

interface NotionPageProps {
  emoji: string;
  title: string;
  url: string;
}

export default function NotionPage({ emoji, title, url }: NotionPageProps) {
  return (
    <CommandItem className="hover:cursor-pointer">
      <Link href={url} legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className="flex gap-3">
          <div className="w-[14px] h-[20px]">{emoji}</div>
          <div className="text-sm leading-5 font-medium text-black">
            {title}
          </div>
        </a>
      </Link>
    </CommandItem>
  );
}
