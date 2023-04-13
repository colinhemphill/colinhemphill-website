import Code from '@/app/blog/components/Code';
import CodeBlock from '@/app/blog/components/CodeBlock';
import CodeSnippetHeader from '@/app/blog/components/CodeSnippetHeader';
import Hero from '@/app/components/Hero';
import Lightbox from '@/app/components/Lightbox';
import Section from '@/app/components/Section';
import CodeInline from '@/strum/CodeInline';
import Heading from '@/strum/Heading';
import HeadingWithIcon from '@/strum/HeadingWithIcon';
import Separator from '@/strum/Separator';
import type { MDXComponents } from 'mdx/types';
import { twMerge } from 'tailwind-merge';

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    a: (props) => <a className={twMerge(props.className, 'link')} {...props} />,
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
    HeadingWithIcon: (props) => (
      <HeadingWithIcon className="mt-16" {...props} />
    ),
    Hero,
    Lightbox,
    p: ({ children }) => <p className="mt-4">{children}</p>,
    pre: (props) => <pre {...props} className="whitespace-pre-wrap" />,
    Section,
    Separator,
    ...components,
  };
}
