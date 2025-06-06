import { PropsWithChildren, ReactNode } from "react";

export interface RichTextModifiersConfig {
  bold: (props: PropsWithChildren<unknown>) => ReactNode;
  italic: (props: PropsWithChildren<unknown>) => ReactNode;
  underline: (props: PropsWithChildren<unknown>) => ReactNode;
  strikethrough: (props: PropsWithChildren<unknown>) => ReactNode;
  code: (props: PropsWithChildren<unknown>) => ReactNode;
}

export interface RichTextBlocksConfig {
  paragraph: (props: PropsWithChildren<unknown>) => ReactNode;
  quote: (props: PropsWithChildren<unknown>) => ReactNode;
  code: (props: PropsWithChildren<{ plainText?: string }>) => ReactNode;
  heading: (
    props: PropsWithChildren<{ level?: 1 | 2 | 3 | 4 | 5 | 6 }>,
  ) => ReactNode;
  link: (props: PropsWithChildren<{ url?: string }>) => ReactNode;
  list: (
    props: PropsWithChildren<{ format?: "ordered" | "unordered" }>,
  ) => ReactNode;
  "list-item": (props: PropsWithChildren<unknown>) => ReactNode;
  image: (props: {
    children?: [{ type: "text"; text: "" }] | ReactNode;
    image: {
      name: string;
      alternativeText?: string | null;
      url: string;
      caption?: string | null;
      width: number;
      height: number;
      formats?: Record<string, unknown>;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: unknown | null;
      createdAt: string;
      updatedAt: string;
    };
  }) => ReactNode;
}
