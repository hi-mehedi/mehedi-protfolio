'use client';

import { useEffect, useState } from 'react';
import styles from './CustomTOC.module.css';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export const CustomTOC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const extractHeadings = () => {
      const headingElements = Array.from(
        document.querySelectorAll('h2, h3, h4, h5, h6')
      );

      const extractedHeadings: Heading[] = headingElements.map((element, index) => {
        const id = element.id || `heading-${index}`;
        const text = element.textContent || '';
        const level = parseInt(element.tagName.substring(1));

        return { id, text, level };
      });

      setHeadings(extractedHeadings);
    };

    // Wait for content to load
    setTimeout(extractHeadings, 100);

    // Also try on content changes
    const observer = new MutationObserver(extractHeadings);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const getUniqueKey = (heading: Heading, index: number) => {
    return `${heading.id}-${heading.text}-${index}`;
  };

  if (headings.length === 0) return null;

  return (
    <nav className={styles.customToc}>
      {headings.map((heading, index) => (
        <a
          key={getUniqueKey(heading, index)}
          href={`#${heading.id}`}
          className={`${styles.tocItem} ${styles[`tocLevel${heading.level}`]}`}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );
};