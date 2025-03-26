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
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  featuredImage?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ArticleRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  theme?: Maybe<ThemeEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ArticleLocalizationsArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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

export type Button = {
  __typename?: 'Button';
  buttonTheme?: Maybe<ButtonThemeEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Enum_Button_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ButtonEntity = {
  __typename?: 'ButtonEntity';
  attributes?: Maybe<Button>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ButtonEntityResponse = {
  __typename?: 'ButtonEntityResponse';
  data?: Maybe<ButtonEntity>;
};

export type ButtonEntityResponseCollection = {
  __typename?: 'ButtonEntityResponseCollection';
  data: Array<ButtonEntity>;
  meta: ResponseCollectionMeta;
};

export type ButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ButtonFiltersInput>>>;
  buttonTheme?: InputMaybe<ButtonThemeFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
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
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ButtonThemeEntity = {
  __typename?: 'ButtonThemeEntity';
  attributes?: Maybe<ButtonTheme>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ButtonThemeEntityResponse = {
  __typename?: 'ButtonThemeEntityResponse';
  data?: Maybe<ButtonThemeEntity>;
};

export type ButtonThemeEntityResponseCollection = {
  __typename?: 'ButtonThemeEntityResponseCollection';
  data: Array<ButtonThemeEntity>;
  meta: ResponseCollectionMeta;
};

export type ButtonThemeFiltersInput = {
  BackgrondColor?: InputMaybe<StringFilterInput>;
  FontColor?: InputMaybe<StringFilterInput>;
  OutlineColor?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ButtonThemeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
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

export type Column = {
  __typename?: 'Column';
  column?: Maybe<Array<Maybe<ColumnColumnDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ColumnColumnDynamicZone = ComponentSectionsChart | ComponentSectionsRichText | ComponentSharedImage | ComponentSharedVideo | Error;

export type ColumnEntity = {
  __typename?: 'ColumnEntity';
  attributes?: Maybe<Column>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ColumnEntityResponse = {
  __typename?: 'ColumnEntityResponse';
  data?: Maybe<ColumnEntity>;
};

export type ColumnEntityResponseCollection = {
  __typename?: 'ColumnEntityResponseCollection';
  data: Array<ColumnEntity>;
  meta: ResponseCollectionMeta;
};

export type ColumnFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ColumnFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
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
  CollapseLink?: Maybe<LinkEntityResponse>;
  ExpandLink?: Maybe<LinkEntityResponse>;
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
  Theme?: Maybe<ThemeEntityResponse>;
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
  Title?: Maybe<TitleEntityResponse>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsColumns = {
  __typename?: 'ComponentSectionsColumns';
  Articles?: Maybe<ArticleRelationResponseCollection>;
  CTA?: Maybe<ComponentSharedButton>;
  Heading?: Maybe<ComponentSharedHeading>;
  ShowWave: Scalars['Boolean']['output'];
  Theme?: Maybe<ThemeEntityResponse>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsColumnsArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsColumnsWithTabs = {
  __typename?: 'ComponentSectionsColumnsWithTabs';
  MaxCardsToDisplay?: Maybe<Scalars['Int']['output']>;
  Tabs?: Maybe<TabContainerRelationResponseCollection>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsColumnsWithTabsTabsArgs = {
  filters?: InputMaybe<TabContainerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsContactBanner = {
  __typename?: 'ComponentSectionsContactBanner';
  Column?: Maybe<Array<Maybe<ComponentSharedContactColumn>>>;
  Theme?: Maybe<ThemeEntityResponse>;
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
  Title?: Maybe<TitleEntityResponse>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsGetInTouchForm = {
  __typename?: 'ComponentSectionsGetInTouchForm';
  FormId?: Maybe<Scalars['String']['output']>;
  ShowWave: Scalars['Boolean']['output'];
  Text?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<TitleEntityResponse>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsHeroBanner = {
  __typename?: 'ComponentSectionsHeroBanner';
  CTA?: Maybe<ComponentSharedButton>;
  Image?: Maybe<UploadFileEntityResponse>;
  OverlayBlock?: Maybe<ComponentSharedOverlayBlock>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsImageBanner = {
  __typename?: 'ComponentSectionsImageBanner';
  Card?: Maybe<ComponentSharedImageCard>;
  Image?: Maybe<UploadFileEntityResponse>;
  Theme?: Maybe<ThemeEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsInfoCardsTypeA = {
  __typename?: 'ComponentSectionsInfoCardsTypeA';
  Button?: Maybe<ComponentSharedButton>;
  Card?: Maybe<Array<Maybe<ComponentSharedNoodlesCard>>>;
  Text?: Maybe<Scalars['String']['output']>;
  Theme?: Maybe<ThemeEntityResponse>;
  Title?: Maybe<TitleEntityResponse>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsInfoCardsTypeACardArgs = {
  filters?: InputMaybe<ComponentSharedNoodlesCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsOverlayBlockTest = {
  __typename?: 'ComponentSectionsOverlayBlockTest';
  Theme?: Maybe<ThemeEntityResponse>;
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
  Theme?: Maybe<ThemeEntityResponse>;
  Title?: Maybe<ComponentSharedHeading>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsTestimonials = {
  __typename?: 'ComponentSectionsTestimonials';
  Card?: Maybe<Array<Maybe<ComponentSharedTestimonialsCard>>>;
  ShowWave: Scalars['Boolean']['output'];
  Theme?: Maybe<ThemeEntityResponse>;
  Title?: Maybe<TitleEntityResponse>;
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
  Theme?: Maybe<ThemeEntityResponse>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsTimelineCardArgs = {
  filters?: InputMaybe<ComponentSharedTimelineCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsTopStripe = {
  __typename?: 'ComponentSectionsTopStripe';
  SocialMedia?: Maybe<SocialMediaRelationResponseCollection>;
  Theme?: Maybe<ThemeEntityResponse>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsTopStripeSocialMediaArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsTopStripeInput = {
  SocialMedia?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  Theme?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSectionsTwoColumns = {
  __typename?: 'ComponentSectionsTwoColumns';
  Column?: Maybe<ColumnEntityResponse>;
  Ratio?: Maybe<Enum_Componentsectionstwocolumns_Ratio>;
  ShowWave: Scalars['Boolean']['output'];
  Theme?: Maybe<ThemeEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsWaveBanner = {
  __typename?: 'ComponentSectionsWaveBanner';
  BackgroundColor: Enum_Componentsectionswavebanner_Backgroundcolor;
  CTA?: Maybe<ComponentSharedButton>;
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
  Card?: Maybe<ComponentSharedCard>;
  Tabs?: Maybe<TabContainerRelationResponseCollection>;
  Theme?: Maybe<ThemeEntityResponse>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsWaysToDonateTabsArgs = {
  filters?: InputMaybe<TabContainerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedAccordionItem = {
  __typename?: 'ComponentSharedAccordionItem';
  Button?: Maybe<ButtonEntityResponse>;
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
  articles?: Maybe<ArticleRelationResponseCollection>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Array<Maybe<ComponentSharedArticleCategoryTab>>>;
};


export type ComponentSharedArticleCategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedArticleCategoryThemeArgs = {
  filters?: InputMaybe<ComponentSharedArticleCategoryTabFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedArticleCategoryTab = {
  __typename?: 'ComponentSharedArticleCategoryTab';
  ActiveBgColor?: Maybe<Enum_Componentsharedarticlecategorytab_Activebgcolor>;
  ActiveBorderColor?: Maybe<Enum_Componentsharedarticlecategorytab_Activebordercolor>;
  ActiveColor?: Maybe<Enum_Componentsharedarticlecategorytab_Activecolor>;
  BgColor?: Maybe<Enum_Componentsharedarticlecategorytab_Bgcolor>;
  BorderColor?: Maybe<Enum_Componentsharedarticlecategorytab_Bordercolor>;
  Color?: Maybe<Enum_Componentsharedarticlecategorytab_Color>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedArticleCategoryTabFiltersInput = {
  ActiveBgColor?: InputMaybe<StringFilterInput>;
  ActiveBorderColor?: InputMaybe<StringFilterInput>;
  ActiveColor?: InputMaybe<StringFilterInput>;
  BgColor?: InputMaybe<StringFilterInput>;
  BorderColor?: InputMaybe<StringFilterInput>;
  Color?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedArticleCategoryTabFiltersInput>>>;
  not?: InputMaybe<ComponentSharedArticleCategoryTabFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedArticleCategoryTabFiltersInput>>>;
};

export type ComponentSharedButton = {
  __typename?: 'ComponentSharedButton';
  ButtonTheme?: Maybe<ButtonThemeEntityResponse>;
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
  Link?: Maybe<ButtonEntityResponse>;
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
  Image?: Maybe<ImageEntityResponse>;
  LinkText?: Maybe<Scalars['String']['output']>;
  LinkedPage?: Maybe<ArticleEntityResponse>;
  Text?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<TitleEntityResponse>;
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedContactColumn = {
  __typename?: 'ComponentSharedContactColumn';
  Label: Scalars['String']['output'];
  ShowWave: Scalars['Boolean']['output'];
  Text: Scalars['String']['output'];
  Title?: Maybe<TitleEntityResponse>;
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
  Image?: Maybe<UploadFileEntityResponse>;
  Label?: Maybe<Scalars['String']['output']>;
  Open?: Maybe<Scalars['Boolean']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  Theme?: Maybe<ThemeEntityResponse>;
  Title?: Maybe<TitleEntityResponse>;
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
  Title?: Maybe<TitleEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedImage = {
  __typename?: 'ComponentSharedImage';
  AltText?: Maybe<Scalars['String']['output']>;
  Image?: Maybe<UploadFileEntityResponse>;
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
  Title?: Maybe<TitleEntityResponse>;
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
  CTA?: Maybe<ButtonEntityResponse>;
  Image?: Maybe<UploadFileEntityResponse>;
  Text?: Maybe<Scalars['String']['output']>;
  Theme?: Maybe<ThemeEntityResponse>;
  Title?: Maybe<TitleEntityResponse>;
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
  Theme?: Maybe<ThemeEntityResponse>;
  Title?: Maybe<TitleEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedPersonellcard = {
  __typename?: 'ComponentSharedPersonellcard';
  Image?: Maybe<ImageEntityResponse>;
  SocialMedias?: Maybe<SocialMediaRelationResponseCollection>;
  Text: Scalars['String']['output'];
  Theme?: Maybe<ThemeEntityResponse>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentSharedPersonellcardSocialMediasArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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

export type ComponentSharedTabCardTheme = {
  __typename?: 'ComponentSharedTabCardTheme';
  BgColor?: Maybe<Enum_Componentsharedtabcardtheme_Bgcolor>;
  Color?: Maybe<Enum_Componentsharedtabcardtheme_Color>;
  LinkColor?: Maybe<Enum_Componentsharedtabcardtheme_Linkcolor>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedTabCardThemeFiltersInput = {
  BgColor?: InputMaybe<StringFilterInput>;
  Color?: InputMaybe<StringFilterInput>;
  LinkColor?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedTabCardThemeFiltersInput>>>;
  not?: InputMaybe<ComponentSharedTabCardThemeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedTabCardThemeFiltersInput>>>;
};

export type ComponentSharedTabCardThemeInput = {
  BgColor?: InputMaybe<Enum_Componentsharedtabcardtheme_Bgcolor>;
  Color?: InputMaybe<Enum_Componentsharedtabcardtheme_Color>;
  LinkColor?: InputMaybe<Enum_Componentsharedtabcardtheme_Linkcolor>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedTabs = {
  __typename?: 'ComponentSharedTabs';
  Articles?: Maybe<ArticleRelationResponseCollection>;
  Description?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentSharedTabsArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedTabsFiltersInput = {
  Articles?: InputMaybe<ArticleFiltersInput>;
  Description?: InputMaybe<StringFilterInput>;
  Label?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedTabsFiltersInput>>>;
  not?: InputMaybe<ComponentSharedTabsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedTabsFiltersInput>>>;
};

export type ComponentSharedTabsInput = {
  Articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Label?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedTestimonialsCard = {
  __typename?: 'ComponentSharedTestimonialsCard';
  Author?: Maybe<Scalars['String']['output']>;
  Icon?: Maybe<UploadFileRelationResponseCollection>;
  Text: Scalars['String']['output'];
  Theme?: Maybe<ThemeEntityResponse>;
  Title?: Maybe<TitleEntityResponse>;
  id: Scalars['ID']['output'];
};


export type ComponentSharedTestimonialsCardIconArgs = {
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
  Image?: Maybe<ImageEntityResponse>;
  Text: Scalars['String']['output'];
  Theme?: Maybe<ThemeEntityResponse>;
  Title?: Maybe<TitleEntityResponse>;
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
  heading?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<FooterRelationResponseCollection>;
  navigation?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rights?: Maybe<Scalars['String']['output']>;
  socialMedias?: Maybe<SocialMediaRelationResponseCollection>;
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


export type FooterSocialMediasArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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
  rights?: InputMaybe<Scalars['String']['input']>;
  socialMedias?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  theme?: InputMaybe<ComponentSharedColorInput>;
  tradeMark?: InputMaybe<Scalars['String']['input']>;
};

export type FooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  data: Array<FooterEntity>;
};

export type GenericMorph = Article | Button | ButtonTheme | Category | ColorScheme | Column | ComponentMetaMetadata | ComponentSectionsAccordion | ComponentSectionsBlocksGrid | ComponentSectionsCarousel | ComponentSectionsChart | ComponentSectionsColumns | ComponentSectionsColumnsWithTabs | ComponentSectionsContactBanner | ComponentSectionsEmailForm | ComponentSectionsGetInTouchForm | ComponentSectionsHeroBanner | ComponentSectionsImageBanner | ComponentSectionsInfoCardsTypeA | ComponentSectionsOverlayBlockTest | ComponentSectionsPersonellCards | ComponentSectionsRichText | ComponentSectionsSecondaryBanner | ComponentSectionsTestimonials | ComponentSectionsTimeline | ComponentSectionsTopStripe | ComponentSectionsTwoColumns | ComponentSectionsWaveBanner | ComponentSectionsWaysToDonate | ComponentSharedAccordionItem | ComponentSharedArticleCategory | ComponentSharedArticleCategoryTab | ComponentSharedButton | ComponentSharedCard | ComponentSharedColor | ComponentSharedColumnCard | ComponentSharedContactColumn | ComponentSharedGridBlock | ComponentSharedHeading | ComponentSharedImage | ComponentSharedImageCard | ComponentSharedLink | ComponentSharedMetaSocial | ComponentSharedNoodlesCard | ComponentSharedOverlayBlock | ComponentSharedPersonellcard | ComponentSharedSeo | ComponentSharedTabCardTheme | ComponentSharedTabs | ComponentSharedTestimonialsCard | ComponentSharedTimelineCard | ComponentSharedVideo | ComponentSharedWave | Footer | Header | I18NLocale | Image | Link | Page | SocialMedia | TabContainer | Theme | Title | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

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

export type Image = {
  __typename?: 'Image';
  altText?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  isIcon?: Maybe<Scalars['Boolean']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ImageEntity = {
  __typename?: 'ImageEntity';
  attributes?: Maybe<Image>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ImageEntityResponse = {
  __typename?: 'ImageEntityResponse';
  data?: Maybe<ImageEntity>;
};

export type ImageEntityResponseCollection = {
  __typename?: 'ImageEntityResponseCollection';
  data: Array<ImageEntity>;
  meta: ResponseCollectionMeta;
};

export type ImageFiltersInput = {
  altText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ImageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
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
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  theme?: Maybe<ThemeEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type LinkEntity = {
  __typename?: 'LinkEntity';
  attributes?: Maybe<Link>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LinkEntityResponse = {
  __typename?: 'LinkEntityResponse';
  data?: Maybe<LinkEntity>;
};

export type LinkEntityResponseCollection = {
  __typename?: 'LinkEntityResponseCollection';
  data: Array<LinkEntity>;
  meta: ResponseCollectionMeta;
};

export type LinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LinkFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
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
  createArticle?: Maybe<ArticleEntityResponse>;
  createArticleLocalization?: Maybe<ArticleEntityResponse>;
  createButton?: Maybe<ButtonEntityResponse>;
  createButtonTheme?: Maybe<ButtonThemeEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createColumn?: Maybe<ColumnEntityResponse>;
  createFooterLocalization?: Maybe<FooterEntityResponse>;
  createHeaderLocalization?: Maybe<HeaderEntityResponse>;
  createImage?: Maybe<ImageEntityResponse>;
  createLink?: Maybe<LinkEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createSocialMedia?: Maybe<SocialMediaEntityResponse>;
  createTabContainer?: Maybe<TabContainerEntityResponse>;
  createTheme?: Maybe<ThemeEntityResponse>;
  createTitle?: Maybe<TitleEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteButton?: Maybe<ButtonEntityResponse>;
  deleteButtonTheme?: Maybe<ButtonThemeEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteColorScheme?: Maybe<ColorSchemeEntityResponse>;
  deleteColumn?: Maybe<ColumnEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHeader?: Maybe<HeaderEntityResponse>;
  deleteImage?: Maybe<ImageEntityResponse>;
  deleteLink?: Maybe<LinkEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deleteSocialMedia?: Maybe<SocialMediaEntityResponse>;
  deleteTabContainer?: Maybe<TabContainerEntityResponse>;
  deleteTheme?: Maybe<ThemeEntityResponse>;
  deleteTitle?: Maybe<TitleEntityResponse>;
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
  updateButton?: Maybe<ButtonEntityResponse>;
  updateButtonTheme?: Maybe<ButtonThemeEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateColorScheme?: Maybe<ColorSchemeEntityResponse>;
  updateColumn?: Maybe<ColumnEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHeader?: Maybe<HeaderEntityResponse>;
  updateImage?: Maybe<ImageEntityResponse>;
  updateLink?: Maybe<LinkEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updateSocialMedia?: Maybe<SocialMediaEntityResponse>;
  updateTabContainer?: Maybe<TabContainerEntityResponse>;
  updateTheme?: Maybe<ThemeEntityResponse>;
  updateTitle?: Maybe<TitleEntityResponse>;
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


export type MutationCreateArticleLocalizationArgs = {
  data?: InputMaybe<ArticleInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateButtonArgs = {
  data: ButtonInput;
};


export type MutationCreateButtonThemeArgs = {
  data: ButtonThemeInput;
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


export type MutationCreateColumnArgs = {
  data: ColumnInput;
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


export type MutationCreateImageArgs = {
  data: ImageInput;
};


export type MutationCreateLinkArgs = {
  data: LinkInput;
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


export type MutationCreateSocialMediaArgs = {
  data: SocialMediaInput;
};


export type MutationCreateTabContainerArgs = {
  data: TabContainerInput;
};


export type MutationCreateThemeArgs = {
  data: ThemeInput;
};


export type MutationCreateTitleArgs = {
  data: TitleInput;
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


export type MutationDeleteButtonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteButtonThemeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteColumnArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteImageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSocialMediaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTabContainerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteThemeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTitleArgs = {
  id: Scalars['ID']['input'];
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


export type MutationUpdateButtonArgs = {
  data: ButtonInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateButtonThemeArgs = {
  data: ButtonThemeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateColorSchemeArgs = {
  data: ColorSchemeInput;
};


export type MutationUpdateColumnArgs = {
  data: ColumnInput;
  id: Scalars['ID']['input'];
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


export type MutationUpdateImageArgs = {
  data: ImageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLinkArgs = {
  data: LinkInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSocialMediaArgs = {
  data: SocialMediaInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTabContainerArgs = {
  data: TabContainerInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateThemeArgs = {
  data: ThemeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTitleArgs = {
  data: TitleInput;
  id: Scalars['ID']['input'];
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
  Category?: Maybe<CategoryEntityResponse>;
  PageSections?: Maybe<Array<Maybe<PagePageSectionsDynamicZone>>>;
  Slug?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
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
  Category?: InputMaybe<CategoryFiltersInput>;
  Slug?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
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
  articles?: Maybe<ArticleEntityResponseCollection>;
  button?: Maybe<ButtonEntityResponse>;
  buttonTheme?: Maybe<ButtonThemeEntityResponse>;
  buttonThemes?: Maybe<ButtonThemeEntityResponseCollection>;
  buttons?: Maybe<ButtonEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  colorScheme?: Maybe<ColorSchemeEntityResponse>;
  column?: Maybe<ColumnEntityResponse>;
  columns?: Maybe<ColumnEntityResponseCollection>;
  footer?: Maybe<FooterEntityResponse>;
  header?: Maybe<HeaderEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  image?: Maybe<ImageEntityResponse>;
  images?: Maybe<ImageEntityResponseCollection>;
  link?: Maybe<LinkEntityResponse>;
  links?: Maybe<LinkEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  socialMedia?: Maybe<SocialMediaEntityResponse>;
  socialMedias?: Maybe<SocialMediaEntityResponseCollection>;
  tabContainer?: Maybe<TabContainerEntityResponse>;
  tabContainers?: Maybe<TabContainerEntityResponseCollection>;
  theme?: Maybe<ThemeEntityResponse>;
  themes?: Maybe<ThemeEntityResponseCollection>;
  title?: Maybe<TitleEntityResponse>;
  titles?: Maybe<TitleEntityResponseCollection>;
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


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryButtonArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryButtonThemeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryButtonThemesArgs = {
  filters?: InputMaybe<ButtonThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryButtonsArgs = {
  filters?: InputMaybe<ButtonFiltersInput>;
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


export type QueryColumnArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryColumnsArgs = {
  filters?: InputMaybe<ColumnFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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


export type QueryImageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImagesArgs = {
  filters?: InputMaybe<ImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLinkArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLinksArgs = {
  filters?: InputMaybe<LinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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


export type QuerySocialMediaArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySocialMediasArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTabContainerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTabContainersArgs = {
  filters?: InputMaybe<TabContainerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryThemeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryThemesArgs = {
  filters?: InputMaybe<ThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTitleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTitlesArgs = {
  filters?: InputMaybe<TitleFiltersInput>;
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

export type SocialMedia = {
  __typename?: 'SocialMedia';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
  theme?: Maybe<ThemeEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SocialMediaEntity = {
  __typename?: 'SocialMediaEntity';
  attributes?: Maybe<SocialMedia>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SocialMediaEntityResponse = {
  __typename?: 'SocialMediaEntityResponse';
  data?: Maybe<SocialMediaEntity>;
};

export type SocialMediaEntityResponseCollection = {
  __typename?: 'SocialMediaEntityResponseCollection';
  data: Array<SocialMediaEntity>;
  meta: ResponseCollectionMeta;
};

export type SocialMediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SocialMediaFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
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
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialMediaRelationResponseCollection = {
  __typename?: 'SocialMediaRelationResponseCollection';
  data: Array<SocialMediaEntity>;
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
  CTA?: Maybe<ButtonEntityResponse>;
  TabCardTheme?: Maybe<Array<Maybe<ComponentSharedTabCardTheme>>>;
  TabTheme?: Maybe<Array<Maybe<ComponentSharedTabCardTheme>>>;
  Tabs?: Maybe<Array<Maybe<ComponentSharedTabs>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TabContainerTabCardThemeArgs = {
  filters?: InputMaybe<ComponentSharedTabCardThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TabContainerTabThemeArgs = {
  filters?: InputMaybe<ComponentSharedTabCardThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TabContainerTabsArgs = {
  filters?: InputMaybe<ComponentSharedTabsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TabContainerEntity = {
  __typename?: 'TabContainerEntity';
  attributes?: Maybe<TabContainer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TabContainerEntityResponse = {
  __typename?: 'TabContainerEntityResponse';
  data?: Maybe<TabContainerEntity>;
};

export type TabContainerEntityResponseCollection = {
  __typename?: 'TabContainerEntityResponseCollection';
  data: Array<TabContainerEntity>;
  meta: ResponseCollectionMeta;
};

export type TabContainerFiltersInput = {
  CTA?: InputMaybe<ButtonFiltersInput>;
  TabCardTheme?: InputMaybe<ComponentSharedTabCardThemeFiltersInput>;
  TabTheme?: InputMaybe<ComponentSharedTabCardThemeFiltersInput>;
  Tabs?: InputMaybe<ComponentSharedTabsFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<TabContainerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TabContainerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TabContainerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TabContainerInput = {
  CTA?: InputMaybe<Scalars['ID']['input']>;
  TabCardTheme?: InputMaybe<Array<InputMaybe<ComponentSharedTabCardThemeInput>>>;
  TabTheme?: InputMaybe<Array<InputMaybe<ComponentSharedTabCardThemeInput>>>;
  Tabs?: InputMaybe<Array<InputMaybe<ComponentSharedTabsInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TabContainerRelationResponseCollection = {
  __typename?: 'TabContainerRelationResponseCollection';
  data: Array<TabContainerEntity>;
};

export type Theme = {
  __typename?: 'Theme';
  bgColor?: Maybe<Enum_Theme_Bgcolor>;
  color?: Maybe<Enum_Theme_Color>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ThemeEntity = {
  __typename?: 'ThemeEntity';
  attributes?: Maybe<Theme>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ThemeEntityResponse = {
  __typename?: 'ThemeEntityResponse';
  data?: Maybe<ThemeEntity>;
};

export type ThemeEntityResponseCollection = {
  __typename?: 'ThemeEntityResponseCollection';
  data: Array<ThemeEntity>;
  meta: ResponseCollectionMeta;
};

export type ThemeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ThemeFiltersInput>>>;
  bgColor?: InputMaybe<StringFilterInput>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
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
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TitleEntity = {
  __typename?: 'TitleEntity';
  attributes?: Maybe<Title>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TitleEntityResponse = {
  __typename?: 'TitleEntityResponse';
  data?: Maybe<TitleEntity>;
};

export type TitleEntityResponseCollection = {
  __typename?: 'TitleEntityResponseCollection';
  data: Array<TitleEntity>;
  meta: ResponseCollectionMeta;
};

export type TitleFiltersInput = {
  HeadingLevel?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TitleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
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

export type NewArticlesFragment = { __typename?: 'ComponentSharedArticleCategory', articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null };

export type CategorizedNewsFragmentFragment = { __typename: 'ComponentSectionsColumnsWithTabs', id: string, MaxCardsToDisplay?: number | null, Tabs?: { __typename?: 'TabContainerRelationResponseCollection', data: Array<{ __typename?: 'TabContainerEntity', id?: string | null, attributes?: { __typename?: 'TabContainer', TabTheme?: Array<{ __typename?: 'ComponentSharedTabCardTheme', Color?: Enum_Componentsharedtabcardtheme_Color | null } | null> | null, TabCardTheme?: Array<{ __typename?: 'ComponentSharedTabCardTheme', Color?: Enum_Componentsharedtabcardtheme_Color | null, BgColor?: Enum_Componentsharedtabcardtheme_Bgcolor | null, LinkColor?: Enum_Componentsharedtabcardtheme_Linkcolor | null, id: string } | null> | null, CTA?: { __typename?: 'ButtonEntityResponse', data?: { __typename?: 'ButtonEntity', id?: string | null, attributes?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, url?: string | null, buttonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null } | null } | null, Tabs?: Array<{ __typename?: 'ComponentSharedTabs', id: string, Label?: string | null, Description?: string | null, Articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null } | null> | null } | null }> } | null };

export type ContactBannerFragmentFragment = { __typename?: 'ComponentSectionsContactBanner', id: string, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, columns?: Array<{ __typename?: 'ComponentSharedContactColumn', id: string, Text: string, Label: string, ShowWave: boolean, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null> | null };

export type DataGraphFragmentFragment = { __typename?: 'ComponentSectionsChart', id: string, Outline?: boolean | null, URL?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null };

export type ExpandableSectionFragmentFragment = { __typename?: 'ComponentSectionsAccordion', id: string, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, ExpandLink?: { __typename?: 'LinkEntityResponse', data?: { __typename?: 'LinkEntity', attributes?: { __typename?: 'Link', title?: string | null, url?: string | null, theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', bgColor?: Enum_Theme_Bgcolor | null, color?: Enum_Theme_Color | null } | null } | null } | null } | null } | null } | null, CollapseLink?: { __typename?: 'LinkEntityResponse', data?: { __typename?: 'LinkEntity', attributes?: { __typename?: 'Link', title?: string | null, url?: string | null, theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', bgColor?: Enum_Theme_Bgcolor | null, color?: Enum_Theme_Color | null } | null } | null } | null } | null } | null } | null, Item?: Array<{ __typename?: 'ComponentSharedAccordionItem', id: string, Title?: string | null, LongDescription?: string | null, ShortDescription: string, Button?: { __typename?: 'ButtonEntityResponse', data?: { __typename?: 'ButtonEntity', attributes?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, buttonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null } | null } | null } | null } | null } | null } | null } | null> | null };

export type GetInTouchFragmentFragment = { __typename?: 'ComponentSectionsGetInTouchForm', id: string, Text?: string | null, ShowWave: boolean, FormId?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null };

export type HeroBannerFragmentFragment = { __typename: 'ComponentSectionsHeroBanner', id: string, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, URL?: string | null, Type?: Enum_Componentsharedbutton_Type | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, OverlayBlock?: { __typename?: 'ComponentSharedOverlayBlock', id: string, Text?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null } | null };

export type ImageBannerFragmentFragment = { __typename: 'ComponentSectionsImageBanner', id: string, imageCard?: { __typename?: 'ComponentSharedImageCard', id: string, Text?: string | null, Label?: string | null, URL?: string | null, LinkTitle?: string | null, Open?: boolean | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', id?: string | null, attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null };

export type InfoSectionFragmentFragment = { __typename: 'ComponentSectionsInfoCardsTypeA', id: string, Text?: string | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, infoCard?: Array<{ __typename?: 'ComponentSharedNoodlesCard', id: string, Text?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null, CTA?: { __typename?: 'ButtonEntityResponse', data?: { __typename?: 'ButtonEntity', attributes?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, url?: string | null, buttonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null } | null } | null } | null } | null } | null } | null } | null> | null, Button?: { __typename?: 'ComponentSharedButton', Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null };

export type NewsSectionFragmentFragment = { __typename: 'ComponentSectionsColumns', id: string, ShowWave: boolean, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Alignment?: Enum_Componentsharedheading_Alignment | null, Level?: number | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, Articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, content?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null };

export type PartnersSectionFragmentFragment = { __typename?: 'ComponentSectionsCarousel', id: string, Name: string, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, Elements: Array<{ __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | null> };

export type PersonelSectionFragmentFragment = { __typename?: 'ComponentSectionsPersonellCards', id: string, ShowWave: boolean, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, personelCard?: Array<{ __typename?: 'ComponentSharedPersonellcard', id: string, Title?: string | null, Text: string, Image?: { __typename?: 'ImageEntityResponse', data?: { __typename?: 'ImageEntity', attributes?: { __typename?: 'Image', altText?: string | null, isIcon?: boolean | null, newTab?: boolean | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, name: string, caption?: string | null, url: string } | null } | null } | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | null> | null };

export type ProjectsSectionFragmentFragment = { __typename: 'ComponentSectionsBlocksGrid', id: string, blockHeading?: string | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, Block?: Array<{ __typename?: 'ComponentSharedGridBlock', id: string, Text?: string | null, Label?: string | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null } | null> | null };

export type RichTextFragmentFragment = { __typename: 'ComponentSectionsRichText', id: string, Content?: string | null };

export type SecondaryBannerFragmentFragment = { __typename?: 'ComponentSectionsSecondaryBanner', Name: string, Text?: string | null, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, bannerImage: { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null }, CTA1?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, CTA2?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null };

export type SubscriptionFormFragmentFragment = { __typename?: 'ComponentSectionsEmailForm', id: string, Text?: string | null, URL?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null };

export type TestimonialsSectionFragmentFragment = { __typename?: 'ComponentSectionsTestimonials', id: string, ShowWave: boolean, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Card?: Array<{ __typename?: 'ComponentSharedTestimonialsCard', id: string, Text: string, Author?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Icon?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, name: string, caption?: string | null, url: string } | null }> } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | null> | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null };

export type TimelineSectionFragmentFragment = { __typename?: 'ComponentSectionsTimeline', id: string, ShowWave: boolean, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, timelineCard?: Array<{ __typename?: 'ComponentSharedTimelineCard', id: string, Text: string, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Image?: { __typename?: 'ImageEntityResponse', data?: { __typename?: 'ImageEntity', attributes?: { __typename?: 'Image', altText?: string | null, isIcon?: boolean | null, url?: string | null, newTab?: boolean | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | null> | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null };

export type TwoColumnsFragmentFragment = { __typename?: 'ComponentSectionsTwoColumns', id: string, Ratio?: Enum_Componentsectionstwocolumns_Ratio | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, Column?: { __typename?: 'ColumnEntityResponse', data?: { __typename?: 'ColumnEntity', id?: string | null, attributes?: { __typename?: 'Column', column?: Array<{ __typename?: 'ComponentSectionsChart', id: string, Outline?: boolean | null, URL?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | { __typename?: 'ComponentSectionsRichText', id: string, Content?: string | null } | { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | { __typename?: 'ComponentSharedVideo', id: string, altText?: string | null, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export type TwoColumnsChartFragmentFragment = { __typename?: 'ComponentSectionsChart', id: string, Outline?: boolean | null, URL?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null };

export type TwoColumnsImageFragmentFragment = { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null };

export type TwoColumnsRichTextFragmentFragment = { __typename?: 'ComponentSectionsRichText', id: string, Content?: string | null };

export type TwoColumnsVideoFragmentFragment = { __typename?: 'ComponentSharedVideo', id: string, altText?: string | null, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null };

export type WaveBannerFragmentFragment = { __typename?: 'ComponentSectionsWaveBanner', Name: string, IsLargeImage: boolean, Text?: string | null, BackgroundColor: Enum_Componentsectionswavebanner_Backgroundcolor, IsTextBox: boolean, Image?: { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null } | null, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null };

export type WaysToDonateFragmentFragment = { __typename?: 'ComponentSectionsWaysToDonate', Title?: string | null, id: string, Card?: { __typename?: 'ComponentSharedCard', id: string, Title?: string | null, Text?: string | null, qrCodeLink?: string | null, Link?: { __typename?: 'ButtonEntityResponse', data?: { __typename?: 'ButtonEntity', attributes?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, url?: string | null, buttonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null };

export type GetLayoutDataQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetLayoutDataQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', Slug?: string | null } | null }> } | null, colorScheme?: { __typename?: 'ColorSchemeEntityResponse', data?: { __typename?: 'ColorSchemeEntity', attributes?: { __typename?: 'ColorScheme', white?: string | null, black?: string | null, background?: string | null, primary?: string | null, secondary?: string | null, tertiary?: string | null, quaternary?: string | null, quinary?: string | null } | null } | null } | null, header?: { __typename?: 'HeaderEntityResponse', data?: { __typename?: 'HeaderEntity', attributes?: { __typename?: 'Header', logo?: { __typename?: 'ComponentSharedImage', AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null } | null, cta?: { __typename?: 'ComponentSharedButton', Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, Label?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', FontColor?: Enum_Buttontheme_Fontcolor | null, BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null } | null } | null } | null } | null, stripe?: { __typename?: 'ComponentSectionsTopStripe', SocialMedia?: { __typename?: 'SocialMediaRelationResponseCollection', data: Array<{ __typename?: 'SocialMediaEntity', attributes?: { __typename?: 'SocialMedia', title?: string | null, text: string, type?: string | null, url?: string | null, theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | null }> } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', bgColor?: Enum_Theme_Bgcolor | null, color?: Enum_Theme_Color | null } | null } | null } | null } | null, navigations?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug?: string | null, label?: string | null, description?: string | null, pages?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', Slug?: string | null, Title?: string | null } | null }> } | null } | null }> } | null } | null } | null } | null, footer?: { __typename?: 'FooterEntityResponse', data?: { __typename?: 'FooterEntity', attributes?: { __typename?: 'Footer', heading?: string | null, tradeMark?: string | null, rights?: string | null, theme?: { __typename?: 'ComponentSharedColor', Color?: Enum_Componentsharedcolor_Color | null, BgColor?: Enum_Componentsharedcolor_Bgcolor | null } | null, socialMedias?: { __typename?: 'SocialMediaRelationResponseCollection', data: Array<{ __typename?: 'SocialMediaEntity', attributes?: { __typename?: 'SocialMedia', text: string, title?: string | null, type?: string | null, url?: string | null, theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | null }> } | null, navigation?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', Slug?: string | null, Title?: string | null } | null }> } | null } | null } | null } | null };

export type GetNewsByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetNewsByCategoryQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null };

export type GetPageDataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetPageDataQuery = { __typename?: 'Query', page?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', attributes?: { __typename?: 'Page', Slug?: string | null, Title?: string | null, locale?: string | null, PageSections?: Array<{ __typename?: 'ComponentSectionsAccordion', id: string, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, ExpandLink?: { __typename?: 'LinkEntityResponse', data?: { __typename?: 'LinkEntity', attributes?: { __typename?: 'Link', title?: string | null, url?: string | null, theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', bgColor?: Enum_Theme_Bgcolor | null, color?: Enum_Theme_Color | null } | null } | null } | null } | null } | null } | null, CollapseLink?: { __typename?: 'LinkEntityResponse', data?: { __typename?: 'LinkEntity', attributes?: { __typename?: 'Link', title?: string | null, url?: string | null, theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', bgColor?: Enum_Theme_Bgcolor | null, color?: Enum_Theme_Color | null } | null } | null } | null } | null } | null } | null, Item?: Array<{ __typename?: 'ComponentSharedAccordionItem', id: string, Title?: string | null, LongDescription?: string | null, ShortDescription: string, Button?: { __typename?: 'ButtonEntityResponse', data?: { __typename?: 'ButtonEntity', attributes?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, buttonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsBlocksGrid', id: string, blockHeading?: string | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, Block?: Array<{ __typename?: 'ComponentSharedGridBlock', id: string, Text?: string | null, Label?: string | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentSectionsCarousel', id: string, Name: string, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, Elements: Array<{ __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | null> } | { __typename?: 'ComponentSectionsChart', id: string, Outline?: boolean | null, URL?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | { __typename: 'ComponentSectionsColumns', id: string, ShowWave: boolean, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Alignment?: Enum_Componentsharedheading_Alignment | null, Level?: number | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, Articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, content?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null } | { __typename: 'ComponentSectionsColumnsWithTabs', id: string, MaxCardsToDisplay?: number | null, Tabs?: { __typename?: 'TabContainerRelationResponseCollection', data: Array<{ __typename?: 'TabContainerEntity', id?: string | null, attributes?: { __typename?: 'TabContainer', TabTheme?: Array<{ __typename?: 'ComponentSharedTabCardTheme', Color?: Enum_Componentsharedtabcardtheme_Color | null } | null> | null, TabCardTheme?: Array<{ __typename?: 'ComponentSharedTabCardTheme', Color?: Enum_Componentsharedtabcardtheme_Color | null, BgColor?: Enum_Componentsharedtabcardtheme_Bgcolor | null, LinkColor?: Enum_Componentsharedtabcardtheme_Linkcolor | null, id: string } | null> | null, CTA?: { __typename?: 'ButtonEntityResponse', data?: { __typename?: 'ButtonEntity', id?: string | null, attributes?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, url?: string | null, buttonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null } | null } | null, Tabs?: Array<{ __typename?: 'ComponentSharedTabs', id: string, Label?: string | null, Description?: string | null, Articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null } | null> | null } | null }> } | null } | { __typename?: 'ComponentSectionsContactBanner', id: string, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, columns?: Array<{ __typename?: 'ComponentSharedContactColumn', id: string, Text: string, Label: string, ShowWave: boolean, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentSectionsEmailForm', id: string, Text?: string | null, URL?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | { __typename?: 'ComponentSectionsGetInTouchForm', id: string, Text?: string | null, ShowWave: boolean, FormId?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | { __typename: 'ComponentSectionsHeroBanner', id: string, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, URL?: string | null, Type?: Enum_Componentsharedbutton_Type | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, OverlayBlock?: { __typename?: 'ComponentSharedOverlayBlock', id: string, Text?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null } | null } | { __typename: 'ComponentSectionsImageBanner', id: string, imageCard?: { __typename?: 'ComponentSharedImageCard', id: string, Text?: string | null, Label?: string | null, URL?: string | null, LinkTitle?: string | null, Open?: boolean | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', id?: string | null, attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | { __typename: 'ComponentSectionsInfoCardsTypeA', id: string, Text?: string | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, infoCard?: Array<{ __typename?: 'ComponentSharedNoodlesCard', id: string, Text?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null, CTA?: { __typename?: 'ButtonEntityResponse', data?: { __typename?: 'ButtonEntity', attributes?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, url?: string | null, buttonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null } | null } | null } | null } | null } | null } | null } | null> | null, Button?: { __typename?: 'ComponentSharedButton', Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null } | { __typename?: 'ComponentSectionsOverlayBlockTest' } | { __typename?: 'ComponentSectionsPersonellCards', id: string, ShowWave: boolean, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, personelCard?: Array<{ __typename?: 'ComponentSharedPersonellcard', id: string, Title?: string | null, Text: string, Image?: { __typename?: 'ImageEntityResponse', data?: { __typename?: 'ImageEntity', attributes?: { __typename?: 'Image', altText?: string | null, isIcon?: boolean | null, newTab?: boolean | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, name: string, caption?: string | null, url: string } | null } | null } | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsRichText', id: string, Content?: string | null } | { __typename?: 'ComponentSectionsSecondaryBanner', Name: string, Text?: string | null, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, bannerImage: { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null }, CTA1?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, CTA2?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null } | { __typename?: 'ComponentSectionsTestimonials', id: string, ShowWave: boolean, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Card?: Array<{ __typename?: 'ComponentSharedTestimonialsCard', id: string, Text: string, Author?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Icon?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, name: string, caption?: string | null, url: string } | null }> } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | null> | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | { __typename?: 'ComponentSectionsTimeline', id: string, ShowWave: boolean, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, timelineCard?: Array<{ __typename?: 'ComponentSharedTimelineCard', id: string, Text: string, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Image?: { __typename?: 'ImageEntityResponse', data?: { __typename?: 'ImageEntity', attributes?: { __typename?: 'Image', altText?: string | null, isIcon?: boolean | null, url?: string | null, newTab?: boolean | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | null> | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | { __typename?: 'ComponentSectionsTopStripe' } | { __typename?: 'ComponentSectionsTwoColumns', id: string, Ratio?: Enum_Componentsectionstwocolumns_Ratio | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, Column?: { __typename?: 'ColumnEntityResponse', data?: { __typename?: 'ColumnEntity', id?: string | null, attributes?: { __typename?: 'Column', column?: Array<{ __typename?: 'ComponentSectionsChart', id: string, Outline?: boolean | null, URL?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | { __typename?: 'ComponentSectionsRichText', id: string, Content?: string | null } | { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | { __typename?: 'ComponentSharedVideo', id: string, altText?: string | null, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null } | { __typename?: 'ComponentSectionsWaveBanner', Name: string, IsLargeImage: boolean, Text?: string | null, BackgroundColor: Enum_Componentsectionswavebanner_Backgroundcolor, IsTextBox: boolean, Image?: { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null } | null, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null } | { __typename?: 'ComponentSectionsWaysToDonate' } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export type GetPage1DataQueryVariables = Exact<{
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type GetPage1DataQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', Title?: string | null, Slug?: string | null, PageSections?: Array<{ __typename?: 'ComponentSectionsAccordion', id: string, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, ExpandLink?: { __typename?: 'LinkEntityResponse', data?: { __typename?: 'LinkEntity', attributes?: { __typename?: 'Link', title?: string | null, url?: string | null, theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', bgColor?: Enum_Theme_Bgcolor | null, color?: Enum_Theme_Color | null } | null } | null } | null } | null } | null } | null, CollapseLink?: { __typename?: 'LinkEntityResponse', data?: { __typename?: 'LinkEntity', attributes?: { __typename?: 'Link', title?: string | null, url?: string | null, theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', bgColor?: Enum_Theme_Bgcolor | null, color?: Enum_Theme_Color | null } | null } | null } | null } | null } | null } | null, Item?: Array<{ __typename?: 'ComponentSharedAccordionItem', id: string, Title?: string | null, LongDescription?: string | null, ShortDescription: string, Button?: { __typename?: 'ButtonEntityResponse', data?: { __typename?: 'ButtonEntity', attributes?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, buttonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsBlocksGrid', id: string, blockHeading?: string | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, Block?: Array<{ __typename?: 'ComponentSharedGridBlock', id: string, Text?: string | null, Label?: string | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentSectionsCarousel', id: string, Name: string, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, Elements: Array<{ __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | null> } | { __typename?: 'ComponentSectionsChart', id: string, Outline?: boolean | null, URL?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | { __typename: 'ComponentSectionsColumns', id: string, ShowWave: boolean, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Alignment?: Enum_Componentsharedheading_Alignment | null, Level?: number | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, Articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, content?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null } | { __typename: 'ComponentSectionsColumnsWithTabs', id: string, MaxCardsToDisplay?: number | null, Tabs?: { __typename?: 'TabContainerRelationResponseCollection', data: Array<{ __typename?: 'TabContainerEntity', id?: string | null, attributes?: { __typename?: 'TabContainer', TabTheme?: Array<{ __typename?: 'ComponentSharedTabCardTheme', Color?: Enum_Componentsharedtabcardtheme_Color | null } | null> | null, TabCardTheme?: Array<{ __typename?: 'ComponentSharedTabCardTheme', Color?: Enum_Componentsharedtabcardtheme_Color | null, BgColor?: Enum_Componentsharedtabcardtheme_Bgcolor | null, LinkColor?: Enum_Componentsharedtabcardtheme_Linkcolor | null, id: string } | null> | null, CTA?: { __typename?: 'ButtonEntityResponse', data?: { __typename?: 'ButtonEntity', id?: string | null, attributes?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, url?: string | null, buttonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null } | null } | null, Tabs?: Array<{ __typename?: 'ComponentSharedTabs', id: string, Label?: string | null, Description?: string | null, Articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', slug: string, title?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null } | null> | null } | null }> } | null } | { __typename?: 'ComponentSectionsContactBanner', id: string, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, columns?: Array<{ __typename?: 'ComponentSharedContactColumn', id: string, Text: string, Label: string, ShowWave: boolean, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentSectionsEmailForm', id: string, Text?: string | null, URL?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | { __typename?: 'ComponentSectionsGetInTouchForm', id: string, Text?: string | null, ShowWave: boolean, FormId?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | { __typename: 'ComponentSectionsHeroBanner', id: string, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, URL?: string | null, Type?: Enum_Componentsharedbutton_Type | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, OverlayBlock?: { __typename?: 'ComponentSharedOverlayBlock', id: string, Text?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null } | null } | { __typename: 'ComponentSectionsImageBanner', id: string, imageCard?: { __typename?: 'ComponentSharedImageCard', id: string, Text?: string | null, Label?: string | null, URL?: string | null, LinkTitle?: string | null, Open?: boolean | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', id?: string | null, attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | { __typename: 'ComponentSectionsInfoCardsTypeA', id: string, Text?: string | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, infoCard?: Array<{ __typename?: 'ComponentSharedNoodlesCard', id: string, Text?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null, title?: string | null } | null } | null } | null, CTA?: { __typename?: 'ButtonEntityResponse', data?: { __typename?: 'ButtonEntity', attributes?: { __typename?: 'Button', label?: string | null, type?: Enum_Button_Type | null, url?: string | null, buttonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null } | null } | null } | null } | null } | null } | null } | null> | null, Button?: { __typename?: 'ComponentSharedButton', Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null } | { __typename?: 'ComponentSectionsOverlayBlockTest' } | { __typename?: 'ComponentSectionsPersonellCards', id: string, ShowWave: boolean, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, personelCard?: Array<{ __typename?: 'ComponentSharedPersonellcard', id: string, Title?: string | null, Text: string, Image?: { __typename?: 'ImageEntityResponse', data?: { __typename?: 'ImageEntity', attributes?: { __typename?: 'Image', altText?: string | null, isIcon?: boolean | null, newTab?: boolean | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, name: string, caption?: string | null, url: string } | null } | null } | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsRichText', id: string, Content?: string | null } | { __typename?: 'ComponentSectionsSecondaryBanner', Name: string, Text?: string | null, heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, bannerImage: { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null }, CTA1?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null, CTA2?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null } | { __typename?: 'ComponentSectionsTestimonials', id: string, ShowWave: boolean, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Card?: Array<{ __typename?: 'ComponentSharedTestimonialsCard', id: string, Text: string, Author?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Icon?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, name: string, caption?: string | null, url: string } | null }> } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | null> | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | { __typename?: 'ComponentSectionsTimeline', id: string, ShowWave: boolean, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, timelineCard?: Array<{ __typename?: 'ComponentSharedTimelineCard', id: string, Text: string, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null, Image?: { __typename?: 'ImageEntityResponse', data?: { __typename?: 'ImageEntity', attributes?: { __typename?: 'Image', altText?: string | null, isIcon?: boolean | null, url?: string | null, newTab?: boolean | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | null } | null } | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | null> | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null } | { __typename?: 'ComponentSectionsTopStripe' } | { __typename?: 'ComponentSectionsTwoColumns', id: string, Ratio?: Enum_Componentsectionstwocolumns_Ratio | null, Theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', color?: Enum_Theme_Color | null, bgColor?: Enum_Theme_Bgcolor | null } | null } | null } | null, Column?: { __typename?: 'ColumnEntityResponse', data?: { __typename?: 'ColumnEntity', id?: string | null, attributes?: { __typename?: 'Column', column?: Array<{ __typename?: 'ComponentSectionsChart', id: string, Outline?: boolean | null, URL?: string | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | { __typename?: 'ComponentSectionsRichText', id: string, Content?: string | null } | { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | { __typename?: 'ComponentSharedVideo', id: string, altText?: string | null, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null } | { __typename?: 'ComponentSectionsWaveBanner', Name: string, IsLargeImage: boolean, Text?: string | null, BackgroundColor: Enum_Componentsectionswavebanner_Backgroundcolor, IsTextBox: boolean, Image?: { __typename?: 'ComponentSharedImage', id: string, Name?: string | null, AltText?: string | null, IsIcon?: boolean | null, URL?: string | null, Open?: boolean | null } | null, Heading?: { __typename?: 'ComponentSharedHeading', id: string, Level?: number | null, Alignment?: Enum_Componentsharedheading_Alignment | null, Title?: { __typename?: 'TitleEntityResponse', data?: { __typename?: 'TitleEntity', attributes?: { __typename?: 'Title', Title?: string | null, HeadingLevel?: Enum_Title_Headinglevel | null } | null } | null } | null } | null, CTA?: { __typename?: 'ComponentSharedButton', id: string, Label?: string | null, Type?: Enum_Componentsharedbutton_Type | null, URL?: string | null, ButtonTheme?: { __typename?: 'ButtonThemeEntityResponse', data?: { __typename?: 'ButtonThemeEntity', attributes?: { __typename?: 'ButtonTheme', BackgrondColor?: Enum_Buttontheme_Backgrondcolor | null, OutlineColor?: Enum_Buttontheme_Outlinecolor | null, FontColor?: Enum_Buttontheme_Fontcolor | null } | null } | null } | null } | null } | { __typename?: 'ComponentSectionsWaysToDonate' } | { __typename?: 'Error' } | null> | null } | null }> } | null };

export const NewArticlesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewArticles"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedArticleCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewArticlesFragment, unknown>;
export const CategorizedNewsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategorizedNewsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumnsWithTabs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TabTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"TabCardTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}},{"kind":"Field","name":{"kind":"Name","value":"LinkColor"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"MaxCardsToDisplay"}}]}}]} as unknown as DocumentNode<CategorizedNewsFragmentFragment, unknown>;
export const ContactBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsContactBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ContactBannerFragmentFragment, unknown>;
export const DataGraphFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataGraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DataGraphFragmentFragment, unknown>;
export const ExpandableSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExpandableSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ExpandLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CollapseLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"LongDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ShortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ExpandableSectionFragmentFragment, unknown>;
export const GetInTouchFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetInTouchFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsGetInTouchForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"FormId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetInTouchFragmentFragment, unknown>;
export const HeroBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsHeroBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"OverlayBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HeroBannerFragmentFragment, unknown>;
export const ImageBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsImageBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"imageCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"LinkTitle"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ImageBannerFragmentFragment, unknown>;
export const InfoSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsInfoCardsTypeA"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"infoCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InfoSectionFragmentFragment, unknown>;
export const NewsSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}}]} as unknown as DocumentNode<NewsSectionFragmentFragment, unknown>;
export const PartnersSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartnersSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsCarousel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Elements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}}]}}]} as unknown as DocumentNode<PartnersSectionFragmentFragment, unknown>;
export const PersonelSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonelSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsPersonellCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","alias":{"kind":"Name","value":"personelCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PersonelSectionFragmentFragment, unknown>;
export const ProjectsSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsBlocksGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"blockHeading"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectsSectionFragmentFragment, unknown>;
export const RichTextFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}}]} as unknown as DocumentNode<RichTextFragmentFragment, unknown>;
export const SecondaryBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsSecondaryBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"bannerImage"},"name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SecondaryBannerFragmentFragment, unknown>;
export const SubscriptionFormFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscriptionFormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsEmailForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SubscriptionFormFragmentFragment, unknown>;
export const TestimonialsSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTestimonials"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Author"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}}]} as unknown as DocumentNode<TestimonialsSectionFragmentFragment, unknown>;
export const TimelineSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTimeline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"timelineCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}}]} as unknown as DocumentNode<TimelineSectionFragmentFragment, unknown>;
export const TwoColumnsChartFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsChartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TwoColumnsChartFragmentFragment, unknown>;
export const TwoColumnsRichTextFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}}]} as unknown as DocumentNode<TwoColumnsRichTextFragmentFragment, unknown>;
export const TwoColumnsImageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TwoColumnsImageFragmentFragment, unknown>;
export const TwoColumnsVideoFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsVideoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TwoColumnsVideoFragmentFragment, unknown>;
export const TwoColumnsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTwoColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Ratio"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsChartFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsImageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsVideoFragment"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsChartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsVideoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TwoColumnsFragmentFragment, unknown>;
export const WaveBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WaveBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsWaveBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}},{"kind":"Field","name":{"kind":"Name","value":"IsLargeImage"}},{"kind":"Field","alias":{"kind":"Name","value":"Heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"BackgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"IsTextBox"}}]}}]} as unknown as DocumentNode<WaveBannerFragmentFragment, unknown>;
export const WaysToDonateFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WaysToDonateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsWaysToDonate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"qrCodeLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<WaysToDonateFragmentFragment, unknown>;
export const GetLayoutDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLayoutData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colorScheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"white"}},{"kind":"Field","name":{"kind":"Name","value":"black"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"secondary"}},{"kind":"Field","name":{"kind":"Name","value":"tertiary"}},{"kind":"Field","name":{"kind":"Name","value":"quaternary"}},{"kind":"Field","name":{"kind":"Name","value":"quinary"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"header"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stripe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SocialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"footer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialMedias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"tradeMark"}},{"kind":"Field","name":{"kind":"Name","value":"rights"}},{"kind":"Field","name":{"kind":"Name","value":"navigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetLayoutDataQuery, GetLayoutDataQueryVariables>;
export const GetNewsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"category"}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNewsByCategoryQuery, GetNewsByCategoryQueryVariables>;
export const GetPageDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"PageSections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"DataGraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InfoSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PartnersSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonelSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NewsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WaveBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimelineSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExpandableSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscriptionFormFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetInTouchFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategorizedNewsFragment"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsChartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsVideoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataGraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsHeroBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"OverlayBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsInfoCardsTypeA"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"infoCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsImageBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"imageCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"LinkTitle"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsBlocksGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"blockHeading"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartnersSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsCarousel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Elements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonelSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsPersonellCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","alias":{"kind":"Name","value":"personelCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsSecondaryBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"bannerImage"},"name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WaveBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsWaveBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}},{"kind":"Field","name":{"kind":"Name","value":"IsLargeImage"}},{"kind":"Field","alias":{"kind":"Name","value":"Heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"BackgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"IsTextBox"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTimeline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"timelineCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTestimonials"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Author"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTwoColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Ratio"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsChartFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsImageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsVideoFragment"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExpandableSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ExpandLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CollapseLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"LongDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ShortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsContactBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscriptionFormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsEmailForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetInTouchFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsGetInTouchForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"FormId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategorizedNewsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumnsWithTabs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TabTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"TabCardTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}},{"kind":"Field","name":{"kind":"Name","value":"LinkColor"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"MaxCardsToDisplay"}}]}}]} as unknown as DocumentNode<GetPageDataQuery, GetPageDataQueryVariables>;
export const GetPage1DataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPage1Data"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PageFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"PageSections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"DataGraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InfoSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PartnersSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonelSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NewsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WaveBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimelineSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExpandableSectionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscriptionFormFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetInTouchFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategorizedNewsFragment"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsChartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsVideoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataGraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsChart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Outline"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsHeroBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"OverlayBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsInfoCardsTypeA"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"infoCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsImageBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"imageCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"LinkTitle"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsBlocksGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"blockHeading"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartnersSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsCarousel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Elements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonelSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsPersonellCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","alias":{"kind":"Name","value":"personelCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsSecondaryBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"bannerImage"},"name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WaveBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsWaveBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"AltText"}},{"kind":"Field","name":{"kind":"Name","value":"IsIcon"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Open"}}]}},{"kind":"Field","name":{"kind":"Name","value":"IsLargeImage"}},{"kind":"Field","alias":{"kind":"Name","value":"Heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"BackgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"IsTextBox"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTimeline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"timelineCard"},"name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"isIcon"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTestimonials"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Author"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTwoColumns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Ratio"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsChartFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsRichTextFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsImageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnsVideoFragment"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExpandableSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Level"}},{"kind":"Field","name":{"kind":"Name","value":"Alignment"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ExpandLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CollapseLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"LongDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ShortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"Button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsContactBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"Column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscriptionFormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsEmailForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetInTouchFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsGetInTouchForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"ShowWave"}},{"kind":"Field","name":{"kind":"Name","value":"FormId"}},{"kind":"Field","name":{"kind":"Name","value":"Title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"HeadingLevel"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategorizedNewsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsColumnsWithTabs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TabTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"TabCardTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}},{"kind":"Field","name":{"kind":"Name","value":"BgColor"}},{"kind":"Field","name":{"kind":"Name","value":"LinkColor"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BackgrondColor"}},{"kind":"Field","name":{"kind":"Name","value":"OutlineColor"}},{"kind":"Field","name":{"kind":"Name","value":"FontColor"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"MaxCardsToDisplay"}}]}}]} as unknown as DocumentNode<GetPage1DataQuery, GetPage1DataQueryVariables>;