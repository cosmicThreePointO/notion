// https://github.com/makenotion/notion-sdk-js
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  // Uncomment the line below if you need to debug
  logLevel: LogLevel.DEBUG,
});

// Function to fetch posts (or pages in this context)
export const fetchPage = async (id) => {
  return await notion.pages.retrieve({
    page_id: id,
  });
};
