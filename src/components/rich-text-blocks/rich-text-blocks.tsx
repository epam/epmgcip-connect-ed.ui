import { PropsWithChildren } from "react";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import cc from "classcat";
import Link from "next/link";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import {
  RichTextBlocksConfig,
  RichTextModifiersConfig,
} from "@/components/rich-text-blocks/rich-text-blocks.types.ts";
import "./rich-text-blocks.scss";

export interface RichTextBlocksProps {
  content: BlocksContent;
  className?: string;
}

const getTitleTag = (level?: 1 | 2 | 3 | 4 | 5 | 6) => {
  switch (level) {
    case 1:
      return "h1";
    case 2:
      return "h2";
    case 3:
      return "h3";
    case 4:
      return "h4";
    case 5:
      return "h5";
    case 6:
      return "h5";
    default: {
      return "h3";
    }
  }
};

const blocks: RichTextBlocksConfig = {
  paragraph: ({ children }: PropsWithChildren<unknown>) => (
    <Typography>{children}</Typography>
  ),
  quote: props => <blockquote>{props.children}</blockquote>,
  code: props => (
    <pre>
      <code>{props.plainText}</code>
    </pre>
  ),
  heading: ({ level, children }) => (
    <Title as={getTitleTag(level)} className="rich-text-blocks-title">
      {children}
    </Title>
  ),
  link: ({ url, children }) => (
    <Link
      href={url ?? ""}
      target="_blank"
      rel="noopener noreferrer"
      className="rich-text-link"
    >
      {children}
    </Link>
  ),
  list: props => {
    const ListTag = props.format === "ordered" ? "ol" : "ul";
    return <ListTag>{props.children}</ListTag>;
  },
  "list-item": props => <li>{props.children}</li>,
  image: props => (
    <img src={props.image.url} alt={props.image.alternativeText ?? ""} />
  ),
};

const modifiers: RichTextModifiersConfig = {
  bold: props => <strong>{props.children}</strong>,
  italic: props => <em>{props.children}</em>,
  underline: props => <u>{props.children}</u>,
  strikethrough: props => <del>{props.children}</del>,
  code: props => <code>{props.children}</code>,
};

export const RichTextBlocks = ({ content, className }: RichTextBlocksProps) => (
  <div className={cc(["rich-text-blocks", className])}>
    <BlocksRenderer content={content} blocks={blocks} modifiers={modifiers} />
  </div>
);
