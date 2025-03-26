import { ElementType, HTMLAttributes, JSX, PropsWithChildren } from "react";
import cc from "classcat";
import Link from "next/link";
import Markdown, {
  type Components as MarkdownComponents,
  type ExtraProps,
} from "react-markdown";
import rehypeRaw from "rehype-raw";
import reformGfm from "remark-gfm";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import "./rich-text-markdown.scss";

export interface MarkdownRichTextProps {
  className?: string;
  children?: string | null;
}

const remarkPlugins = [reformGfm];
const rehypePlugins = [rehypeRaw];

const getTitle = <TagName extends "h1" | "h2" | "h3" | "h4" | "h5">(
  tag: ElementType<HTMLAttributes<HTMLHeadingElement>, TagName>,
) =>
  function ({
    children,
    ...delegatedProps
  }: JSX.IntrinsicElements[TagName] & ExtraProps) {
    return (
      <Title {...delegatedProps} as={tag} className="markdown-rich-text-title">
        {children}
      </Title>
    );
  };

const markdownConfig: MarkdownComponents = {
  h1: getTitle<"h1">("h1"),
  h2: getTitle<"h2">("h2"),
  h3: getTitle<"h3">("h3"),
  h4: getTitle<"h4">("h4"),
  h5: getTitle<"h5">("h5"),
  p: ({ children }) => <Typography>{children}</Typography>,
  a: ({ href, children }) => (
    <Link
      href={href ?? ""}
      target="_blank"
      rel="noopener noreferrer"
      className="rich-text-link"
    >
      {children}
    </Link>
  ),
  u: ({ children }) => <u>{children}</u>,
  img: ({ alt, src }) => <img src={src} alt={alt} />,
};

export const RichTextMarkdown = ({
  className,
  children,
}: PropsWithChildren<MarkdownRichTextProps>) => (
  <div className={cc(["rich-text-markdown", className])}>
    <Markdown
      skipHtml
      remarkPlugins={remarkPlugins}
      rehypePlugins={rehypePlugins}
      components={markdownConfig}
    >
      {children}
    </Markdown>
  </div>
);
