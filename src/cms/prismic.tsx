import prismic from 'prismic-javascript';
import { DefaultClient } from 'prismic-javascript/types/client';
import {
  Date as parsePrismicDate,
  RichText,
  RichTextBlock,
} from 'prismic-reactjs';
import React from 'react';
import readingTime from 'reading-time';
import { CMSLink } from '../_types/CMSLink';

const apiEndpoint = process.env.CMS_ENDPOINT;
const accessToken = process.env.CMS_KEY;
export type PrismicRichText = RichTextBlock[];
export type PrismicImageType = {
  alt: string;
  dimensions: { height: number; width: number };
  url: string;
};
type PersonalInformation = CMSPersonalInformation<PrismicRichText>;
type PrivateInformation = CMSPrivateInformation<PrismicRichText>;
type ProfessionalExperience = CMSPRofessionalExperience<PrismicRichText>;
type EducationalExperience = CMSEducationalExperience<PrismicRichText>;
type PersonalProject = CMSPersonalProject<PrismicRichText, PrismicImageType>;
type BlogPost = CMSBlogPost<PrismicRichText, PrismicImageType>;

export const prismicCMSName = 'Prismic';
export const prismicCMSLink = 'https://prismic.io/';

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

const cmsClient = (req = null): DefaultClient =>
  prismic.client(apiEndpoint, createClientOptions(req, accessToken));

export const prismicGetBlogPost = async (postId: string): Promise<BlogPost> => {
  const document = await cmsClient().getByUID('blog_post', postId, {});
  const reading_stats = readingTime(RichText.asText(document.data.content));
  return {
    first_publication_date: document.first_publication_date,
    id: document.id,
    reading_stats,
    tags: document.tags,
    uid: document.uid,
    ...document.data,
  };
};

export const prismicGetBlogPosts = async (): Promise<BlogPost[]> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'blog_post'),
    {
      orderings: '[document.first_publication_date]',
    },
  );
  const experiences = document.results.map((result) => {
    const reading_stats = readingTime(RichText.asText(result.data.content));
    return {
      first_publication_date: result.first_publication_date,
      id: result.id,
      reading_stats,
      tags: result.tags,
      uid: result.uid,
      ...result.data,
    };
  });
  return experiences;
};

export const prismicGetPersonalInformation = async (): Promise<PersonalInformation> => {
  const document = await cmsClient().getSingle('personal_information', {});
  return {
    first_publication_date: document.first_publication_date,
    id: document.id,
    tags: document.tags,
    uid: document.uid,
    ...document.data,
  };
};

export const prismicGetPrivateInformation = async (): Promise<
  PrivateInformation[]
> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'private_information'),
    {
      orderings: '[my.private_information.label]',
    },
  );
  const experiences = document.results.map((result) => ({
    id: result.id,
    ...result.data,
  }));
  return experiences;
};

export const prismicGetProfessionalExperiences = async (): Promise<
  ProfessionalExperience[]
> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'professional_experience'),
    {
      orderings:
        '[my.professional_experience.is_current desc, my.professional_experience.end_date desc]',
    },
  );
  const experiences = document.results.map((result) => ({
    id: result.id,
    ...result.data,
  }));
  return experiences;
};

export const prismicGetEducationalExperiences = async (): Promise<
  EducationalExperience[]
> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'educational_experience'),
    {
      orderings:
        '[my.educational_experience.year desc, my.educational_experiencce.achievement_title]',
    },
  );
  const experiences = document.results.map((result) => ({
    id: result.id,
    ...result.data,
  }));
  return experiences;
};

export const prismicGetPersonalProjects = async (): Promise<
  PersonalProject[]
> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'personal_project'),
    {
      orderings: '[my.personal_project.title desc]',
    },
  );
  const projects = document.results.map((result) => ({
    id: result.id,
    ...result.data,
  }));
  return projects;
};

export const prismicGetSkills = async (): Promise<CMSSkills[]> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'skills'),
    {
      orderings: '[my.skills.level desc]',
    },
  );
  const skills = document.results.map((result) => ({
    id: result.id,
    ...result.data,
  }));
  return skills;
};

export const prismicGetLinks = async (): Promise<CMSLink[]> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'link'),
    {
      orderings: '[my.link.title]',
    },
  );
  const links = document.results.map((result) => ({
    id: result.id,
    ...result.data,
  }));
  return links;
};

export const PrismicRichTextComponent = ({
  richText,
}: {
  richText: PrismicRichText;
}): JSX.Element => {
  return <RichText render={richText} />;
};

export const formatDate = (date: Date | number): string => {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export const parseDate = (date: string): Date => {
  return parsePrismicDate(date);
};
