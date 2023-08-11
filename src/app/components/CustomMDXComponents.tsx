import Code from '@/app/(main)/blog/components/Code';
import CodeBlock from '@/app/(main)/blog/components/CodeBlock';
import CodeSnippetHeader from '@/app/(main)/blog/components/CodeSnippetHeader';
import Alert from '@/strum/Alert';
import CodeInline from '@/strum/CodeInline';
import Heading from '@/strum/Heading';
import HeadingWithIcon from '@/strum/HeadingWithIcon';
import Lightbox from '@/strum/Lightbox';
import Section from '@/strum/Section';
import Separator from '@/strum/Separator';
import { MDXComponents } from 'mdx/types';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export const CustomMDXComponents: MDXComponents = {
  a: (props) =>
    props.href?.includes('http') ? (
      <a className={twMerge(props.className, 'link')} {...props} />
    ) : (
      <Link className={props.className} href={props.href as Url}>
        {props.children}
      </Link>
    ),
  Alert,
  code: ({ className, children }) =>
    className?.includes('hljs') ? (
      <Code>{children}</Code>
    ) : (
      <CodeInline>{children}</CodeInline>
    ),
  CodeBlock,
  CodeSnippetHeader,
  h1: ({ children }) => <Heading level={1}>{children}</Heading>,
  h2: ({ children }) => (
    <Heading className="mt-8" level={2}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading className="mt-8" level={3}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading className="mt-8" level={4}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading className="mt-8" level={5}>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading className="mt-8" level={6}>
      {children}
    </Heading>
  ),
  HeadingWithIcon: (props) => <HeadingWithIcon className="mt-16" {...props} />,
  Image,
  Lightbox,
  Link,
  p: ({ children }) => <p className="mt-4">{children}</p>,
  pre: (props) => <pre {...props} className="whitespace-pre-wrap" />,
  Section,
  Separator,
};
