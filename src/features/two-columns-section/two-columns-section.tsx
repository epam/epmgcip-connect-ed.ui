"use client";

import { BlocksContent } from "@strapi/blocks-react-renderer";
import cc from "classcat";
import { ActionableArticle } from "@/features/two-columns-section/actionable-article/actionable-article.tsx";
import { DataGraph } from "@/components/data-graph/data-graph.tsx";
import { RichTextBlocks } from "@/components/rich-text-blocks/rich-text-blocks.tsx";
import { RichTextMarkdown } from "@/components/rich-text-markdown/rich-text-markdown.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import banner from "@/assets/images/big-height.jpg";
import "./two-columns-section.scss";

type ColumnContent =
  | {
      type: "article";
      body?: string;
      title?: string;
    }
  | {
      type: "markdown";
      body?: string;
    }
  | {
      type: "rich-text";
      body?: BlocksContent;
    }
  | {
      type: "image";
    }
  | {
      type: "video";
    }
  | {
      type: "graph";
      url: string;
    };

const renderColumn = (item: ColumnContent) => {
  switch (item.type) {
    case "article": {
      return <ActionableArticle body={item?.body} title={item?.title} />;
    }
    case "markdown": {
      return <RichTextMarkdown>{item?.body}</RichTextMarkdown>;
    }
    case "rich-text": {
      return <RichTextBlocks content={item?.body ?? []} />;
    }
    case "image": {
      // @ts-expect-error Will be fixed after the integration eslint-ignore-next-line
      return <img className="two-columns-section-image" src={banner} alt="" />;
    }
    case "video": {
      return (
        <video
          controls
          className="two-columns-section-video"
          aria-label="video"
        >
          <source />
        </video>
      );
    }
    case "graph": {
      return <DataGraph url={item.url} />;
    }
    default: {
      return null;
    }
  }
};

export const TwoColumnsSection = () => {
  const columns: ColumnContent[][] = [
    [
      {
        type: "article",
        title: "Our values",
        body: "## Our values\n\nOur course is built upon the principles of equity, accessibility, inclusivity, and excellence. Available in both Kazakh and Russian languages, it caters to a wide range of schoolchildren, particularly those from rural areas, bridging the educational quality gap between urban and rural regions. Delivered online and free of charge for convenience and accessibility, we believe that every child should have the opportunity to gain digital literacy skills, regardless of their background, language, or economic status. We also promote engagement and participation, and upon course completion, electronic certificates serve as recognition of dedication to digital literacy improvement. Our commitment is to create an inclusive and digitally empowered society.\n",
        // body: "Our course is built upon the principles of equity, accessibility, inclusivity, and excellence. Available in both Kazakh and Russian languages, it caters to a wide range of schoolchildren, particularly those from rural areas, bridging the educational quality gap between urban and rural regions. Delivered online and free of charge for convenience and accessibility, we believe that every child should have the opportunity to gain digital literacy skills, regardless of their background, language, or economic status. We also promote engagement and participation, and upon course completion, electronic certificates serve as recognition of dedication to digital literacy improvement. Our commitment is to create an inclusive and digitally empowered society."
      } /*{
    type: "article",
    title: "Who is the course for",
    body: "The Digital Literacy for kids and youth course is open to all middle school children aged 11-15 (grades 5 to 9). This age range was selected in response to the distance learning challenges these children faced during the COVID-19 outbreak and the findings from the ICILS 2018 report on digital literacy among 8th graders in Kazakhstan. It revealed that 50% of 8th graders are at Level 1, 27% at Level 2, and 25% at Level 3 of digital literacy. None of them achieved Level 4. This underscores the importance of educating this specific age group in digital literacy. By offering this online course, we aim to empower young individuals with the skills they need to thrive in an increasingly digital world. Our course ensures that children from diverse backgrounds can participate, bridging the digital divide and opening more opportunities."
  }*/,
      {
        type: "graph",
        url: "https://app.powerbi.com/view?r=eyJrIjoiY2NjMzE4ZWEtNDRhMC00OTI0LTk3OWItMjVlYzhiYmI5MTNhIiwidCI6IjBjNDRjNjY1LWU1NjQtNGQyZS1iZjFiLWU4OWYwZDI2NGQxZiIsImMiOjl9",
      },
    ],
    [
      { type: "image" },
      {
        type: "rich-text",
        body: [
          {
            type: "paragraph",
            children: [{ type: "text", text: "A simple paragraph" }],
          },
        ],
      },
      /*{
        type: "markdown",
        title: "Our values",
        body: "## Our values\n\n**Our** course is built upon ~~the~~ principles of equity, accessibility, inclusivity, and excellence. Available in both <u>Kazakh</u> and _Russian_ languages, it caters to a wide range of schoolchildren, particularly those from rural areas, bridging the educational quality gap between urban and rural regions. Delivered online and free of charge for convenience and accessibility, we believe that every child should have the opportunity to gain digital literacy skills, regardless of their background, language, or economic status. We also promote engagement and participation, and upon course completion, electronic certificates serve as recognition of dedication to digital literacy improvement. Our commitment is to create an inclusive and digitally empowered society.\n- first\n- second\n\n1.  First\n2.  Second\n\n\n```\nCode\n```\n\n\n>Quote",
        // body: "Our course is built upon the principles of equity, accessibility, inclusivity, and excellence. Available in both Kazakh and Russian languages, it caters to a wide range of schoolchildren, particularly those from rural areas, bridging the educational quality gap between urban and rural regions. Delivered online and free of charge for convenience and accessibility, we believe that every child should have the opportunity to gain digital literacy skills, regardless of their background, language, or economic status. We also promote engagement and participation, and upon course completion, electronic certificates serve as recognition of dedication to digital literacy improvement. Our commitment is to create an inclusive and digitally empowered society."
      }*/ /*{
    type: "article",
    title: "Who is the course for",
    body: "The Digital Literacy for kids and youth course is open to all middle school children aged 11-15 (grades 5 to 9). This age range was selected in response to the distance learning challenges these children faced during the COVID-19 outbreak and the findings from the ICILS 2018 report on digital literacy among 8th graders in Kazakhstan. It revealed that 50% of 8th graders are at Level 1, 27% at Level 2, and 25% at Level 3 of digital literacy. None of them achieved Level 4. This underscores the importance of educating this specific age group in digital literacy. By offering this online course, we aim to empower young individuals with the skills they need to thrive in an increasingly digital world. Our course ensures that children from diverse backgrounds can participate, bridging the digital divide and opening more opportunities."
  }*/
    ],
  ];

  return (
    <SectionBase className="two-columns-section">
      <div className="two-columns-section-content">
        {columns.map((row, index) => {
          return (
            <div
              /* eslint-disable-next-line react/no-array-index-key */
              key={index}
              className={cc([
                "two-columns-section-row",
                // "two-columns-section-row-large-right", 1:2
                // "two-columns-section-row-large-left" 2:1
              ])}
            >
              {row.map((item, columnIndex) => (
                /* eslint-disable-next-line react/no-array-index-key */
                <div className="two-columns-section-column" key={columnIndex}>
                  {renderColumn(item)}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </SectionBase>
  );
};
