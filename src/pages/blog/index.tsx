import { InferGetStaticPropsType } from 'next';
import React from 'react';
import {
  prismicGetBlogPosts,
  prismicGetLinks,
  prismicGetPersonalInformation,
} from '../../cms/prismic';
import BlogPostPreview from '../../components/BlogPostPreview/BlogPostPreview';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageHead from '../../components/PageHead';
import Section from '../../components/Section/Section';
import Separator from '../../components/Separator/Separator';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async () => {
  const personalInformation = await prismicGetPersonalInformation();
  const blogPosts = await prismicGetBlogPosts();
  const links = await prismicGetLinks();

  return {
    props: {
      blogPosts,
      links,
      personalInformation,
    },
    revalidate: 60,
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Page = (props: Props): JSX.Element => {
  const { blogPosts, links, personalInformation } = props;

  return (
    <>
      <PageHead pageTitle="Web Developer & Noise-Maker" />

      <Navbar />
      <Breadcrumbs currentPage="Blog" />

      <Section color="standard">
        <div className="text-center mb-sm">
          <h1>Blog Posts</h1>
          <h2>
            Front End Web Development, Music Production, Audio Engineering, and
            Podcasting
          </h2>
        </div>

        <div className="row row-cols-md-2 row-cols-1 g-xs">
          {blogPosts.map((post) => (
            <div className="col" key={post.id}>
              <BlogPostPreview
                content={post.content}
                first_publication_date={post.first_publication_date}
                id={post.id}
                image={post.image}
                reading_stats={post.reading_stats}
                tags={post.tags}
                title={post.title}
                uid={post.uid}
              />
            </div>
          ))}
        </div>
      </Section>

      <Separator background="dark" direction="down" foreground="standard" />

      <Footer links={links} personalInformation={personalInformation} />
    </>
  );
};

export default Page;
