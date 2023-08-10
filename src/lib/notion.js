// https://github.com/makenotion/notion-sdk-js
import { Client, LogLevel } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  // Uncomment the line below if you need to debug
  // logLevel: LogLevel.DEBUG,
});

export const getPage = async (id) => {
  const response = await notion.pages.retrieve({ page_id: id });

  return response;
};

export const getBlock = async (id) => {
  const block = await notion.blocks.retrieve({
    block_id: id,
  });
  return block;
};

export const getBlocks = async (id) => {
  const response = await notion.blocks.children.list({ block_id: id });
  const blocks = response.results;

  // Recursively fetch children of blocks that can have nested blocks
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (block.type === "child_page" || block.has_children) {
      const childBlocks = await getBlocks(block.id);
      blocks[i].children = childBlocks;
    }
  }

  return blocks;
};

export const fetchChildPagesWithEmojis = async (PAGE_ID) => {
  const results = [];
  const blocks = await getBlocks(PAGE_ID);

  for (let block of blocks) {
    if (block.type === "child_page") {
      const pageData = await getPage(block.id);
      results.push({
        title: block.child_page.title,
        id: block.id,
        emoji: pageData.icon?.emoji || "", // Using optional chaining in case `icon` is undefined
      });
    }
  }

  console.log(results);
  return results;
};
