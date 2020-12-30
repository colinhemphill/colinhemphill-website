import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Image from 'next/image';
import React from 'react';
import {
  formatDate,
  parseDate,
  prismicGetBlogPost,
  prismicGetBlogPosts,
  prismicGetLinks,
  prismicGetPersonalInformation,
  PrismicRichTextComponent,
} from '../../cms/prismic';
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
  const personalInformation = await prismicGetPersonalInformation();
  const blogPost = await prismicGetBlogPost(slug as string);
  const links = await prismicGetLinks();

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
  const blogPosts = await prismicGetBlogPosts();

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
  const date = formatDate(parseDate(first_publication_date));

  return (
    <>
      <PageHead pageTitle="Web Developer & Noise-Maker" />

      <Navbar />
      <Breadcrumbs
        currentPage={blogPost.title}
        previousPage={{ href: '/blog', title: 'Blog' }}
      />

      <Section color="white">
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
        <PrismicRichTextComponent richText={content} />
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
