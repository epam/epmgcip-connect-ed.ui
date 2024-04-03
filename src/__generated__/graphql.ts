/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  PagePageSectionsDynamicZoneInput: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  article_category?: Maybe<ArticleCategoryEntityResponse>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  featuredImage?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ArticleRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ArticleLocalizationsArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ArticleCategoryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ArticleCategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleCategoryLocalizationsArgs = {
  filters?: InputMaybe<ArticleCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleCategoryEntity = {
  __typename?: 'ArticleCategoryEntity';
  attributes?: Maybe<ArticleCategory>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ArticleCategoryEntityResponse = {
  __typename?: 'ArticleCategoryEntityResponse';
  data?: Maybe<ArticleCategoryEntity>;
};

export type ArticleCategoryEntityResponseCollection = {
  __typename?: 'ArticleCategoryEntityResponseCollection';
  data: Array<ArticleCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleCategoryFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ArticleCategoryFiltersInput>;
  not?: InputMaybe<ArticleCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleCategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleCategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleCategoryRelationResponseCollection = {
  __typename?: 'ArticleCategoryRelationResponseCollection';
  data: Array<ArticleCategoryEntity>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  article_category?: InputMaybe<ArticleCategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  excerpt?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ArticleFiltersInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  article_category?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<CategoryRelationResponseCollection>;
  pages?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  pages?: InputMaybe<PageFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ColorScheme = {
  __typename?: 'ColorScheme';
  background?: Maybe<Scalars['String']['output']>;
  black?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  primary?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quaternary?: Maybe<Scalars['String']['output']>;
  quinary?: Maybe<Scalars['String']['output']>;
  secondary?: Maybe<Scalars['String']['output']>;
  tertiary?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  white?: Maybe<Scalars['String']['output']>;
};

export type ColorSchemeEntity = {
  __typename?: 'ColorSchemeEntity';
  attributes?: Maybe<ColorScheme>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ColorSchemeEntityResponse = {
  __typename?: 'ColorSchemeEntityResponse';
  data?: Maybe<ColorSchemeEntity>;
};

export type ColorSchemeInput = {
  background?: InputMaybe<Scalars['String']['input']>;
  black?: InputMaybe<Scalars['String']['input']>;
  primary?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quaternary?: InputMaybe<Scalars['String']['input']>;
  quinary?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
  white?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMetaMetadata = {
  __typename?: 'ComponentMetaMetadata';
  id: Scalars['ID']['output'];
  metaDescription: Scalars['String']['output'];
  metaTitle: Scalars['String']['output'];
};

export type ComponentSectionsBlocksGrid = {
  __typename?: 'ComponentSectionsBlocksGrid';
  block?: Maybe<Array<Maybe<ComponentSharedGridBlock>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  theme?: Maybe<ComponentSharedColor>;
};


export type ComponentSectionsBlocksGridBlockArgs = {
  filters?: InputMaybe<ComponentSharedGridBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsColumns = {
  __typename?: 'ComponentSectionsColumns';
  cards?: Maybe<Array<Maybe<ComponentSharedColumnCard>>>;
  cta?: Maybe<ComponentSharedButton>;
  heading?: Maybe<ComponentSharedHeading>;
  id: Scalars['ID']['output'];
  showWave?: Maybe<Scalars['Boolean']['output']>;
  theme?: Maybe<ComponentSharedColor>;
};


export type ComponentSectionsColumnsCardsArgs = {
  filters?: InputMaybe<ComponentSharedColumnCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsColumnsWithTabs = {
  __typename?: 'ComponentSectionsColumnsWithTabs';
  cta?: Maybe<ComponentSharedButton>;
  id: Scalars['ID']['output'];
  maxCardsToDisplay?: Maybe<Scalars['Int']['output']>;
  tabCardTheme?: Maybe<ComponentSharedTabCardTheme>;
  tabTheme?: Maybe<ComponentSharedArticleCategoryTab>;
  tabs?: Maybe<ArticleCategoryRelationResponseCollection>;
};


export type ComponentSectionsColumnsWithTabsTabsArgs = {
  filters?: InputMaybe<ArticleCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsHeroBanner = {
  __typename?: 'ComponentSectionsHeroBanner';
  coverImage?: Maybe<UploadFileEntityResponse>;
  cta?: Maybe<ComponentSharedButton>;
  id: Scalars['ID']['output'];
  overlayBlock?: Maybe<ComponentSharedOverlayBlock>;
};

export type ComponentSectionsImageBanner = {
  __typename?: 'ComponentSectionsImageBanner';
  bgColor?: Maybe<Enum_Componentsectionsimagebanner_Bgcolor>;
  card?: Maybe<ComponentSharedImageCard>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSectionsInfoCardsTypeA = {
  __typename?: 'ComponentSectionsInfoCardsTypeA';
  cards?: Maybe<Array<Maybe<ComponentSharedNoodlesCard>>>;
  cta?: Maybe<ComponentSharedButton>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  theme?: Maybe<ComponentSharedColor>;
};


export type ComponentSectionsInfoCardsTypeACardsArgs = {
  filters?: InputMaybe<ComponentSharedNoodlesCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsOverlayBlockTest = {
  __typename?: 'ComponentSectionsOverlayBlockTest';
  id: Scalars['ID']['output'];
  theme?: Maybe<ComponentSharedColor>;
};

export type ComponentSectionsRichText = {
  __typename?: 'ComponentSectionsRichText';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsTopStripe = {
  __typename?: 'ComponentSectionsTopStripe';
  id: Scalars['ID']['output'];
  socialMedia?: Maybe<Array<Maybe<ComponentSharedSocialIcon>>>;
  theme?: Maybe<ComponentSharedColor>;
};


export type ComponentSectionsTopStripeSocialMediaArgs = {
  filters?: InputMaybe<ComponentSharedSocialIconFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsTopStripeInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  socialMedia?: InputMaybe<Array<InputMaybe<ComponentSharedSocialIconInput>>>;
  theme?: InputMaybe<ComponentSharedColorInput>;
};

export type ComponentSharedArticleCategoryTab = {
  __typename?: 'ComponentSharedArticleCategoryTab';
  activeBgColor?: Maybe<Enum_Componentsharedarticlecategorytab_Activebgcolor>;
  activeBorderColor?: Maybe<Enum_Componentsharedarticlecategorytab_Activebordercolor>;
  activeColor?: Maybe<Enum_Componentsharedarticlecategorytab_Activecolor>;
  bgColor?: Maybe<Enum_Componentsharedarticlecategorytab_Bgcolor>;
  borderColor?: Maybe<Enum_Componentsharedarticlecategorytab_Bordercolor>;
  color?: Maybe<Enum_Componentsharedarticlecategorytab_Color>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedButton = {
  __typename?: 'ComponentSharedButton';
  bgColor?: Maybe<Enum_Componentsharedbutton_Bgcolor>;
  color?: Maybe<Enum_Componentsharedbutton_Color>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Componentsharedbutton_Type>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedButtonInput = {
  bgColor?: InputMaybe<Enum_Componentsharedbutton_Bgcolor>;
  color?: InputMaybe<Enum_Componentsharedbutton_Color>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Componentsharedbutton_Type>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedColor = {
  __typename?: 'ComponentSharedColor';
  bgColor?: Maybe<Enum_Componentsharedcolor_Bgcolor>;
  color?: Maybe<Enum_Componentsharedcolor_Color>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedColorInput = {
  bgColor?: InputMaybe<Enum_Componentsharedcolor_Bgcolor>;
  color?: InputMaybe<Enum_Componentsharedcolor_Color>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedColumnCard = {
  __typename?: 'ComponentSharedColumnCard';
  article?: Maybe<ArticleEntityResponse>;
  bgColor?: Maybe<Enum_Componentsharedcolumncard_Bgcolor>;
  color?: Maybe<Enum_Componentsharedcolumncard_Color>;
  id: Scalars['ID']['output'];
  linkColor?: Maybe<Enum_Componentsharedcolumncard_Linkcolor>;
  linkText?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedColumnCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedColumnCardFiltersInput>>>;
  article?: InputMaybe<ArticleFiltersInput>;
  bgColor?: InputMaybe<StringFilterInput>;
  color?: InputMaybe<StringFilterInput>;
  linkColor?: InputMaybe<StringFilterInput>;
  linkText?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedColumnCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedColumnCardFiltersInput>>>;
};

export type ComponentSharedGridBlock = {
  __typename?: 'ComponentSharedGridBlock';
  bgColor?: Maybe<Enum_Componentsharedgridblock_Bgcolor>;
  color?: Maybe<Enum_Componentsharedgridblock_Color>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  linkBgColor?: Maybe<Enum_Componentsharedgridblock_Linkbgcolor>;
  linkColor?: Maybe<Enum_Componentsharedgridblock_Linkcolor>;
  linkIcon?: Maybe<UploadFileEntityResponse>;
  linkNewTab?: Maybe<Scalars['Boolean']['output']>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkTitle?: Maybe<Scalars['String']['output']>;
  linkUrl?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedGridBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedGridBlockFiltersInput>>>;
  bgColor?: InputMaybe<StringFilterInput>;
  color?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  linkBgColor?: InputMaybe<StringFilterInput>;
  linkColor?: InputMaybe<StringFilterInput>;
  linkNewTab?: InputMaybe<BooleanFilterInput>;
  linkText?: InputMaybe<StringFilterInput>;
  linkTitle?: InputMaybe<StringFilterInput>;
  linkUrl?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedGridBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedGridBlockFiltersInput>>>;
};

export type ComponentSharedHeading = {
  __typename?: 'ComponentSharedHeading';
  id: Scalars['ID']['output'];
  position?: Maybe<Enum_Componentsharedheading_Position>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedImage = {
  __typename?: 'ComponentSharedImage';
  altText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  isIcon?: Maybe<Scalars['Boolean']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedImageCard = {
  __typename?: 'ComponentSharedImageCard';
  cardBgColor?: Maybe<Enum_Componentsharedimagecard_Cardbgcolor>;
  cardColor?: Maybe<Enum_Componentsharedimagecard_Cardcolor>;
  cardDescription?: Maybe<Scalars['String']['output']>;
  cardHeading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linkBgColor?: Maybe<Enum_Componentsharedimagecard_Linkbgcolor>;
  linkColor?: Maybe<Enum_Componentsharedimagecard_Linkcolor>;
  linkIcon?: Maybe<UploadFileEntityResponse>;
  linkNewTab?: Maybe<Scalars['Boolean']['output']>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkTitle?: Maybe<Scalars['String']['output']>;
  linkUrl?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedImageInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  isIcon?: InputMaybe<Scalars['Boolean']['input']>;
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedLink = {
  __typename?: 'ComponentSharedLink';
  color?: Maybe<Enum_Componentsharedlink_Color>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedNoodlesCard = {
  __typename?: 'ComponentSharedNoodlesCard';
  bgColor?: Maybe<Enum_Componentsharednoodlescard_Bgcolor>;
  borderColor?: Maybe<Enum_Componentsharednoodlescard_Bordercolor>;
  color?: Maybe<Enum_Componentsharednoodlescard_Color>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSharedNoodlesCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedNoodlesCardFiltersInput>>>;
  bgColor?: InputMaybe<StringFilterInput>;
  borderColor?: InputMaybe<StringFilterInput>;
  color?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedNoodlesCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedNoodlesCardFiltersInput>>>;
};

export type ComponentSharedOverlayBlock = {
  __typename?: 'ComponentSharedOverlayBlock';
  bgColor?: Maybe<Enum_Componentsharedoverlayblock_Bgcolor>;
  color?: Maybe<Enum_Componentsharedoverlayblock_Color>;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSocialIcon = {
  __typename?: 'ComponentSharedSocialIcon';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  newTab?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedSocialIconFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSocialIconFiltersInput>>>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSharedSocialIconFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSocialIconFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSocialIconInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedTabCardTheme = {
  __typename?: 'ComponentSharedTabCardTheme';
  bgColor?: Maybe<Enum_Componentsharedtabcardtheme_Bgcolor>;
  color?: Maybe<Enum_Componentsharedtabcardtheme_Color>;
  id: Scalars['ID']['output'];
  linkColor?: Maybe<Enum_Componentsharedtabcardtheme_Linkcolor>;
};

export type ComponentSharedVideo = {
  __typename?: 'ComponentSharedVideo';
  altText?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  video?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSharedWave = {
  __typename?: 'ComponentSharedWave';
  bgColor?: Maybe<Enum_Componentsharedwave_Bgcolor>;
  id: Scalars['ID']['output'];
  isVisible?: Maybe<Scalars['Boolean']['output']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Enum_Componentsectionsimagebanner_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedarticlecategorytab_Activebgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedarticlecategorytab_Activebordercolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedarticlecategorytab_Activecolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedarticlecategorytab_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedarticlecategorytab_Bordercolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedarticlecategorytab_Color =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedbutton_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedbutton_Color =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedbutton_Type =
  | 'form'
  | 'inverted'
  | 'main'
  | 'nav'
  | 'outline';

export type Enum_Componentsharedcolor_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedcolor_Color =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedcolumncard_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedcolumncard_Color =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedcolumncard_Linkcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedgridblock_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedgridblock_Color =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedgridblock_Linkbgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedgridblock_Linkcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedheading_Position =
  | 'center'
  | 'left';

export type Enum_Componentsharedimagecard_Cardbgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedimagecard_Cardcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedimagecard_Linkbgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedimagecard_Linkcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedlink_Color =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedmetasocial_Socialnetwork =
  | 'Facebook'
  | 'Twitter';

export type Enum_Componentsharednoodlescard_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharednoodlescard_Bordercolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharednoodlescard_Color =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedoverlayblock_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedoverlayblock_Color =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedtabcardtheme_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedtabcardtheme_Color =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedtabcardtheme_Linkcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedwave_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = {
  __typename?: 'Footer';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<FooterRelationResponseCollection>;
  navigation?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socialMedia?: Maybe<Array<Maybe<ComponentSharedSocialIcon>>>;
  theme?: Maybe<ComponentSharedColor>;
  tradeMark?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FooterLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type FooterNavigationArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FooterSocialMediaArgs = {
  filters?: InputMaybe<ComponentSharedSocialIconFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  navigation?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socialMedia?: InputMaybe<Array<InputMaybe<ComponentSharedSocialIconInput>>>;
  theme?: InputMaybe<ComponentSharedColorInput>;
  tradeMark?: InputMaybe<Scalars['String']['input']>;
};

export type FooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  data: Array<FooterEntity>;
};

export type GenericMorph = Article | ArticleCategory | Category | ColorScheme | ComponentMetaMetadata | ComponentSectionsBlocksGrid | ComponentSectionsColumns | ComponentSectionsColumnsWithTabs | ComponentSectionsHeroBanner | ComponentSectionsImageBanner | ComponentSectionsInfoCardsTypeA | ComponentSectionsOverlayBlockTest | ComponentSectionsRichText | ComponentSectionsTopStripe | ComponentSharedArticleCategoryTab | ComponentSharedButton | ComponentSharedColor | ComponentSharedColumnCard | ComponentSharedGridBlock | ComponentSharedHeading | ComponentSharedImage | ComponentSharedImageCard | ComponentSharedLink | ComponentSharedMetaSocial | ComponentSharedNoodlesCard | ComponentSharedOverlayBlock | ComponentSharedSeo | ComponentSharedSocialIcon | ComponentSharedTabCardTheme | ComponentSharedVideo | ComponentSharedWave | Footer | Header | I18NLocale | Page | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Header = {
  __typename?: 'Header';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cta?: Maybe<ComponentSharedButton>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<HeaderRelationResponseCollection>;
  logo?: Maybe<ComponentSharedImage>;
  navigations?: Maybe<CategoryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stripe?: Maybe<ComponentSectionsTopStripe>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HeaderLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type HeaderNavigationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeaderEntity = {
  __typename?: 'HeaderEntity';
  attributes?: Maybe<Header>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HeaderEntityResponse = {
  __typename?: 'HeaderEntityResponse';
  data?: Maybe<HeaderEntity>;
};

export type HeaderInput = {
  cta?: InputMaybe<ComponentSharedButtonInput>;
  logo?: InputMaybe<ComponentSharedImageInput>;
  navigations?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stripe?: InputMaybe<ComponentSectionsTopStripeInput>;
};

export type HeaderRelationResponseCollection = {
  __typename?: 'HeaderRelationResponseCollection';
  data: Array<HeaderEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createArticleCategory?: Maybe<ArticleCategoryEntityResponse>;
  createArticleCategoryLocalization?: Maybe<ArticleCategoryEntityResponse>;
  createArticleLocalization?: Maybe<ArticleEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createFooterLocalization?: Maybe<FooterEntityResponse>;
  createHeaderLocalization?: Maybe<HeaderEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteArticleCategory?: Maybe<ArticleCategoryEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteColorScheme?: Maybe<ColorSchemeEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHeader?: Maybe<HeaderEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateArticleCategory?: Maybe<ArticleCategoryEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateColorScheme?: Maybe<ColorSchemeEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHeader?: Maybe<HeaderEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateArticleCategoryArgs = {
  data: ArticleCategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateArticleCategoryLocalizationArgs = {
  data?: InputMaybe<ArticleCategoryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateArticleLocalizationArgs = {
  data?: InputMaybe<ArticleInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateFooterLocalizationArgs = {
  data?: InputMaybe<FooterInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateHeaderLocalizationArgs = {
  data?: InputMaybe<HeaderInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePageLocalizationArgs = {
  data?: InputMaybe<PageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteArticleCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePageArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateArticleCategoryArgs = {
  data: ArticleCategoryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateColorSchemeArgs = {
  data: ColorSchemeInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Page = {
  __typename?: 'Page';
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PageRelationResponseCollection>;
  pageSections?: Maybe<Array<Maybe<PagePageSectionsDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  pageSections?: InputMaybe<Array<Scalars['PagePageSectionsDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PagePageSectionsDynamicZone = ComponentSectionsBlocksGrid | ComponentSectionsColumns | ComponentSectionsColumnsWithTabs | ComponentSectionsHeroBanner | ComponentSectionsImageBanner | ComponentSectionsInfoCardsTypeA | ComponentSectionsRichText | Error;

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type PublicationState =
  | 'LIVE'
  | 'PREVIEW';

export type Query = {
  __typename?: 'Query';
  article?: Maybe<ArticleEntityResponse>;
  articleCategories?: Maybe<ArticleCategoryEntityResponseCollection>;
  articleCategory?: Maybe<ArticleCategoryEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  colorScheme?: Maybe<ColorSchemeEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  header?: Maybe<HeaderEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryArticleCategoriesArgs = {
  filters?: InputMaybe<ArticleCategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticleCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryColorSchemeArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type NewArticlesFragment = { __typename?: 'ArticleCategoryEntity', attributes?: { __typename?: 'ArticleCategory', articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null } | null } & { ' $fragmentName'?: 'NewArticlesFragment' };

export type GetLayoutDataQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetLayoutDataQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', slug?: string | null } | null }> } | null, colorScheme?: { __typename?: 'ColorSchemeEntityResponse', data?: { __typename?: 'ColorSchemeEntity', attributes?: { __typename?: 'ColorScheme', white?: string | null, black?: string | null, background?: string | null, primary?: string | null, secondary?: string | null, tertiary?: string | null, quaternary?: string | null, quinary?: string | null } | null } | null } | null, header?: { __typename?: 'HeaderEntityResponse', data?: { __typename?: 'HeaderEntity', attributes?: { __typename?: 'Header', logo?: { __typename?: 'ComponentSharedImage', altText?: string | null, isIcon?: boolean | null, url?: string | null, newTab?: boolean | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null } | null, cta?: { __typename?: 'ComponentSharedButton', type?: Enum_Componentsharedbutton_Type | null, url?: string | null, label?: string | null, color?: Enum_Componentsharedbutton_Color | null, bgColor?: Enum_Componentsharedbutton_Bgcolor | null } | null, stripe?: { __typename?: 'ComponentSectionsTopStripe', theme?: { __typename?: 'ComponentSharedColor', color?: Enum_Componentsharedcolor_Color | null, bgColor?: Enum_Componentsharedcolor_Bgcolor | null } | null, socialMedia?: Array<{ __typename?: 'ComponentSharedSocialIcon', title?: string | null, url?: string | null, newTab?: boolean | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null, navigations?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug?: string | null, label?: string | null, description?: string | null, pages?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', slug?: string | null, label?: string | null } | null }> } | null } | null }> } | null } | null } | null } | null, footer?: { __typename?: 'FooterEntityResponse', data?: { __typename?: 'FooterEntity', attributes?: { __typename?: 'Footer', heading?: string | null, tradeMark?: string | null, theme?: { __typename?: 'ComponentSharedColor', color?: Enum_Componentsharedcolor_Color | null, bgColor?: Enum_Componentsharedcolor_Bgcolor | null } | null, socialMedia?: Array<{ __typename?: 'ComponentSharedSocialIcon', title?: string | null, url?: string | null, newTab?: boolean | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', caption?: string | null, url: string, previewUrl?: string | null, height?: number | null, width?: number | null } | null } | null } | null } | null> | null, navigation?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', slug?: string | null, label?: string | null } | null }> } | null } | null } | null } | null };

export type GetNewsByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type GetNewsByCategoryQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null };

export type GetPageDataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type GetPageDataQuery = { __typename?: 'Query', page?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', attributes?: { __typename?: 'Page', label?: string | null, slug?: string | null, pageSections?: Array<{ __typename: 'ComponentSectionsBlocksGrid', id: string, heading?: string | null, theme?: { __typename?: 'ComponentSharedColor', color?: Enum_Componentsharedcolor_Color | null, bgColor?: Enum_Componentsharedcolor_Bgcolor | null } | null, block?: Array<{ __typename?: 'ComponentSharedGridBlock', id: string, heading?: string | null, description?: string | null, color?: Enum_Componentsharedgridblock_Color | null, bgColor?: Enum_Componentsharedgridblock_Bgcolor | null, linkUrl?: string | null, linkText?: string | null, linkTitle?: string | null, linkNewTab?: boolean | null, linkColor?: Enum_Componentsharedgridblock_Linkcolor | null, linkBgColor?: Enum_Componentsharedgridblock_Linkbgcolor | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, linkIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsColumns', id: string, showWave?: boolean | null, columnsHeading?: { __typename?: 'ComponentSharedHeading', text?: string | null, position?: Enum_Componentsharedheading_Position | null } | null, theme?: { __typename?: 'ComponentSharedColor', color?: Enum_Componentsharedcolor_Color | null, bgColor?: Enum_Componentsharedcolor_Bgcolor | null } | null, cta?: { __typename?: 'ComponentSharedButton', label?: string | null, type?: Enum_Componentsharedbutton_Type | null, url?: string | null, color?: Enum_Componentsharedbutton_Color | null, bgColor?: Enum_Componentsharedbutton_Bgcolor | null } | null, cards?: Array<{ __typename?: 'ComponentSharedColumnCard', linkText?: string | null, linkColor?: Enum_Componentsharedcolumncard_Linkcolor | null, cardColor?: Enum_Componentsharedcolumncard_Color | null, cardBgColor?: Enum_Componentsharedcolumncard_Bgcolor | null, article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsColumnsWithTabs', id: string, maxCardsToDisplay?: number | null, tabTheme?: { __typename?: 'ComponentSharedArticleCategoryTab', color?: Enum_Componentsharedarticlecategorytab_Color | null, bgColor?: Enum_Componentsharedarticlecategorytab_Bgcolor | null, borderColor?: Enum_Componentsharedarticlecategorytab_Bordercolor | null, activeColor?: Enum_Componentsharedarticlecategorytab_Activecolor | null, activeBgColor?: Enum_Componentsharedarticlecategorytab_Activebgcolor | null, activeBorderColor?: Enum_Componentsharedarticlecategorytab_Activebordercolor | null } | null, tabCardTheme?: { __typename?: 'ComponentSharedTabCardTheme', color?: Enum_Componentsharedtabcardtheme_Color | null, bgColor?: Enum_Componentsharedtabcardtheme_Bgcolor | null, linkColor?: Enum_Componentsharedtabcardtheme_Linkcolor | null } | null, cta?: { __typename?: 'ComponentSharedButton', label?: string | null, type?: Enum_Componentsharedbutton_Type | null, url?: string | null, color?: Enum_Componentsharedbutton_Color | null, bgColor?: Enum_Componentsharedbutton_Bgcolor | null } | null, tabs?: { __typename?: 'ArticleCategoryRelationResponseCollection', data: Array<{ __typename?: 'ArticleCategoryEntity', id?: string | null, attributes?: { __typename?: 'ArticleCategory', slug: string, label?: string | null, description?: string | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null } | null }> } | null } | { __typename: 'ComponentSectionsHeroBanner', id: string, coverImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, cta?: { __typename?: 'ComponentSharedButton', label?: string | null, url?: string | null, type?: Enum_Componentsharedbutton_Type | null, color?: Enum_Componentsharedbutton_Color | null, bgColor?: Enum_Componentsharedbutton_Bgcolor | null } | null, overlayBlock?: { __typename?: 'ComponentSharedOverlayBlock', title?: string | null, content?: string | null, color?: Enum_Componentsharedoverlayblock_Color | null, bgColor?: Enum_Componentsharedoverlayblock_Bgcolor | null } | null } | { __typename: 'ComponentSectionsImageBanner', id: string, bgColor?: Enum_Componentsectionsimagebanner_Bgcolor | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, card?: { __typename?: 'ComponentSharedImageCard', cardHeading?: string | null, cardDescription?: string | null, cardColor?: Enum_Componentsharedimagecard_Cardcolor | null, cardBgColor?: Enum_Componentsharedimagecard_Cardbgcolor | null, linkColor?: Enum_Componentsharedimagecard_Linkcolor | null, linkBgColor?: Enum_Componentsharedimagecard_Linkbgcolor | null, linkText?: string | null, linkUrl?: string | null, linkTitle?: string | null, linkNewTab?: boolean | null, linkIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | { __typename: 'ComponentSectionsInfoCardsTypeA', id: string, heading?: string | null, description?: string | null, theme?: { __typename?: 'ComponentSharedColor', color?: Enum_Componentsharedcolor_Color | null, bgColor?: Enum_Componentsharedcolor_Bgcolor | null } | null, cta?: { __typename?: 'ComponentSharedButton', color?: Enum_Componentsharedbutton_Color | null, bgColor?: Enum_Componentsharedbutton_Bgcolor | null, url?: string | null, label?: string | null, type?: Enum_Componentsharedbutton_Type | null } | null, cards?: Array<{ __typename?: 'ComponentSharedNoodlesCard', id: string, heading?: string | null, description?: string | null, color?: Enum_Componentsharednoodlescard_Color | null, bgColor?: Enum_Componentsharednoodlescard_Bgcolor | null, borderColor?: Enum_Componentsharednoodlescard_Bordercolor | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsRichText', id: string, content?: string | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export const NewArticlesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewArticles"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleCategoryEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewArticlesFragment, unknown>;
export const GetLayoutDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLayoutData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colorScheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"white"}},{"kind":"Field","name":{"kind":"Name","value":"black"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"secondary"}},{"kind":"Field","name":{"kind":"Name","value":"tertiary"}},{"kind":"Field","name":{"kind":"Name","value":"quaternary"}},{"kind":"Field","name":{"kind":"Name","value":"quinary"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stripe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"tradeMark"}},{"kind":"Field","name":{"kind":"Name","value":"navigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetLayoutDataQuery, GetLayoutDataQueryVariables>;
export const GetNewsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"article_category"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"category"}}]}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNewsByCategoryQuery, GetNewsByCategoryQueryVariables>;
export const GetPageDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"pageSections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsHeroBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"overlayBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsInfoCardsTypeA"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"borderColor"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsImageBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cardHeading"}},{"kind":"Field","name":{"kind":"Name","value":"cardDescription"}},{"kind":"Field","name":{"kind":"Name","value":"cardColor"}},{"kind":"Field","name":{"kind":"Name","value":"cardBgColor"}},{"kind":"Field","name":{"kind":"Name","value":"linkColor"}},{"kind":"Field","name":{"kind":"Name","value":"linkBgColor"}},{"kind":"Field","name":{"kind":"Name","value":"linkText"}},{"kind":"Field","name":{"kind":"Name","value":"linkUrl"}},{"kind":"Field","name":{"kind":"Name","value":"linkTitle"}},{"kind":"Field","name":{"kind":"Name","value":"linkNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"linkIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsBlocksGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkUrl"}},{"kind":"Field","name":{"kind":"Name","value":"linkText"}},{"kind":"Field","name":{"kind":"Name","value":"linkTitle"}},{"kind":"Field","name":{"kind":"Name","value":"linkNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"linkIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkColor"}},{"kind":"Field","name":{"kind":"Name","value":"linkBgColor"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"columnsHeading"},"name":{"kind":"Name","value":"heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cardColor"},"name":{"kind":"Name","value":"color"}},{"kind":"Field","alias":{"kind":"Name","value":"cardBgColor"},"name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"linkText"}},{"kind":"Field","name":{"kind":"Name","value":"linkColor"}},{"kind":"Field","name":{"kind":"Name","value":"article"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"showWave"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumnsWithTabs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tabTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"borderColor"}},{"kind":"Field","name":{"kind":"Name","value":"activeColor"}},{"kind":"Field","name":{"kind":"Name","value":"activeBgColor"}},{"kind":"Field","name":{"kind":"Name","value":"activeBorderColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tabCardTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"linkColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxCardsToDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"cta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPageDataQuery, GetPageDataQueryVariables>;