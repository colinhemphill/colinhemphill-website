import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Image from 'next/image';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import { formatDate } from '../../cms/helpers';
import BlogAuthor from '../../components/BlogAuthor/BlogAuthor';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageHead from '../../components/PageHead';
import Section from '../../components/Section/Section';
import Separator from '../../components/Separator/Separator';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { params } = ctx;
  const { slug } = params;
  const CMS = getCMSIntegration();
  const personalInformation = await CMS.getPersonalInformation();
  const blogPost = await CMS.getBlogPost(slug as string);
  const links = await CMS.getLinks();

  return {
    props: {
      blogPost,
      links,
      personalInformation,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const CMS = getCMSIntegration();
  const blogPosts = await CMS.getBlogPosts();

  const paths = blogPosts.map((post) => {
    return { params: { slug: post.uid } };
  });

  return {
    fallback: false,
    paths,
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Page = (props: Props): JSX.Element => {
  const { blogPost, links, personalInformation } = props;
  const { content, first_publication_date, image, tags, title } = blogPost;
  const CMS = getCMSIntegration();
  const date = formatDate(CMS.parseDate(first_publication_date));

  return (
    <>
      <PageHead pageTitle="Web Developer & Noise-Maker" />

      <Navbar />

      <Separator background="white" direction="down" foreground="primary" />

      <Section color="white">
        <Breadcrumbs
          currentPage={blogPost.title}
          previousPage={{ href: '/blog', title: 'Blog' }}
        />
        <figure className="figure mb-xs">
          <Image
            alt={image.alt}
            className="figure-img img-fluid rounded"
            height={image.dimensions.height}
            width={image.dimensions.width}
            src={image.url}
          />
          <figcaption className="figure-caption">{image.alt}</figcaption>
        </figure>

        <h1 className="mb-xs">{title}</h1>
        <BlogAuthor date={date} reading_stats={blogPost.reading_stats} />
      </Section>

      <Separator background="white" direction="up" foreground="light" />

      <Section color="light">
        <CMS.RichTextComponent richText={content} />
        <h4 className="mt-md">
          {tags.map((tag) => (
            <span className="badge bg-primary me-xxxs" key={tag}>
              {tag}
            </span>
          ))}
        </h4>
      </Section>

      <Separator background="dark" direction="down" foreground="light" />

      <Footer links={links} personalInformation={personalInformation} />
    </>
  );
};

export default Page;
