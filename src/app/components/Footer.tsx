import Heading from '@/strum/Heading';
import SocialLinks from '@/strum/SocialLinks';
import { getCodingLinks } from '@/utils/fetchers/coding';
import { getProjects } from '@/utils/fetchers/projects';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-0">
      <div className="container flex flex-col justify-between gap-8 pb-4 pt-16 lg:flex-row lg:pt-24">
        <div className="flex flex-col gap-2">
          <Heading level={3}>Sitemap</Heading>
          <Link className="link-solid" href="/">
            Home
          </Link>
          <Link className="link-solid" href="/blog">
            Blog
          </Link>
          <Link className="link-solid" href="/contact">
            Contact
          </Link>
          <Link className="link-solid" href="/sitemap.xml">
            sitemap.xml
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Heading level={3}>My Projects</Heading>
          {getProjects().map((project) => (
            <a className="link-solid" href={project.url} key={project._id}>
              {project.title}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Heading level={3}>Open Source</Heading>
          {getCodingLinks().map((link) => (
            <a className="link-solid" href={link.url} key={link._id}>
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <SocialLinks />

      <div className="container flex flex-col gap-1 py-8 text-center">
        <div>Copyright ©{new Date().getFullYear()} Colin Hemphill</div>
        <p className="text-sm text-neutral-7">
          This site was built with <a href="https://nextjs.org/">Next.js</a> and{' '}
          <a href="https://www.contentlayer.dev/">Contentlayer</a>, and deployed
          on <a href="https://vercel.com/">Vercel</a>.
        </p>
      </div>
    </footer>
  );
}
