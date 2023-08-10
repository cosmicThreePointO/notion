import React from "react";
import { CommandItem } from "./ui/command";

interface NotionPageProps {
  emoji: string;
  title: string;
}

export default function NotionPage({ emoji, title }: NotionPageProps) {
  return (
    <CommandItem className="hover:cursor-pointer ">
      <div className="flex gap-3">
        <div className="w-[14px] h-[20px]">{emoji}</div>
        <div className="text-sm leading-5 font-medium text-black">{title}</div>
      </div>
    </CommandItem>
  );
}
