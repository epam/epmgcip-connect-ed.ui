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
  ColumnColumnDynamicZoneInput: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  PagePageSectionsDynamicZoneInput: { input: any; output: any; }
  TabContainerContentDynamicZoneInput: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  excerpt?: Maybe<Scalars['String']['output']>;
  featuredImage?: Maybe<UploadFile>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Article>>;
  localizations_connection?: Maybe<ArticleRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  theme?: Maybe<Theme>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ArticleLocalizationsArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleLocalizations_ConnectionArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  nodes: Array<Article>;
  pageInfo: Pagination;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  excerpt?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ArticleFiltersInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  theme?: InputMaybe<ThemeFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  nodes: Array<Article>;
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

export type Button = {
  __typename?: 'Button';
  buttonTheme?: Maybe<ButtonTheme>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Enum_Button_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ButtonEntityResponseCollection = {
  __typename?: 'ButtonEntityResponseCollection';
  nodes: Array<Button>;
  pageInfo: Pagination;
};

export type ButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ButtonFiltersInput>>>;
  buttonTheme?: InputMaybe<ButtonThemeFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ButtonFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ButtonInput = {
  buttonTheme?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Enum_Button_Type>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ButtonTheme = {
  __typename?: 'ButtonTheme';
  BackgrondColor?: Maybe<Enum_Buttontheme_Backgrondcolor>;
  FontColor?: Maybe<Enum_Buttontheme_Fontcolor>;
  OutlineColor?: Maybe<Enum_Buttontheme_Outlinecolor>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ButtonThemeEntityResponseCollection = {
  __typename?: 'ButtonThemeEntityResponseCollection';
  nodes: Array<ButtonTheme>;
  pageInfo: Pagination;
};

export type ButtonThemeFiltersInput = {
  BackgrondColor?: InputMaybe<StringFilterInput>;
  FontColor?: InputMaybe<StringFilterInput>;
  OutlineColor?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ButtonThemeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ButtonThemeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ButtonThemeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ButtonThemeInput = {
  BackgrondColor?: InputMaybe<Enum_Buttontheme_Backgrondcolor>;
  FontColor?: InputMaybe<Enum_Buttontheme_Fontcolor>;
  OutlineColor?: InputMaybe<Enum_Buttontheme_Outlinecolor>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Category>>;
  localizations_connection?: Maybe<CategoryRelationResponseCollection>;
  pages: Array<Maybe<Page>>;
  pages_connection?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryLocalizations_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryPages_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  nodes: Array<Category>;
  pageInfo: Pagination;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
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
  nodes: Array<Category>;
};

export type ColorScheme = {
  __typename?: 'ColorScheme';
  background?: Maybe<Scalars['String']['output']>;
  black?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  primary?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quaternary?: Maybe<Scalars['String']['output']>;
  quinary?: Maybe<Scalars['String']['output']>;
  secondary?: Maybe<Scalars['String']['output']>;
  tertiary?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  white?: Maybe<Scalars['String']['output']>;
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

export type Column = {
  __typename?: 'Column';
  column?: Maybe<Array<Maybe<ColumnColumnDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ColumnColumnDynamicZone = ComponentSectionsChart | ComponentSectionsRichText | ComponentSharedImage | ComponentSharedVideo | Error;

export type ColumnEntityResponseCollection = {
  __typename?: 'ColumnEntityResponseCollection';
  nodes: Array<Column>;
  pageInfo: Pagination;
};

export type ColumnFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ColumnFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ColumnFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ColumnFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ColumnInput = {
  column?: InputMaybe<Array<Scalars['ColumnColumnDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMetaMetadata = {
  __typename?: 'ComponentMetaMetadata';
  id: Scalars['ID']['output'];
  metaDescription: Scalars['String']['output'];
  metaTitle: Scalars['String']['output'];
};

export type ComponentSectionsAccordion = {
  __typename?: 'ComponentSectionsAccordion';
  CollapseLink?: Maybe<Link>;
  ExpandLink?: Maybe<Link>;
  Item?: Maybe<Array<Maybe<ComponentSharedAccordionItem>>>;
  Title?: Maybe<ComponentSharedHeading>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsAccordionItemArgs = {
  filters?: InputMaybe<ComponentSharedAccordionItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsBlocksGrid = {
  __typename?: 'ComponentSectionsBlocksGrid';
  Block?: Maybe<Array<Maybe<ComponentSharedGridBlock>>>;
  Theme?: Maybe<Theme>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsBlocksGridBlockArgs = {
  filters?: InputMaybe<ComponentSharedGridBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsCarousel = {
  __typename?: 'ComponentSectionsCarousel';
  CTA?: Maybe<ComponentSharedButton>;
  Elements: Array<Maybe<ComponentSharedImage>>;
  Name: Scalars['String']['output'];
  Title?: Maybe<ComponentSharedHeading>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsCarouselElementsArgs = {
  filters?: InputMaybe<ComponentSharedImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsChart = {
  __typename?: 'ComponentSectionsChart';
  Outline?: Maybe<Scalars['Boolean']['output']>;
  Title?: Maybe<Title>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsColumns = {
  __typename?: 'ComponentSectionsColumns';
  Articles: Array<Maybe<Article>>;
  Articles_connection?: Maybe<ArticleRelationResponseCollection>;
  CTA?: Maybe<ComponentSharedButton>;
  Heading?: Maybe<ComponentSharedHeading>;
  ShowWave: Scalars['Boolean']['output'];
  Theme?: Maybe<Theme>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsColumnsArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSectionsColumnsArticles_ConnectionArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsColumnsWithTabs = {
  __typename?: 'ComponentSectionsColumnsWithTabs';
  CTA?: Maybe<ComponentSharedButton>;
  Description?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  MaxCardsToDisplay?: Maybe<Scalars['Int']['output']>;
  TabTheme?: Maybe<TabTheme>;
  Tabs: Array<Maybe<TabContainer>>;
  Tabs_connection?: Maybe<TabContainerRelationResponseCollection>;
  Theme?: Maybe<ComponentSharedColor>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsColumnsWithTabsTabsArgs = {
  filters?: InputMaybe<TabContainerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSectionsColumnsWithTabsTabs_ConnectionArgs = {
  filters?: InputMaybe<TabContainerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsContactBanner = {
  __typename?: 'ComponentSectionsContactBanner';
  Column?: Maybe<Array<Maybe<ComponentSharedContactColumn>>>;
  Theme?: Maybe<Theme>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsContactBannerColumnArgs = {
  filters?: InputMaybe<ComponentSharedContactColumnFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsEmailForm = {
  __typename?: 'ComponentSectionsEmailForm';
  Text?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Title>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsGetInTouchForm = {
  __typename?: 'ComponentSectionsGetInTouchForm';
  FormId?: Maybe<Scalars['String']['output']>;
  ShowWave: Scalars['Boolean']['output'];
  Text?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Title>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsHeroBanner = {
  __typename?: 'ComponentSectionsHeroBanner';
  CTA?: Maybe<ComponentSharedButton>;
  Image?: Maybe<UploadFile>;
  OverlayBlock?: Maybe<ComponentSharedOverlayBlock>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsImageBanner = {
  __typename?: 'ComponentSectionsImageBanner';
  Card?: Maybe<ComponentSharedImageCard>;
  Image?: Maybe<UploadFile>;
  Theme?: Maybe<Theme>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsInfoCardsTypeA = {
  __typename?: 'ComponentSectionsInfoCardsTypeA';
  Button?: Maybe<ComponentSharedButton>;
  Card?: Maybe<Array<Maybe<ComponentSharedNoodlesCard>>>;
  Text?: Maybe<Scalars['String']['output']>;
  Theme?: Maybe<Theme>;
  Title?: Maybe<Title>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsInfoCardsTypeACardArgs = {
  filters?: InputMaybe<ComponentSharedNoodlesCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsOverlayBlockTest = {
  __typename?: 'ComponentSectionsOverlayBlockTest';
  Theme?: Maybe<Theme>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsPersonellCards = {
  __typename?: 'ComponentSectionsPersonellCards';
  Card?: Maybe<Array<Maybe<ComponentSharedPersonellcard>>>;
  ShowWave: Scalars['Boolean']['output'];
  Title?: Maybe<ComponentSharedHeading>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsPersonellCardsCardArgs = {
  filters?: InputMaybe<ComponentSharedPersonellcardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsRichText = {
  __typename?: 'ComponentSectionsRichText';
  Content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsSecondaryBanner = {
  __typename?: 'ComponentSectionsSecondaryBanner';
  CTA1?: Maybe<ComponentSharedButton>;
  CTA2?: Maybe<ComponentSharedButton>;
  Image: ComponentSharedImage;
  Name: Scalars['String']['output'];
  Text?: Maybe<Scalars['String']['output']>;
  Theme?: Maybe<Theme>;
  Title?: Maybe<ComponentSharedHeading>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsTestimonials = {
  __typename?: 'ComponentSectionsTestimonials';
  Card?: Maybe<Array<Maybe<ComponentSharedTestimonialsCard>>>;
  ShowWave: Scalars['Boolean']['output'];
  Theme?: Maybe<Theme>;
  Title?: Maybe<Title>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsTestimonialsCardArgs = {
  filters?: InputMaybe<ComponentSharedTestimonialsCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsTimeline = {
  __typename?: 'ComponentSectionsTimeline';
  Card?: Maybe<Array<Maybe<ComponentSharedTimelineCard>>>;
  Heading?: Maybe<ComponentSharedHeading>;
  ShowWave: Scalars['Boolean']['output'];
  Theme?: Maybe<Theme>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsTimelineCardArgs = {
  filters?: InputMaybe<ComponentSharedTimelineCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsTopStripe = {
  __typename?: 'ComponentSectionsTopStripe';
  SocialMedia: Array<Maybe<SocialMedia>>;
  SocialMedia_connection?: Maybe<SocialMediaRelationResponseCollection>;
  Theme?: Maybe<Theme>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsTopStripeSocialMediaArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSectionsTopStripeSocialMedia_ConnectionArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsTopStripeInput = {
  SocialMedia?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  Theme?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSectionsTwoColumns = {
  __typename?: 'ComponentSectionsTwoColumns';
  Column?: Maybe<Column>;
  Ratio?: Maybe<Enum_Componentsectionstwocolumns_Ratio>;
  ShowWave: Scalars['Boolean']['output'];
  Theme?: Maybe<Theme>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsWaveBanner = {
  __typename?: 'ComponentSectionsWaveBanner';
  BackgroundColor: Enum_Componentsectionswavebanner_Backgroundcolor;
  CTA?: Maybe<ComponentSharedButton>;
  Direction?: Maybe<Enum_Componentsectionswavebanner_Direction>;
  Image?: Maybe<ComponentSharedImage>;
  IsLargeImage: Scalars['Boolean']['output'];
  IsTextBox: Scalars['Boolean']['output'];
  Name: Scalars['String']['output'];
  Text?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<ComponentSharedHeading>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsWaysToDonate = {
  __typename?: 'ComponentSectionsWaysToDonate';
  TabTheme?: Maybe<TabTheme>;
  Tabs: Array<Maybe<TabContainer>>;
  Tabs_connection?: Maybe<TabContainerRelationResponseCollection>;
  Theme?: Maybe<Theme>;
  Title?: Maybe<ComponentSharedHeading>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsWaysToDonateTabsArgs = {
  filters?: InputMaybe<TabContainerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSectionsWaysToDonateTabs_ConnectionArgs = {
  filters?: InputMaybe<TabContainerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedAccordionItem = {
  __typename?: 'ComponentSharedAccordionItem';
  Button?: Maybe<Button>;
  LongDescription?: Maybe<Scalars['String']['output']>;
  ShortDescription: Scalars['String']['output'];
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedAccordionItemFiltersInput = {
  Button?: InputMaybe<ButtonFiltersInput>;
  LongDescription?: InputMaybe<StringFilterInput>;
  ShortDescription?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedAccordionItemFiltersInput>>>;
  not?: InputMaybe<ComponentSharedAccordionItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedAccordionItemFiltersInput>>>;
};

export type ComponentSharedArticleCategory = {
  __typename?: 'ComponentSharedArticleCategory';
  articles: Array<Maybe<Article>>;
  articles_connection?: Maybe<ArticleRelationResponseCollection>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};


export type ComponentSharedArticleCategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedArticleCategoryArticles_ConnectionArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedButton = {
  __typename?: 'ComponentSharedButton';
  ButtonTheme?: Maybe<ButtonTheme>;
  Label?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Enum_Componentsharedbutton_Type>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedButtonInput = {
  ButtonTheme?: InputMaybe<Scalars['ID']['input']>;
  Label?: InputMaybe<Scalars['String']['input']>;
  Type?: InputMaybe<Enum_Componentsharedbutton_Type>;
  URL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedCard = {
  __typename?: 'ComponentSharedCard';
  Link?: Maybe<Button>;
  Text?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  qrCodeLink?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedColor = {
  __typename?: 'ComponentSharedColor';
  BgColor?: Maybe<Enum_Componentsharedcolor_Bgcolor>;
  Color?: Maybe<Enum_Componentsharedcolor_Color>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedColorInput = {
  BgColor?: InputMaybe<Enum_Componentsharedcolor_Bgcolor>;
  Color?: InputMaybe<Enum_Componentsharedcolor_Color>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedColumnCard = {
  __typename?: 'ComponentSharedColumnCard';
  Image?: Maybe<Image>;
  LinkText?: Maybe<Scalars['String']['output']>;
  LinkedPage?: Maybe<Article>;
  Text?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Title>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedContactColumn = {
  __typename?: 'ComponentSharedContactColumn';
  Label: Scalars['String']['output'];
  ShowWave: Scalars['Boolean']['output'];
  Text: Scalars['String']['output'];
  Title?: Maybe<Title>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedContactColumnFiltersInput = {
  Label?: InputMaybe<StringFilterInput>;
  ShowWave?: InputMaybe<BooleanFilterInput>;
  Text?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<TitleFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedContactColumnFiltersInput>>>;
  not?: InputMaybe<ComponentSharedContactColumnFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedContactColumnFiltersInput>>>;
};

export type ComponentSharedGridBlock = {
  __typename?: 'ComponentSharedGridBlock';
  Image?: Maybe<UploadFile>;
  Label?: Maybe<Scalars['String']['output']>;
  Open?: Maybe<Scalars['Boolean']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  Theme?: Maybe<Theme>;
  Title?: Maybe<Title>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedGridBlockFiltersInput = {
  Label?: InputMaybe<StringFilterInput>;
  Open?: InputMaybe<BooleanFilterInput>;
  Text?: InputMaybe<StringFilterInput>;
  Theme?: InputMaybe<ThemeFiltersInput>;
  Title?: InputMaybe<TitleFiltersInput>;
  URL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedGridBlockFiltersInput>>>;
  not?: InputMaybe<ComponentSharedGridBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedGridBlockFiltersInput>>>;
};

export type ComponentSharedHeading = {
  __typename?: 'ComponentSharedHeading';
  Alignment?: Maybe<Enum_Componentsharedheading_Alignment>;
  Level?: Maybe<Scalars['Int']['output']>;
  Title?: Maybe<Title>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedImage = {
  __typename?: 'ComponentSharedImage';
  AltText?: Maybe<Scalars['String']['output']>;
  Image?: Maybe<UploadFile>;
  IsIcon?: Maybe<Scalars['Boolean']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Open?: Maybe<Scalars['Boolean']['output']>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedImageCard = {
  __typename?: 'ComponentSharedImageCard';
  Label?: Maybe<Scalars['String']['output']>;
  LinkTitle?: Maybe<Scalars['String']['output']>;
  Open?: Maybe<Scalars['Boolean']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Title>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedImageFiltersInput = {
  AltText?: InputMaybe<StringFilterInput>;
  IsIcon?: InputMaybe<BooleanFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Open?: InputMaybe<BooleanFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedImageFiltersInput>>>;
  not?: InputMaybe<ComponentSharedImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedImageFiltersInput>>>;
};

export type ComponentSharedImageInput = {
  AltText?: InputMaybe<Scalars['String']['input']>;
  Image?: InputMaybe<Scalars['ID']['input']>;
  IsIcon?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Open?: InputMaybe<Scalars['Boolean']['input']>;
  URL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedLink = {
  __typename?: 'ComponentSharedLink';
  color?: Maybe<Enum_Componentsharedlink_Color>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
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
  CTA?: Maybe<Button>;
  Image?: Maybe<UploadFile>;
  Text?: Maybe<Scalars['String']['output']>;
  Theme?: Maybe<Theme>;
  Title?: Maybe<Title>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedNoodlesCardFiltersInput = {
  CTA?: InputMaybe<ButtonFiltersInput>;
  Text?: InputMaybe<StringFilterInput>;
  Theme?: InputMaybe<ThemeFiltersInput>;
  Title?: InputMaybe<TitleFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedNoodlesCardFiltersInput>>>;
  not?: InputMaybe<ComponentSharedNoodlesCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedNoodlesCardFiltersInput>>>;
};

export type ComponentSharedOverlayBlock = {
  __typename?: 'ComponentSharedOverlayBlock';
  Text?: Maybe<Scalars['String']['output']>;
  Theme?: Maybe<Theme>;
  Title?: Maybe<Title>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedPersonellcard = {
  __typename?: 'ComponentSharedPersonellcard';
  Image?: Maybe<Image>;
  SocialMedias: Array<Maybe<SocialMedia>>;
  SocialMedias_connection?: Maybe<SocialMediaRelationResponseCollection>;
  Text: Scalars['String']['output'];
  Theme?: Maybe<Theme>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentSharedPersonellcardSocialMediasArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedPersonellcardSocialMedias_ConnectionArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedPersonellcardFiltersInput = {
  Image?: InputMaybe<ImageFiltersInput>;
  SocialMedias?: InputMaybe<SocialMediaFiltersInput>;
  Text?: InputMaybe<StringFilterInput>;
  Theme?: InputMaybe<ThemeFiltersInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedPersonellcardFiltersInput>>>;
  not?: InputMaybe<ComponentSharedPersonellcardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedPersonellcardFiltersInput>>>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFile>;
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

export type ComponentSharedTestimonialsCard = {
  __typename?: 'ComponentSharedTestimonialsCard';
  Author?: Maybe<Scalars['String']['output']>;
  Icon: Array<Maybe<UploadFile>>;
  Icon_connection?: Maybe<UploadFileRelationResponseCollection>;
  Text: Scalars['String']['output'];
  Theme?: Maybe<Theme>;
  Title?: Maybe<Title>;
  id: Scalars['ID']['output'];
};


export type ComponentSharedTestimonialsCardIconArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedTestimonialsCardIcon_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedTestimonialsCardFiltersInput = {
  Author?: InputMaybe<StringFilterInput>;
  Text?: InputMaybe<StringFilterInput>;
  Theme?: InputMaybe<ThemeFiltersInput>;
  Title?: InputMaybe<TitleFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedTestimonialsCardFiltersInput>>>;
  not?: InputMaybe<ComponentSharedTestimonialsCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedTestimonialsCardFiltersInput>>>;
};

export type ComponentSharedTimelineCard = {
  __typename?: 'ComponentSharedTimelineCard';
  Image?: Maybe<Image>;
  Text: Scalars['String']['output'];
  Theme?: Maybe<Theme>;
  Title?: Maybe<Title>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedTimelineCardFiltersInput = {
  Image?: InputMaybe<ImageFiltersInput>;
  Text?: InputMaybe<StringFilterInput>;
  Theme?: InputMaybe<ThemeFiltersInput>;
  Title?: InputMaybe<TitleFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedTimelineCardFiltersInput>>>;
  not?: InputMaybe<ComponentSharedTimelineCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedTimelineCardFiltersInput>>>;
};

export type ComponentSharedVideo = {
  __typename?: 'ComponentSharedVideo';
  altText?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  video?: Maybe<UploadFile>;
};

export type ComponentSharedWave = {
  __typename?: 'ComponentSharedWave';
  bgColor?: Maybe<Enum_Componentsharedwave_Bgcolor>;
  direction?: Maybe<Enum_Componentsharedwave_Direction>;
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

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type Enum_Buttontheme_Backgrondcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Buttontheme_Fontcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Buttontheme_Outlinecolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Button_Type =
  | 'form'
  | 'inverted'
  | 'main'
  | 'nav'
  | 'outline';

export type Enum_Componentsectionstwocolumns_Ratio =
  | 'one_one'
  | 'two_one';

export type Enum_Componentsectionswavebanner_Backgroundcolor =
  | 'primary'
  | 'secondary'
  | 'tertiary';

export type Enum_Componentsectionswavebanner_Direction =
  | 'ltr'
  | 'rtl';

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

export type Enum_Componentsharedheading_Alignment =
  | 'center'
  | 'left';

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

export type Enum_Componentsharedwave_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Componentsharedwave_Direction =
  | 'ltr'
  | 'rtl';

export type Enum_Tabtheme_Activebgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Tabtheme_Activebordercolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Tabtheme_Activecolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Tabtheme_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Tabtheme_Bordercolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Tabtheme_Color =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Theme_Bgcolor =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Theme_Color =
  | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';

export type Enum_Title_Headinglevel =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

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
  documentId: Scalars['ID']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Footer>>;
  localizations_connection?: Maybe<FooterRelationResponseCollection>;
  navigation: Array<Maybe<Page>>;
  navigation_connection?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rights?: Maybe<Scalars['String']['output']>;
  socialMedias: Array<Maybe<SocialMedia>>;
  socialMedias_connection?: Maybe<SocialMediaRelationResponseCollection>;
  theme?: Maybe<ComponentSharedColor>;
  tradeMark?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FooterNavigationArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FooterNavigation_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FooterSocialMediasArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FooterSocialMedias_ConnectionArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  navigation?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rights?: InputMaybe<Scalars['String']['input']>;
  socialMedias?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  theme?: InputMaybe<ComponentSharedColorInput>;
  tradeMark?: InputMaybe<Scalars['String']['input']>;
};

export type FooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  nodes: Array<Footer>;
};

export type GenericMorph = Article | Button | ButtonTheme | Category | ColorScheme | Column | ComponentMetaMetadata | ComponentSectionsAccordion | ComponentSectionsBlocksGrid | ComponentSectionsCarousel | ComponentSectionsChart | ComponentSectionsColumns | ComponentSectionsColumnsWithTabs | ComponentSectionsContactBanner | ComponentSectionsEmailForm | ComponentSectionsGetInTouchForm | ComponentSectionsHeroBanner | ComponentSectionsImageBanner | ComponentSectionsInfoCardsTypeA | ComponentSectionsOverlayBlockTest | ComponentSectionsPersonellCards | ComponentSectionsRichText | ComponentSectionsSecondaryBanner | ComponentSectionsTestimonials | ComponentSectionsTimeline | ComponentSectionsTopStripe | ComponentSectionsTwoColumns | ComponentSectionsWaveBanner | ComponentSectionsWaysToDonate | ComponentSharedAccordionItem | ComponentSharedArticleCategory | ComponentSharedButton | ComponentSharedCard | ComponentSharedColor | ComponentSharedColumnCard | ComponentSharedContactColumn | ComponentSharedGridBlock | ComponentSharedHeading | ComponentSharedImage | ComponentSharedImageCard | ComponentSharedLink | ComponentSharedMetaSocial | ComponentSharedNoodlesCard | ComponentSharedOverlayBlock | ComponentSharedPersonellcard | ComponentSharedSeo | ComponentSharedTestimonialsCard | ComponentSharedTimelineCard | ComponentSharedVideo | ComponentSharedWave | Footer | Header | I18NLocale | Image | Link | Page | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | SocialMedia | TabContainer | TabTheme | Theme | Title | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Header = {
  __typename?: 'Header';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cta?: Maybe<ComponentSharedButton>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Header>>;
  localizations_connection?: Maybe<HeaderRelationResponseCollection>;
  logo?: Maybe<ComponentSharedImage>;
  navigations: Array<Maybe<Category>>;
  navigations_connection?: Maybe<CategoryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stripe?: Maybe<ComponentSectionsTopStripe>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HeaderNavigationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HeaderNavigations_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  nodes: Array<Header>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
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

export type Image = {
  __typename?: 'Image';
  altText?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  isIcon?: Maybe<Scalars['Boolean']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ImageEntityResponseCollection = {
  __typename?: 'ImageEntityResponseCollection';
  nodes: Array<Image>;
  pageInfo: Pagination;
};

export type ImageFiltersInput = {
  altText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ImageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  isIcon?: InputMaybe<BooleanFilterInput>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ImageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ImageInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  isIcon?: InputMaybe<Scalars['Boolean']['input']>;
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
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

export type Link = {
  __typename?: 'Link';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  theme?: Maybe<Theme>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type LinkEntityResponseCollection = {
  __typename?: 'LinkEntityResponseCollection';
  nodes: Array<Link>;
  pageInfo: Pagination;
};

export type LinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LinkFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LinkFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  theme?: InputMaybe<ThemeFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type LinkInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  theme?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<Article>;
  createButton?: Maybe<Button>;
  createButtonTheme?: Maybe<ButtonTheme>;
  createCategory?: Maybe<Category>;
  createColumn?: Maybe<Column>;
  createImage?: Maybe<Image>;
  createLink?: Maybe<Link>;
  createPage?: Maybe<Page>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  createSocialMedia?: Maybe<SocialMedia>;
  createTabContainer?: Maybe<TabContainer>;
  createTabTheme?: Maybe<TabTheme>;
  createTheme?: Maybe<Theme>;
  createTitle?: Maybe<Title>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<DeleteMutationResponse>;
  deleteButton?: Maybe<DeleteMutationResponse>;
  deleteButtonTheme?: Maybe<DeleteMutationResponse>;
  deleteCategory?: Maybe<DeleteMutationResponse>;
  deleteColorScheme?: Maybe<DeleteMutationResponse>;
  deleteColumn?: Maybe<DeleteMutationResponse>;
  deleteFooter?: Maybe<DeleteMutationResponse>;
  deleteHeader?: Maybe<DeleteMutationResponse>;
  deleteImage?: Maybe<DeleteMutationResponse>;
  deleteLink?: Maybe<DeleteMutationResponse>;
  deletePage?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteSocialMedia?: Maybe<DeleteMutationResponse>;
  deleteTabContainer?: Maybe<DeleteMutationResponse>;
  deleteTabTheme?: Maybe<DeleteMutationResponse>;
  deleteTheme?: Maybe<DeleteMutationResponse>;
  deleteTitle?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<Article>;
  updateButton?: Maybe<Button>;
  updateButtonTheme?: Maybe<ButtonTheme>;
  updateCategory?: Maybe<Category>;
  updateColorScheme?: Maybe<ColorScheme>;
  updateColumn?: Maybe<Column>;
  updateFooter?: Maybe<Footer>;
  updateHeader?: Maybe<Header>;
  updateImage?: Maybe<Image>;
  updateLink?: Maybe<Link>;
  updatePage?: Maybe<Page>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateSocialMedia?: Maybe<SocialMedia>;
  updateTabContainer?: Maybe<TabContainer>;
  updateTabTheme?: Maybe<TabTheme>;
  updateTheme?: Maybe<Theme>;
  updateTitle?: Maybe<Title>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateButtonArgs = {
  data: ButtonInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateButtonThemeArgs = {
  data: ButtonThemeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateColumnArgs = {
  data: ColumnInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateImageArgs = {
  data: ImageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateLinkArgs = {
  data: LinkInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateSocialMediaArgs = {
  data: SocialMediaInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateTabContainerArgs = {
  data: TabContainerInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateTabThemeArgs = {
  data: TabThemeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateThemeArgs = {
  data: ThemeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateTitleArgs = {
  data: TitleInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteArticleArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteButtonArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteButtonThemeArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteColumnArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteImageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteLinkArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePageArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteSocialMediaArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteTabContainerArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTabThemeArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteThemeArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteTitleArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
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


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateButtonArgs = {
  data: ButtonInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateButtonThemeArgs = {
  data: ButtonThemeInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateColorSchemeArgs = {
  data: ColorSchemeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateColumnArgs = {
  data: ColumnInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateImageArgs = {
  data: ImageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateLinkArgs = {
  data: LinkInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateSocialMediaArgs = {
  data: SocialMediaInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTabContainerArgs = {
  data: TabContainerInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTabThemeArgs = {
  data: TabThemeInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateThemeArgs = {
  data: ThemeInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTitleArgs = {
  data: TitleInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type Page = {
  __typename?: 'Page';
  Category?: Maybe<Category>;
  PageSections?: Maybe<Array<Maybe<PagePageSectionsDynamicZone>>>;
  Slug?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Page>>;
  localizations_connection?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PageLocalizations_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  nodes: Array<Page>;
  pageInfo: Pagination;
};

export type PageFiltersInput = {
  Category?: InputMaybe<CategoryFiltersInput>;
  Slug?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  Category?: InputMaybe<Scalars['ID']['input']>;
  PageSections?: InputMaybe<Array<Scalars['PagePageSectionsDynamicZoneInput']['input']>>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PagePageSectionsDynamicZone = ComponentSectionsAccordion | ComponentSectionsBlocksGrid | ComponentSectionsCarousel | ComponentSectionsChart | ComponentSectionsColumns | ComponentSectionsColumnsWithTabs | ComponentSectionsContactBanner | ComponentSectionsEmailForm | ComponentSectionsGetInTouchForm | ComponentSectionsHeroBanner | ComponentSectionsImageBanner | ComponentSectionsInfoCardsTypeA | ComponentSectionsOverlayBlockTest | ComponentSectionsPersonellCards | ComponentSectionsRichText | ComponentSectionsSecondaryBanner | ComponentSectionsTestimonials | ComponentSectionsTimeline | ComponentSectionsTopStripe | ComponentSectionsTwoColumns | ComponentSectionsWaveBanner | ComponentSectionsWaysToDonate | Error;

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  nodes: Array<Page>;
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

export type PublicationStatus =
  | 'DRAFT'
  | 'PUBLISHED';

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles: Array<Maybe<Article>>;
  articles_connection?: Maybe<ArticleEntityResponseCollection>;
  button?: Maybe<Button>;
  buttonTheme?: Maybe<ButtonTheme>;
  buttonThemes: Array<Maybe<ButtonTheme>>;
  buttonThemes_connection?: Maybe<ButtonThemeEntityResponseCollection>;
  buttons: Array<Maybe<Button>>;
  buttons_connection?: Maybe<ButtonEntityResponseCollection>;
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<Category>;
  colorScheme?: Maybe<ColorScheme>;
  column?: Maybe<Column>;
  columns: Array<Maybe<Column>>;
  columns_connection?: Maybe<ColumnEntityResponseCollection>;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  image?: Maybe<Image>;
  images: Array<Maybe<Image>>;
  images_connection?: Maybe<ImageEntityResponseCollection>;
  link?: Maybe<Link>;
  links: Array<Maybe<Link>>;
  links_connection?: Maybe<LinkEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  page?: Maybe<Page>;
  pages: Array<Maybe<Page>>;
  pages_connection?: Maybe<PageEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  socialMedia?: Maybe<SocialMedia>;
  socialMedias: Array<Maybe<SocialMedia>>;
  socialMedias_connection?: Maybe<SocialMediaEntityResponseCollection>;
  tabContainer?: Maybe<TabContainer>;
  tabContainers: Array<Maybe<TabContainer>>;
  tabContainers_connection?: Maybe<TabContainerEntityResponseCollection>;
  tabTheme?: Maybe<TabTheme>;
  tabThemes: Array<Maybe<TabTheme>>;
  tabThemes_connection?: Maybe<TabThemeEntityResponseCollection>;
  theme?: Maybe<Theme>;
  themes: Array<Maybe<Theme>>;
  themes_connection?: Maybe<ThemeEntityResponseCollection>;
  title?: Maybe<Title>;
  titles: Array<Maybe<Title>>;
  titles_connection?: Maybe<TitleEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryArticleArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryArticles_ConnectionArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryButtonArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryButtonThemeArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryButtonThemesArgs = {
  filters?: InputMaybe<ButtonThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryButtonThemes_ConnectionArgs = {
  filters?: InputMaybe<ButtonThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryButtonsArgs = {
  filters?: InputMaybe<ButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryButtons_ConnectionArgs = {
  filters?: InputMaybe<ButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoryArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryColorSchemeArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryColumnArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryColumnsArgs = {
  filters?: InputMaybe<ColumnFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryColumns_ConnectionArgs = {
  filters?: InputMaybe<ColumnFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryImageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryImagesArgs = {
  filters?: InputMaybe<ImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryImages_ConnectionArgs = {
  filters?: InputMaybe<ImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLinkArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLinksArgs = {
  filters?: InputMaybe<LinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLinks_ConnectionArgs = {
  filters?: InputMaybe<LinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPageArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPages_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySocialMediaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySocialMediasArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySocialMedias_ConnectionArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTabContainerArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTabContainersArgs = {
  filters?: InputMaybe<TabContainerFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTabContainers_ConnectionArgs = {
  filters?: InputMaybe<TabContainerFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTabThemeArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTabThemesArgs = {
  filters?: InputMaybe<TabThemeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTabThemes_ConnectionArgs = {
  filters?: InputMaybe<TabThemeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryThemeArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryThemesArgs = {
  filters?: InputMaybe<ThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryThemes_ConnectionArgs = {
  filters?: InputMaybe<ThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTitleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTitlesArgs = {
  filters?: InputMaybe<TitleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTitles_ConnectionArgs = {
  filters?: InputMaybe<TitleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type SocialMedia = {
  __typename?: 'SocialMedia';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  image?: Maybe<Image>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
  theme?: Maybe<Theme>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SocialMediaEntityResponseCollection = {
  __typename?: 'SocialMediaEntityResponseCollection';
  nodes: Array<SocialMedia>;
  pageInfo: Pagination;
};

export type SocialMediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SocialMediaFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  image?: InputMaybe<ImageFiltersInput>;
  not?: InputMaybe<SocialMediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SocialMediaFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  theme?: InputMaybe<ThemeFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type SocialMediaInput = {
  image?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialMediaRelationResponseCollection = {
  __typename?: 'SocialMediaRelationResponseCollection';
  nodes: Array<SocialMedia>;
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

export type TabContainer = {
  __typename?: 'TabContainer';
  Description?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Title>;
  content: Array<Maybe<TabContainerContentDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<TabContainer>>;
  localizations_connection?: Maybe<TabContainerRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TabContainerLocalizationsArgs = {
  filters?: InputMaybe<TabContainerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TabContainerLocalizations_ConnectionArgs = {
  filters?: InputMaybe<TabContainerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TabContainerContentDynamicZone = ComponentSharedArticleCategory | ComponentSharedCard | Error;

export type TabContainerEntityResponseCollection = {
  __typename?: 'TabContainerEntityResponseCollection';
  nodes: Array<TabContainer>;
  pageInfo: Pagination;
};

export type TabContainerFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Label?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<TitleFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<TabContainerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TabContainerFiltersInput>;
  not?: InputMaybe<TabContainerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TabContainerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TabContainerInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Label?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Array<Scalars['TabContainerContentDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TabContainerRelationResponseCollection = {
  __typename?: 'TabContainerRelationResponseCollection';
  nodes: Array<TabContainer>;
};

export type TabTheme = {
  __typename?: 'TabTheme';
  ActiveBgColor?: Maybe<Enum_Tabtheme_Activebgcolor>;
  ActiveBorderColor?: Maybe<Enum_Tabtheme_Activebordercolor>;
  ActiveColor?: Maybe<Enum_Tabtheme_Activecolor>;
  BgColor?: Maybe<Enum_Tabtheme_Bgcolor>;
  BorderColor?: Maybe<Enum_Tabtheme_Bordercolor>;
  Color?: Maybe<Enum_Tabtheme_Color>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<TabTheme>>;
  localizations_connection?: Maybe<TabThemeRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TabThemeLocalizationsArgs = {
  filters?: InputMaybe<TabThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TabThemeLocalizations_ConnectionArgs = {
  filters?: InputMaybe<TabThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TabThemeEntityResponseCollection = {
  __typename?: 'TabThemeEntityResponseCollection';
  nodes: Array<TabTheme>;
  pageInfo: Pagination;
};

export type TabThemeFiltersInput = {
  ActiveBgColor?: InputMaybe<StringFilterInput>;
  ActiveBorderColor?: InputMaybe<StringFilterInput>;
  ActiveColor?: InputMaybe<StringFilterInput>;
  BgColor?: InputMaybe<StringFilterInput>;
  BorderColor?: InputMaybe<StringFilterInput>;
  Color?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TabThemeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TabThemeFiltersInput>;
  not?: InputMaybe<TabThemeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TabThemeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TabThemeInput = {
  ActiveBgColor?: InputMaybe<Enum_Tabtheme_Activebgcolor>;
  ActiveBorderColor?: InputMaybe<Enum_Tabtheme_Activebordercolor>;
  ActiveColor?: InputMaybe<Enum_Tabtheme_Activecolor>;
  BgColor?: InputMaybe<Enum_Tabtheme_Bgcolor>;
  BorderColor?: InputMaybe<Enum_Tabtheme_Bordercolor>;
  Color?: InputMaybe<Enum_Tabtheme_Color>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TabThemeRelationResponseCollection = {
  __typename?: 'TabThemeRelationResponseCollection';
  nodes: Array<TabTheme>;
};

export type Theme = {
  __typename?: 'Theme';
  bgColor?: Maybe<Enum_Theme_Bgcolor>;
  color?: Maybe<Enum_Theme_Color>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ThemeEntityResponseCollection = {
  __typename?: 'ThemeEntityResponseCollection';
  nodes: Array<Theme>;
  pageInfo: Pagination;
};

export type ThemeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ThemeFiltersInput>>>;
  bgColor?: InputMaybe<StringFilterInput>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ThemeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ThemeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ThemeInput = {
  bgColor?: InputMaybe<Enum_Theme_Bgcolor>;
  color?: InputMaybe<Enum_Theme_Color>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Title = {
  __typename?: 'Title';
  HeadingLevel?: Maybe<Enum_Title_Headinglevel>;
  Title?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TitleEntityResponseCollection = {
  __typename?: 'TitleEntityResponseCollection';
  nodes: Array<Title>;
  pageInfo: Pagination;
};

export type TitleFiltersInput = {
  HeadingLevel?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TitleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TitleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TitleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TitleInput = {
  HeadingLevel?: InputMaybe<Enum_Title_Headinglevel>;
  Title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<UploadFile>;
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
  documentId: Scalars['ID']['output'];
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
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
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
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};

export type NewArticlesFragment = { __typename?: 'ComponentSharedArticleCategory', articles: Array<{ __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'UploadFile', url: string } | null } | null> };

export type CategorizedNewsFragmentFragment = { __typename: 'ComponentSectionsColumnsWithTabs', Description?: string | null, Label?: string | null, MaxCardsToDisplay?: number | null, id: string, TabTheme?: { __typename?: 'TabTheme', ActiveBgColor?: Enum_Tabtheme_Activebgcolor | null, ActiveBorderColor?: Enum_Tabtheme_Activebordercolor | null, ActiveColor?: Enum_Tabtheme_Activecolor | null, BgColor?: Enum_Tabtheme_Bgcolor | null, BorderColor?: Enum_Tabtheme_Bordercolor | null, Color?: Enum_Tabtheme_Color | null } | null, Tabs: Array<{ __typename?: 'TabContainer', documentId: string, Label?: string | null, Description?: string | null, Title?: { __typename?: 'Title', HeadingLevel?: Enum_Title_Headinglevel | null, Title?: string | null } | null, content: Array<{ __typename?: 'ComponentSharedArticleCategory', id: string, slug?: string | null, label?: string | null, description?: string | null, articles: Array<{ __typename?: 'Article', content?: string | null, documentId: string, excerpt?: string | null, slug: string, title?: string | null, locale?: string | null, featuredImage?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, documentId: string, url: string } | null, theme?: { __typename?: 'Theme', title?: string | null, documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null> } | { __typename?: 'ComponentSharedCard' } | { __typename?: 'Error' } | null> } | null>, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonTheme', documentId: string, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null, Theme?: { __typename?: 'ComponentSharedColor', Color?: Enum_Componentsharedcolor_Color | null, BgColor?: Enum_Componentsharedcolor_Bgcolor | null } | null };

export type ContactBannerFragmentFragment = { __typename?: 'ComponentSectionsContactBanner', id: string, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null, columns?: Array<{ __typename?: 'ComponentSharedContactColumn', id: string, Text: string, Label: string, ShowWave: boolean, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null> | null };

export type DataGraphFragmentFragment = { __typename?: 'ComponentSectionsChart', id: string, Outline?: boolean | null, URL?: string | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null };

export type ExpandableSectionFragmentFragment = { __typename?: 'ComponentSectionsAccordion', id: string, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null, ExpandLink?: { __typename?: 'Link', documentId: string, title?: string | null, url?: string | null, theme?: { __typename?: 'Theme', documentId: string, bgColor?: Enum_Theme_Bgcolor | null, color?: Enum_Theme_Color | null } | null } | null, CollapseLink?: { __typename?: 'Link', documentId: string, title?: string | null, url?: string | null, theme?: { __typename?: 'Theme', documentId: string, bgColor?: Enum_Theme_Bgcolor | null, color?: Enum_Theme_Color | null } | null } | null, Item?: Array<{ __typename?: 'ComponentSharedAccordionItem', id: string, Title?: string | null, LongDescription?: string | null, ShortDescription: string, Button?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, buttonTheme?: { __typename?: 'ButtonTheme', documentId: string, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null } | null } | null } | null> | null };

export type GetInTouchFragmentFragment = { __typename?: 'ComponentSectionsGetInTouchForm', id: string, Text?: string | null, ShowWave: boolean, FormId?: string | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null };

export type HeroBannerFragmentFragment = { __typename: 'ComponentSectionsHeroBanner', id: string, Image?: { __typename?: 'UploadFile', url: string } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, URL?: string | null, Type?: Enum_Componentsharedbutton_Type | null, ButtonTheme?: { __typename?: 'ButtonTheme', documentId: string, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null, OverlayBlock?: { __typename?: 'ComponentSharedOverlayBlock', id: string, Text?: string | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null };

export type ImageBannerFragmentFragment = { __typename: 'ComponentSectionsImageBanner', id: string, imageCard?: { __typename?: 'ComponentSharedImageCard', id: string, Text?: string | null, Label?: string | null, URL?: string | null, LinkTitle?: string | null, Open?: boolean | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null, Image?: { __typename?: 'UploadFile', url: string } | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null };

export type InfoSectionFragmentFragment = { __typename: 'ComponentSectionsInfoCardsTypeA', id: string, Text?: string | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null, infoCard?: Array<{ __typename?: 'ComponentSharedNoodlesCard', id: string, Text?: string | null, Image?: { __typename?: 'UploadFile', url: string } | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null, CTA?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, url?: string | null, buttonTheme?: { __typename?: 'ButtonTheme', documentId: string, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null } | null } | null } | null> | null, Button?: { __typename?: 'ComponentSharedButton', Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonTheme', documentId: string, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null };

export type NewsSectionFragmentFragment = { __typename: 'ComponentSectionsColumns', id: string, ShowWave: boolean, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Alignment?: Enum_Componentsharedheading_Alignment | null, Level?: number | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonTheme', documentId: string, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null, Articles: Array<{ __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, content?: string | null, featuredImage?: { __typename?: 'UploadFile', url: string } | null } | null>, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null };

export type PartnersSectionFragmentFragment = { __typename?: 'ComponentSectionsCarousel', id: string, Name: string, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonTheme', documentId: string, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null, Elements: Array<{ __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null> };

export type PersonelSectionFragmentFragment = { __typename?: 'ComponentSectionsPersonellCards', id: string, ShowWave: boolean, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null, personelCard?: Array<{ __typename?: 'ComponentSharedPersonellcard', id: string, Title?: string | null, Text: string, Image?: { __typename?: 'Image', altText?: string | null, url?: string | null, isIcon?: boolean | null, newTab?: boolean | null, image?: { __typename?: 'UploadFile', alternativeText?: string | null, name: string, caption?: string | null, url: string } | null } | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null> | null };

export type ProjectsSectionFragmentFragment = { __typename: 'ComponentSectionsBlocksGrid', id: string, blockHeading?: string | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null, Block?: Array<{ __typename?: 'ComponentSharedGridBlock', id: string, Text?: string | null, Label?: string | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFile', url: string } | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null> | null };

export type RichTextFragmentFragment = { __typename: 'ComponentSectionsRichText', id: string, Content?: string | null };

export type SecondaryBannerFragmentFragment = { __typename?: 'ComponentSectionsSecondaryBanner', Name: string, Text?: string | null, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null, bannerImage: { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null }, CTA1?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonTheme', documentId: string, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null, CTA2?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonTheme', documentId: string, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null };

export type SubscriptionFormFragmentFragment = { __typename?: 'ComponentSectionsEmailForm', id: string, Text?: string | null, URL?: string | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null };

export type TestimonialsSectionFragmentFragment = { __typename?: 'ComponentSectionsTestimonials', id: string, ShowWave: boolean, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null, Card?: Array<{ __typename?: 'ComponentSharedTestimonialsCard', id: string, Text: string, Author?: string | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null, Icon: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, name: string, caption?: string | null, url: string } | null>, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null> | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null };

export type TimelineSectionFragmentFragment = { __typename?: 'ComponentSectionsTimeline', id: string, ShowWave: boolean, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null, timelineCard?: Array<{ __typename?: 'ComponentSharedTimelineCard', id: string, Text: string, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null, Image?: { __typename?: 'Image', altText?: string | null, isIcon?: boolean | null, url?: string | null, newTab?: boolean | null, image?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, url: string } | null } | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null> | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null };

export type TwoColumnsFragmentFragment = { __typename?: 'ComponentSectionsTwoColumns', id: string, Ratio?: Enum_Componentsectionstwocolumns_Ratio | null, Theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null, Column?: { __typename?: 'Column', title?: string | null, column?: Array<(
      { __typename?: 'ComponentSectionsChart' }
      & TwoColumnsChartFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsRichText' }
      & TwoColumnsRichTextFragmentFragment
    ) | (
      { __typename?: 'ComponentSharedImage' }
      & TwoColumnsImageFragmentFragment
    ) | (
      { __typename?: 'ComponentSharedVideo' }
      & TwoColumnsVideoFragmentFragment
    ) | { __typename?: 'Error' } | null> | null } | null };

export type TwoColumnsChartFragmentFragment = { __typename?: 'ComponentSectionsChart', id: string, Outline?: boolean | null, URL?: string | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null };

export type TwoColumnsImageFragmentFragment = { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null };

export type TwoColumnsRichTextFragmentFragment = { __typename?: 'ComponentSectionsRichText', id: string, Content?: string | null };

export type TwoColumnsVideoFragmentFragment = { __typename?: 'ComponentSharedVideo', id: string, altText?: string | null, video?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null, cover?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null };

export type WaveBannerFragmentFragment = { __typename?: 'ComponentSectionsWaveBanner', Name: string, IsLargeImage: boolean, Text?: string | null, BackgroundColor: Enum_Componentsectionswavebanner_Backgroundcolor, IsTextBox: boolean, Image?: { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'Title', documentId: string, Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonTheme', documentId: string, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null };

export type WaysToDonateFragmentFragment = { __typename?: 'ComponentSectionsWaysToDonate', TabTheme?: { __typename?: 'TabTheme', ActiveBgColor?: Enum_Tabtheme_Activebgcolor | null, ActiveBorderColor?: Enum_Tabtheme_Activebordercolor | null, ActiveColor?: Enum_Tabtheme_Activecolor | null, BgColor?: Enum_Tabtheme_Bgcolor | null, BorderColor?: Enum_Tabtheme_Bordercolor | null, Color?: Enum_Tabtheme_Color | null } | null, heading?: { __typename?: 'ComponentSharedHeading', id: string, Alignment?: Enum_Componentsharedheading_Alignment | null, Level?: number | null, Title?: { __typename?: 'Title', HeadingLevel?: Enum_Title_Headinglevel | null, Title?: string | null, documentId: string } | null } | null, Tabs: Array<{ __typename?: 'TabContainer', Label?: string | null, Description?: string | null, documentId: string, content: Array<{ __typename?: 'ComponentSharedArticleCategory' } | { __typename?: 'ComponentSharedCard', Title?: string | null, Text?: string | null, qrCodeLink?: string | null, Link?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, url?: string | null } | null } | { __typename?: 'Error' } | null> } | null>, Theme?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null };

export type GetLayoutDataQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetLayoutDataQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', documentId: string, Slug?: string | null } | null>, colorScheme?: { __typename?: 'ColorScheme', documentId: string, white?: string | null, black?: string | null, background?: string | null, primary?: string | null, secondary?: string | null, tertiary?: string | null, quaternary?: string | null, quinary?: string | null } | null, header?: { __typename?: 'Header', logo?: { __typename?: 'ComponentSharedImage', AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null, cta?: { __typename?: 'ComponentSharedButton', Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, Label?: string | null, ButtonTheme?: { __typename?: 'ButtonTheme', documentId: string, FontColor?: Enum_Buttontheme_Fontcolor | null, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null } | null } | null, stripe?: { __typename?: 'ComponentSectionsTopStripe', SocialMedia: Array<{ __typename?: 'SocialMedia', documentId: string, title?: string | null, text: string, type?: string | null, url?: string | null, theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null>, Theme?: { __typename?: 'Theme', documentId: string, bgColor?: Enum_Theme_Bgcolor | null, color?: Enum_Theme_Color | null } | null } | null, navigations: Array<{ __typename?: 'Category', documentId: string, slug?: string | null, label?: string | null, description?: string | null, pages: Array<{ __typename?: 'Page', documentId: string, Slug?: string | null, Title?: string | null } | null> } | null> } | null, footer?: { __typename?: 'Footer', heading?: string | null, tradeMark?: string | null, rights?: string | null, theme?: { __typename?: 'ComponentSharedColor', Color?: Enum_Componentsharedcolor_Color | null, BgColor?: Enum_Componentsharedcolor_Bgcolor | null } | null, socialMedias: Array<{ __typename?: 'SocialMedia', documentId: string, text: string, title?: string | null, type?: string | null, url?: string | null, theme?: { __typename?: 'Theme', documentId: string, color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null>, navigation: Array<{ __typename?: 'Page', documentId: string, Slug?: string | null, Title?: string | null } | null> } | null };

export type GetNewsByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetNewsByCategoryQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'UploadFile', url: string } | null } | null> };

export type GetPageDataQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPageDataQuery = { __typename?: 'Query', page?: { __typename?: 'Page', Slug?: string | null, Title?: string | null, locale?: string | null, PageSections?: Array<(
      { __typename?: 'ComponentSectionsAccordion' }
      & ExpandableSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsBlocksGrid' }
      & ProjectsSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsCarousel' }
      & PartnersSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsChart' }
      & DataGraphFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsColumns' }
      & NewsSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsColumnsWithTabs' }
      & CategorizedNewsFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsContactBanner' }
      & ContactBannerFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsEmailForm' }
      & SubscriptionFormFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsGetInTouchForm' }
      & GetInTouchFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsHeroBanner' }
      & HeroBannerFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsImageBanner' }
      & ImageBannerFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsInfoCardsTypeA' }
      & InfoSectionFragmentFragment
    ) | { __typename?: 'ComponentSectionsOverlayBlockTest' } | (
      { __typename?: 'ComponentSectionsPersonellCards' }
      & PersonelSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsRichText' }
      & RichTextFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsSecondaryBanner' }
      & SecondaryBannerFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsTestimonials' }
      & TestimonialsSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsTimeline' }
      & TimelineSectionFragmentFragment
    ) | { __typename?: 'ComponentSectionsTopStripe' } | (
      { __typename?: 'ComponentSectionsTwoColumns' }
      & TwoColumnsFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsWaveBanner' }
      & WaveBannerFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsWaysToDonate' }
      & WaysToDonateFragmentFragment
    ) | { __typename?: 'Error' } | null> | null } | null };

export type GetPage1DataQueryVariables = Exact<{
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
}>;


export type GetPage1DataQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', Title?: string | null, Slug?: string | null, PageSections?: Array<(
      { __typename?: 'ComponentSectionsAccordion' }
      & ExpandableSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsBlocksGrid' }
      & ProjectsSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsCarousel' }
      & PartnersSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsChart' }
      & DataGraphFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsColumns' }
      & NewsSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsColumnsWithTabs' }
      & CategorizedNewsFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsContactBanner' }
      & ContactBannerFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsEmailForm' }
      & SubscriptionFormFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsGetInTouchForm' }
      & GetInTouchFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsHeroBanner' }
      & HeroBannerFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsImageBanner' }
      & ImageBannerFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsInfoCardsTypeA' }
      & InfoSectionFragmentFragment
    ) | { __typename?: 'ComponentSectionsOverlayBlockTest' } | (
      { __typename?: 'ComponentSectionsPersonellCards' }
      & PersonelSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsRichText' }
      & RichTextFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsSecondaryBanner' }
      & SecondaryBannerFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsTestimonials' }
      & TestimonialsSectionFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsTimeline' }
      & TimelineSectionFragmentFragment
    ) | { __typename?: 'ComponentSectionsTopStripe' } | (
      { __typename?: 'ComponentSectionsTwoColumns' }
      & TwoColumnsFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsWaveBanner' }
      & WaveBannerFragmentFragment
    ) | (
      { __typename?: 'ComponentSectionsWaysToDonate' }
      & WaysToDonateFragmentFragment
    ) | { __typename?: 'Error' } | null> | null } | null> };

export const NewArticlesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewArticles"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedArticleCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<NewArticlesFragment, unknown>;
export const CategorizedNewsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategorizedNewsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumnsWithTabs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"MaxCardsToDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"TabTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ActiveBgColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveBorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveColor"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}},{"kind":"Field","name":{"kind":"Name","value":"BorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"Color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedArticleCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<CategorizedNewsFragmentFragment, unknown>;
export const ContactBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsContactBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]} as unknown as DocumentNode<ContactBannerFragmentFragment, unknown>;
export const DataGraphFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataGraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]} as unknown as DocumentNode<DataGraphFragmentFragment, unknown>;
export const ExpandableSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExpandableSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ExpandLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CollapseLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"LongDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ShortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ExpandableSectionFragmentFragment, unknown>;
export const GetInTouchFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetInTouchFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsGetInTouchForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"FormId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]} as unknown as DocumentNode<GetInTouchFragmentFragment, unknown>;
export const HeroBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsHeroBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"OverlayBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<HeroBannerFragmentFragment, unknown>;
export const ImageBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsImageBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"imageCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"LinkTitle"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<ImageBannerFragmentFragment, unknown>;
export const InfoSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsInfoCardsTypeA"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"infoCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]} as unknown as DocumentNode<InfoSectionFragmentFragment, unknown>;
export const NewsSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}}]} as unknown as DocumentNode<NewsSectionFragmentFragment, unknown>;
export const PartnersSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartnersSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsCarousel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Elements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}}]}}]} as unknown as DocumentNode<PartnersSectionFragmentFragment, unknown>;
export const PersonelSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonelSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsPersonellCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","alias":{"kind":"Name","value":"personelCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]} as unknown as DocumentNode<PersonelSectionFragmentFragment, unknown>;
export const ProjectsSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsBlocksGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"blockHeading"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectsSectionFragmentFragment, unknown>;
export const RichTextFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}}]} as unknown as DocumentNode<RichTextFragmentFragment, unknown>;
export const SecondaryBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsSecondaryBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"bannerImage"},"name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]} as unknown as DocumentNode<SecondaryBannerFragmentFragment, unknown>;
export const SubscriptionFormFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscriptionFormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsEmailForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]} as unknown as DocumentNode<SubscriptionFormFragmentFragment, unknown>;
export const TestimonialsSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTestimonials"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Author"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}}]} as unknown as DocumentNode<TestimonialsSectionFragmentFragment, unknown>;
export const TimelineSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTimeline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"timelineCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}}]} as unknown as DocumentNode<TimelineSectionFragmentFragment, unknown>;
export const TwoColumnsChartFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsChartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]} as unknown as DocumentNode<TwoColumnsChartFragmentFragment, unknown>;
export const TwoColumnsRichTextFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}}]} as unknown as DocumentNode<TwoColumnsRichTextFragmentFragment, unknown>;
export const TwoColumnsImageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<TwoColumnsImageFragmentFragment, unknown>;
export const TwoColumnsVideoFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsVideoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<TwoColumnsVideoFragmentFragment, unknown>;
export const TwoColumnsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTwoColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Ratio"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsChartFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsImageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsVideoFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsChartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsVideoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<TwoColumnsFragmentFragment, unknown>;
export const WaveBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WaveBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsWaveBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"IsLargeImage"}},{"kind":"Field","alias":{"kind":"Name","value":"Heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"BackgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"IsTextBox"}}]}}]} as unknown as DocumentNode<WaveBannerFragmentFragment, unknown>;
export const WaysToDonateFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WaysToDonateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsWaysToDonate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TabTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ActiveBgColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveBorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveColor"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}},{"kind":"Field","name":{"kind":"Name","value":"BorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"Color"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"qrCodeLink"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<WaysToDonateFragmentFragment, unknown>;
export const GetLayoutDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLayoutData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"colorScheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"white"}},{"kind":"Field","name":{"kind":"Name","value":"black"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"secondary"}},{"kind":"Field","name":{"kind":"Name","value":"tertiary"}},{"kind":"Field","name":{"kind":"Name","value":"quaternary"}},{"kind":"Field","name":{"kind":"Name","value":"quinary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"header"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stripe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SocialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"footer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialMedias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"tradeMark"}},{"kind":"Field","name":{"kind":"Name","value":"rights"}},{"kind":"Field","name":{"kind":"Name","value":"navigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}}]}}]}}]}}]} as unknown as DocumentNode<GetLayoutDataQuery, GetLayoutDataQueryVariables>;
export const GetNewsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"category"}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetNewsByCategoryQuery, GetNewsByCategoryQueryVariables>;
export const GetPageDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"PageSections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"DataGraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InfoSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PartnersSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonelSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NewsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WaveBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimelineSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExpandableSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscriptionFormFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetInTouchFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WaysToDonateFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategorizedNewsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsChartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsVideoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataGraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsHeroBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"OverlayBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsInfoCardsTypeA"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"infoCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsImageBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"imageCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"LinkTitle"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsBlocksGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"blockHeading"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartnersSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsCarousel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Elements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonelSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsPersonellCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","alias":{"kind":"Name","value":"personelCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsSecondaryBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"bannerImage"},"name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WaveBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsWaveBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"IsLargeImage"}},{"kind":"Field","alias":{"kind":"Name","value":"Heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"BackgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"IsTextBox"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTimeline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"timelineCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTestimonials"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Author"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTwoColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Ratio"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsChartFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsImageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsVideoFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExpandableSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ExpandLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CollapseLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"LongDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ShortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsContactBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscriptionFormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsEmailForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetInTouchFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsGetInTouchForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"FormId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WaysToDonateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsWaysToDonate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TabTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ActiveBgColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveBorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveColor"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}},{"kind":"Field","name":{"kind":"Name","value":"BorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"Color"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"qrCodeLink"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategorizedNewsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumnsWithTabs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"MaxCardsToDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"TabTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ActiveBgColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveBorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveColor"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}},{"kind":"Field","name":{"kind":"Name","value":"BorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"Color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedArticleCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<GetPageDataQuery, GetPageDataQueryVariables>;
export const GetPage1DataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPage1Data"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PageFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"PageSections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"DataGraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InfoSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PartnersSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonelSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NewsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WaveBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimelineSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExpandableSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscriptionFormFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetInTouchFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WaysToDonateFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategorizedNewsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsChartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsVideoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataGraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsHeroBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"OverlayBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsInfoCardsTypeA"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"infoCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsImageBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"imageCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"LinkTitle"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsBlocksGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"blockHeading"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartnersSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsCarousel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Elements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonelSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsPersonellCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","alias":{"kind":"Name","value":"personelCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsSecondaryBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"bannerImage"},"name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WaveBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsWaveBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"IsLargeImage"}},{"kind":"Field","alias":{"kind":"Name","value":"Heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"BackgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"IsTextBox"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTimeline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"timelineCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTestimonials"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Author"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTwoColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Ratio"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsChartFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsImageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsVideoFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExpandableSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ExpandLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CollapseLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"LongDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ShortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsContactBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscriptionFormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsEmailForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetInTouchFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsGetInTouchForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"FormId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WaysToDonateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsWaysToDonate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TabTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ActiveBgColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveBorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveColor"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}},{"kind":"Field","name":{"kind":"Name","value":"BorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"Color"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"qrCodeLink"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategorizedNewsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumnsWithTabs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"MaxCardsToDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"TabTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ActiveBgColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveBorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"ActiveColor"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}},{"kind":"Field","name":{"kind":"Name","value":"BorderColor"}},{"kind":"Field","name":{"kind":"Name","value":"Color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedArticleCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<GetPage1DataQuery, GetPage1DataQueryVariables>;