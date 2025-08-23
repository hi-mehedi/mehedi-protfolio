// src/components/CustomMDX.tsx
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";
import {
  Heading,
  HeadingLink,
  Text,
  InlineCode,
  CodeBlock,
  TextProps,
  MediaProps,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
} from "@once-ui-system/core";

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return <SmartLink href={href} {...props}>{children}</SmartLink>;
  }
  if (href.startsWith("#")) {
    return <a href={href} {...props}>{children}</a>;
  }
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}

function createImage({ alt, src, ...props }: MediaProps & { src: string }) {
  if (!src) {
    console.error("Media requires a valid 'src' property.");
    return null;
  }
  return <Media marginTop="8" marginBottom="16" enlarge radius="m" aspectRatio="16 / 9" border="neutral-alpha-medium" sizes="(max-width: 960px) 100vw, 960px" alt={alt} src={src} {...props} />;
}

function slugify(str: string): string {
  return str.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(as: "h1"|"h2"|"h3"|"h4"|"h5"|"h6") {
  const CustomHeading = ({ children, ...props }: Omit<React.ComponentProps<typeof HeadingLink>, 'as'|'id'>) => {
    const slug = slugify(children as string);
    return <HeadingLink marginTop="24" marginBottom="12" as={as} id={slug} {...props}>{children}</HeadingLink>;
  };
  CustomHeading.displayName = `${as}`;
  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return <Text style={{ lineHeight: "175%" }} variant="body-default-m" onBackground="neutral-medium" marginTop="8" marginBottom="12">{children}</Text>;
}

function createInlineCode({ children }: { children: ReactNode }) {
  return <InlineCode>{children}</InlineCode>;
}

function createCodeBlock(props: any) {
  if (props.children && props.children.props && props.children.props.className) {
    const { className, children } = props.children.props;
    const language = className.replace('language-', '');
    const label = language.charAt(0).toUpperCase() + language.slice(1);
    return <CodeBlock marginTop="8" marginBottom="16" codes={[{ code: children, language, label }]} copyButton={true} />;
  }
  return <pre {...props} />;
}

const components = {
  p: createParagraph as any,
  h1: createHeading("h1") as any,
  h2: createHeading("h2") as any,
  h3: createHeading("h3") as any,
  h4: createHeading("h4") as any,
  h5: createHeading("h5") as any,
  h6: createHeading("h6") as any,
  img: createImage as any,
  a: CustomLink as any,
  code: createInlineCode as any,
  pre: createCodeBlock as any,
  Heading,
  Text,
  CodeBlock,  // <-- Make sure this is included!
  InlineCode,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
