// src/utils/mdxHeadings.ts
export type HeadingItem = {
  id: string;
  text: string;
  level: number;
};

export function getHeadingsFromMDX(mdxContent: string): HeadingItem[] {
  const headingRegex = /^(#{1,6})\s+(.*)$/gm;
  const headings: HeadingItem[] = [];
  const seenIds = new Set<string>();

  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(mdxContent)) !== null) {
    const level = match[1].length;
    let text = match[2].trim();

    // Generate slug for id
    let id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/&/g, "-and-")
      .replace(/[^\w\-]+/g, "");

    // Ensure unique IDs
    let uniqueId = id;
    let counter = 1;
    while (seenIds.has(uniqueId)) {
      uniqueId = `${id}-${counter}`;
      counter++;
    }
    seenIds.add(uniqueId);

    headings.push({ id: uniqueId, text, level });
  }

  return headings;
}
