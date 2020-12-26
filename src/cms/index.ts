import { CMSLink } from '../_types/CMSLink';
import {
  prismicCMSLink,
  prismicCMSName,
  prismicGetBlogPost,
  prismicGetBlogPosts,
  prismicGetEducationalExperiences,
  prismicGetLinks,
  prismicGetPersonalInformation,
  prismicGetPersonalProjects,
  prismicGetPrivateInformation,
  prismicGetProfessionalExperiences,
  prismicGetSkills,
  PrismicImageType,
  prismicParseDate,
  PrismicRichText,
  PrismicRichTextComponent,
} from './prismic';

export type SupportedCMS = 'prismic';
type RichText = PrismicRichText;
type Image = PrismicImageType;

export const apiEndpoint = process.env.CMS_ENDPOINT;
export const accessToken = process.env.CMS_KEY;

export interface CMSIntegration {
  RichTextComponent: ({ richText: unknown }) => JSX.Element;
  getBlogPost: (postId: string) => Promise<CMSBlogPost<RichText, Image>>;
  getBlogPosts: () => Promise<CMSBlogPost<RichText, Image>[]>;
  getEducationalExperiences: () => Promise<
    CMSEducationalExperience<RichText>[]
  >;
  getLinks: () => Promise<CMSLink[]>;
  getPersonalInformation: () => Promise<CMSPersonalInformation<RichText>>;
  getPersonalProjects: () => Promise<CMSPersonalProject<RichText, Image>[]>;
  getPrivateInformation: () => Promise<CMSPrivateInformation<RichText>[]>;
  getProfessionalExperiences: () => Promise<
    CMSPRofessionalExperience<RichText>[]
  >;
  getSkills: () => Promise<CMSSkills[]>;
  link: string;
  name: string;
  parseDate: (date: string) => Date;
}

export const getCMSIntegration = (): CMSIntegration => {
  return {
    RichTextComponent: PrismicRichTextComponent,
    getBlogPost: prismicGetBlogPost,
    getBlogPosts: prismicGetBlogPosts,
    getEducationalExperiences: prismicGetEducationalExperiences,
    getLinks: prismicGetLinks,
    getPersonalInformation: prismicGetPersonalInformation,
    getPersonalProjects: prismicGetPersonalProjects,
    getPrivateInformation: prismicGetPrivateInformation,
    getProfessionalExperiences: prismicGetProfessionalExperiences,
    getSkills: prismicGetSkills,
    link: prismicCMSLink,
    name: prismicCMSName,
    parseDate: prismicParseDate,
  };
};
