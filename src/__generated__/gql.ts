/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetLayoutData {\n    pages {\n      data {\n        attributes {\n          slug\n        }\n      }\n    }\n    header {\n      data {\n        attributes {\n          Logo {\n            altText\n            isIcon\n            roundedCorners\n            url\n            newTab\n            image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          CTA {\n            type\n            url\n            color\n            bgColor\n            label\n          }\n          topStripe {\n            color\n            bgColor\n            socialMedia {\n              title\n              url\n              newTab\n              icon {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n          }\n          navigations {\n            data {\n              attributes {\n                slug\n                label\n                description\n                pages {\n                  data {\n                    attributes {\n                      slug\n                      label\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    footer {\n      data {\n        attributes {\n          color\n          bgColor\n          socialMedia {\n            title\n            url\n            newTab\n            icon {\n              data {\n                attributes {\n                  caption\n                  url\n                  previewUrl\n                  height\n                  width\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetLayoutDataDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLayoutData {\n    pages {\n      data {\n        attributes {\n          slug\n        }\n      }\n    }\n    header {\n      data {\n        attributes {\n          Logo {\n            altText\n            isIcon\n            roundedCorners\n            url\n            newTab\n            image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          CTA {\n            type\n            url\n            color\n            bgColor\n            label\n          }\n          topStripe {\n            color\n            bgColor\n            socialMedia {\n              title\n              url\n              newTab\n              icon {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n          }\n          navigations {\n            data {\n              attributes {\n                slug\n                label\n                description\n                pages {\n                  data {\n                    attributes {\n                      slug\n                      label\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    footer {\n      data {\n        attributes {\n          color\n          bgColor\n          socialMedia {\n            title\n            url\n            newTab\n            icon {\n              data {\n                attributes {\n                  caption\n                  url\n                  previewUrl\n                  height\n                  width\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLayoutData {\n    pages {\n      data {\n        attributes {\n          slug\n        }\n      }\n    }\n    header {\n      data {\n        attributes {\n          Logo {\n            altText\n            isIcon\n            roundedCorners\n            url\n            newTab\n            image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          CTA {\n            type\n            url\n            color\n            bgColor\n            label\n          }\n          topStripe {\n            color\n            bgColor\n            socialMedia {\n              title\n              url\n              newTab\n              icon {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n          }\n          navigations {\n            data {\n              attributes {\n                slug\n                label\n                description\n                pages {\n                  data {\n                    attributes {\n                      slug\n                      label\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    footer {\n      data {\n        attributes {\n          color\n          bgColor\n          socialMedia {\n            title\n            url\n            newTab\n            icon {\n              data {\n                attributes {\n                  caption\n                  url\n                  previewUrl\n                  height\n                  width\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;